from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import AbstractUser, PermissionsMixin, UserManager
from django.db import models


# Create your models here.

class Group():
    sername = models.CharField(max_length=100, unique=True)


class TodoUsers(AbstractBaseUser, PermissionsMixin):

    USERNAME_FIELD = 'username'
    username = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100, )
    last_name = models.CharField(max_length=100, )
    is_staff = models.BooleanField(default=True)
    email = models.EmailField(
        verbose_name='почта',
        unique=True,
    )
    objects = UserManager()
