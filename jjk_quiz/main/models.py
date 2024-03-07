from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.

class Questions(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    wrong1 = models.CharField(max_length=255)
    wrong2 = models.CharField(max_length=255)
    wrong3 = models.CharField(max_length=255)

# class TestTakers(models.Model):
#     name = models.CharField(max_length=20)
#     email = models.EmailField()
#     latest_score = models.IntegerField(validators=[
#             MaxValueValidator(100),
#             MinValueValidator(0)
#         ], null=True, blank=True)

