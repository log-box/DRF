from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet

from todousers.models import TodoUsers
from todousers.serializers import UsersModelSerializer, ExtendsUsersModelSerializer

"""
модель User: есть возможность просмотра списка и каждого пользователя в отдельности, 
можно вносить изменения, нельзя удалять и создавать;
"""


class UsersModelViewSet(ModelViewSet):
    queryset = TodoUsers.objects.all()
    serializer_class = ExtendsUsersModelSerializer
    permission_classes = [IsAuthenticated]
    renderer_classes = [BrowsableAPIRenderer, JSONRenderer]

