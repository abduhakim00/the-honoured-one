from django.urls import path
from . import views


urlpatterns = [path('home', views.greeting),
    path("test", views.get5q),
    path('compute', views.compute)]