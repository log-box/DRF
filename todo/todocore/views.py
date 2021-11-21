from rest_framework.generics import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todocore.models import Project, Todo
from todocore.serializers import ProjectModelSerializer, TodoModelSerializer, ProjectModelSerializerBase

"""
модель Project: доступны все варианты запросов; для постраничного вывода установить размер страницы 10 записей; добавить
фильтрацию по совпадению части названия проекта;
 
модель ToDo: доступны все варианты запросов; при удалении не удалять ToDo, а выставлять признак, что оно закрыто; 
добавить фильтрацию по проекту; для постраничного вывода установить размер страницы 20.
"""


class ProjectsPagesLimits(LimitOffsetPagination):
    default_limit = 10


class ToDoPagesLimits(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectsPagesLimits

    # def get_serializer_class(self):
    #     if self.request.method in ['GET']:
    #         return ProjectModelSerializer
    #     else:
    #         return ProjectModelSerializerBase

    def get_queryset(self):
        project_name = self.request.query_params.get('project_name', '')
        project = Project.objects.all()
        if project_name:
            project = project.filter(project_name__contains=project_name)
        return project


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = ToDoPagesLimits

    def destroy(self, request, pk=None):
        todo = get_object_or_404(Todo, pk=pk)
        serializer = TodoModelSerializer(todo,
                                         data={"user": todo.user.pk, "project": todo.project.pk, "is_active": "false"})
        serializer.is_valid(raise_exception=True)
        # serializer.save()
        todo.is_active = False
        todo.save()
        return Response(serializer.data)
