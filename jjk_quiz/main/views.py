import random
from itertools import chain
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.conf import settings
from django.core.mail import send_mail
from django.db.models import Q
from . import serializers, models
# Create your views here.

@api_view()
def greeting(request):
    return Response("You are my special!!!")



@api_view(['GET'])
def get5q(request):
    QUESTIONS_IN_A_TEST = 5
    allQs = models.Questions.objects.all()
    totalqs = len(allQs)

    # random 5 ids and fetching instances
    # resulting_qs = list(allQs.filter(Q(id=random.randint(1, totalqs))| Q(id=random.randint(1, totalqs))| 
    #     Q(id=random.randint(1, totalqs))| Q(id=random.randint(1, totalqs))| Q(id=random.randint(1, totalqs))))
    resulting_qs = []
    for i in range (0, QUESTIONS_IN_A_TEST):
        resulting_qs = chain(resulting_qs, allQs.filter(id=random.randint(1, totalqs)))
    resulting_qs = list(resulting_qs)
    qs_serialized = serializers.QuestionsSerializer(resulting_qs, many=True)
    return Response(qs_serialized.data)

@api_view(['POST'])
def compute(request):
    def validate(data):
        if("fullName" not in data or 'score' not in data or 'email' not in data):
            raise Exception("Full name/Score or Email is missing")
    try:        
        validate(request.data)
        print(request.data)
        validate_email(request.data['email'])
        
    except ValidationError:
        return Response({"Details":"Email wrong format"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({"Details":"Missing elements"}, status=status.HTTP_400_BAD_REQUEST)
    else: 
        if request.data['score'] == 100:
            add_string = 'Uhh Nani Masaka, Congratulations Burotha'   
        elif request.data['score'] >= 80:
            add_string = "Hokore, You are strong"
        elif request.data['score'] >= 40:
            add_string = "Gambare Gambare"
        else:
            add_string = "Ahahahaha Daijobudesho Datte Kimi Yowaimo"
        subject = 'Your score, '+ request.data['fullName']
        message = f'Hi {request.data['fullName']}, your score is {request.data['score']}. {add_string}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [request.data['email'], ]
        send_mail( subject, message, email_from, recipient_list )
        return Response("okay", status=status.HTTP_202_ACCEPTED)

    
