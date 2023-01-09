from django.contrib import admin
from .models import Register, Content

class RegisterAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password', 'confirm', 'dob')

class ContentAdmin(admin.ModelAdmin):
    list_display = ('name', 'url')

# Register your models here.

admin.site.register(Register, RegisterAdmin)
admin.site.register(Content, ContentAdmin)
