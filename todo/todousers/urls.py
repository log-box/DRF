from django.urls import path

from todousers.views import UsersModelViewSet

app_name = 'userapp'
urlpatterns = [
    path('', UsersModelViewSet.as_view()),
]