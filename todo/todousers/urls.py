from django.urls import path, include
from rest_framework.routers import DefaultRouter

# from todousers.views import UsersModelViewSet
#
# router = DefaultRouter()
# router.register('users', UsersModelViewSet, basename='extend')
# # router.register('users', UsersModelViewSet, basename='extend')
#
# app_name = 'userapp'
# urlpatterns = [
#     path('', include(router.urls)),
#     # path('/default/', include('todousers.urls', namespace='')),
#     # path('/extend/', include('todousers.urls', namespace='extend')),
#     # path('/users/<str:version>/', include('todousers.urls', namespace='')),
# ]
