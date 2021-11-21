import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User

from todocore.models import Todo, Project
from todocore.views import ProjectModelViewSet
from todousers.views import UsersModelViewSet
from todousers.models import TodoUsers


# Create your tests here.
class TestUsersModelViewSet(TestCase):
    def test_APIRequestFactory_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UsersModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_APIRequestFactory_create_project(self):
        factory = APIRequestFactory()
        admin = TodoUsers.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        request = factory.post('/api/projects/', {'project_name': 'Guest'}, format='json')
        force_authenticate(request, admin)
        view = ProjectModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_APIClient_get_detail(self):
        new_project = mixer.blend(Project, project_name='Test1')
        client = APIClient()
        response = client.get(f'/api/projects/{new_project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestBookViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_project(self):
        project = mixer.blend(Project, project_name='TestProject1')
        admin = TodoUsers.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        self.client.login(username='admin', password='admin')
        response = self.client.put(f'/api/projects/{project.id}/', {'project_name': 'TestProject2'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.project_name, 'TestProject2')

