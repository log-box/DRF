from django.contrib import admin

# Register your models here.
from authors.models import Authors

admin.site.register(Authors)