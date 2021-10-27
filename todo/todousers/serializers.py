from rest_framework.serializers import ModelSerializer

from todousers.models import TodoUsers


class UsersModelSerializer(ModelSerializer):
    class Meta:
        model = TodoUsers
        fields = ['username', 'first_name', 'last_name', 'email']
