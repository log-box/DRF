from rest_framework.relations import PrimaryKeyRelatedField, HyperlinkedRelatedField, StringRelatedField
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from todocore.models import Project, Todo
from todousers.models import TodoUsers
from todousers.serializers import UsersModelSerializer


class ProjectModelSerializer(ModelSerializer):
    project_user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related(), many=True)

    class Meta:
        model = Project
        # fields = '__all__'
        fields = ['id', 'project_name', 'repository', 'project_user']


class TodoModelSerializer(ModelSerializer):
    user = PrimaryKeyRelatedField(queryset=TodoUsers.objects.select_related())
    # project = PrimaryKeyRelatedField(queryset=Project.objects.all())

    class Meta:
        model = Todo
        fields = '__all__'
