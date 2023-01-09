from rest_framework import serializers
from .models import Register, Content

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('id', 'username', 'email', 'password', 'confirm', 'dob')

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ('id', 'name', 'url')
