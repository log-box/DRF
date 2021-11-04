from rest_framework.viewsets import ModelViewSet
from todousers.models import TodoUsers
from todousers.serializers import UsersModelSerializer


class UsersModelViewSet(ModelViewSet):
    queryset = TodoUsers.objects.all()
    serializer_class = UsersModelSerializer