from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class TodoUsers(AbstractUser):
    email = models.EmailField(
        verbose_name='почта',
        unique=True,
    )
