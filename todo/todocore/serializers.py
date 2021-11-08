from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField
from rest_framework.serializers import ModelSerializer

from todocore.models import Project, Todo
from todousers.models import TodoUsers


class ProjectModelSerializer(ModelSerializer):
    project_user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related(), many=True)

    class Meta:
        model = Project
        fields = ['id', 'project_name', 'repository', 'project_user']


class TodoModelSerializer(ModelSerializer):
    user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related())
    is_active = serializers.BooleanField(read_only=True)

    class Meta:
        model = Todo
        fields = '__all__'
