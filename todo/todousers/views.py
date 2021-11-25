from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

from todousers.models import TodoUsers
from todousers.serializers import UsersModelSerializer, ExtendsUsersModelSerializer

"""
модель User: есть возможность просмотра списка и каждого пользователя в отдельности, 
можно вносить изменения, нельзя удалять и создавать;
"""


class UsersModelViewSet(ListAPIView, CreateAPIView):
    queryset = TodoUsers.objects.all()
    serializer_class = UsersModelSerializer
    permission_classes = [IsAuthenticated]
    renderer_classes = [BrowsableAPIRenderer, JSONRenderer]

    def get_serializer_class(self):
        if self.request.version == 'extend':
            return ExtendsUsersModelSerializer
        return UsersModelSerializer
    # permission_classes = [IsAuthenticated]
    # renderer_classes = [BrowsableAPIRenderer, JSONRenderer]
    #
    # def get_serializer_class(self):
    #     if self.request.version == 'extend':
    #         return ExtendsUsersModelSerializer
    #     return UsersModelSerializer
    #
    # def list(self, request):
    #     users = TodoUsers.objects.all()
    #     serializer = UsersModelSerializer(users, many=True)
    #     return Response(serializer.data)
    #
    # def retrieve(self, request, pk=None):
    #     user = get_object_or_404(TodoUsers, pk=pk)
    #     serializer = UsersModelSerializer(user)
    #     return Response(serializer.data)
    #
    # def update(self, request, pk=None):
    #     user = get_object_or_404(TodoUsers, pk=pk)
    #     serializer = UsersModelSerializer(user, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)
