from django.db import models

# Create your models here.


class Authors(models.Model):
    firs_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_date = models.DateField()
