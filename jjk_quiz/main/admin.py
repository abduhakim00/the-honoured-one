from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Questions)
class QuestionsAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = [field.name for field in models.Questions._meta.get_fields()] 
    list_editable = ['answer', "question"]
    def __str__(self):
        return self.question