from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from todocore.models import Project, Todo
from todousers.models import TodoUsers


class ProjectModelSerializer(HyperlinkedModelSerializer):
    project_user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related(), many=True)

    class Meta:
        model = Project
        fields = ['id', 'project_name', 'repository', 'project_user']


class TodoModelSerializer(HyperlinkedModelSerializer):
    user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related())
    is_active = serializers.BooleanField(read_only=True)
    project = PrimaryKeyRelatedField(queryset=Project.objects.select_related())

    class Meta:
        model = Todo
        fields = '__all__'
