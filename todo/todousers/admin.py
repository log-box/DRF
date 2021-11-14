from django.contrib import admin

# Register your models here.
from todousers.models import TodoUsers
from django.contrib.auth.models import Group

admin.site.register(TodoUsers)
# admin.site.unregister(Group)