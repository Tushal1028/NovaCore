from django.contrib import admin
from .models import Posts,User
# Register your models here.
admin.site.register(User)
admin.site.register(Posts)