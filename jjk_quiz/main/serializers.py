from rest_framework.serializers import ModelSerializer
from . import models

class QuestionsSerializer(ModelSerializer):
    class Meta:
        model = models.Questions
        fields = ['question', 'answer', 'wrong1', 'wrong2', 'wrong3']