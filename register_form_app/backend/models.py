from django.db import models

# Create your models here.

class Register(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    confirm = models.CharField(max_length=120)
    dob = models.DateField()

    def _str_(self):
        return self.title

class Content(models.Model):
    name = models.CharField(max_length=120)
    url = models.CharField(max_length=500)

    def _str_(self):
        return self.title
