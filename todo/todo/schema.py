import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType

from todocore.models import Todo, Project
from todousers.models import TodoUsers


class ProjectsType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UsersType(DjangoObjectType):
    class Meta:
        model = TodoUsers
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectsType)
    all_users = graphene.List(UsersType)
    all_todos = graphene.List(TodoType)

    def resolve_all_todos(self, info):
        return Todo.objects.all()

    def resolve_all_users(self, info):
        return TodoUsers.objects.all()

    def resolve_all_projects(self, info):
        return Project.objects.all()


schema = graphene.Schema(query=Query)
