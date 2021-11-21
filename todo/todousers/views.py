from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response

from todousers.models import TodoUsers
from todousers.serializers import UsersModelSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

"""
модель User: есть возможность просмотра списка и каждого пользователя в отдельности, 
можно вносить изменения, нельзя удалять и создавать;
"""


class UsersModelViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    renderer_classes = [BrowsableAPIRenderer, JSONRenderer]

    def list(self, request):
        users = TodoUsers.objects.all()
        serializer = UsersModelSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = get_object_or_404(TodoUsers, pk=pk)
        serializer = UsersModelSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        user = get_object_or_404(TodoUsers, pk=pk)
        serializer = UsersModelSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
