from rest_framework.serializers import ModelSerializer

from authors.models import Authors


class AuthorsModelSerializer(ModelSerializer):

    class Meta:
        model = Authors
        fields = '__all__'
