from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RegisterSerializer, ContentSerializer
from .models import Register, Content

# Create your views here.

class RegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = Register.objects.all()

class ContentView(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = Content.objects.all()
