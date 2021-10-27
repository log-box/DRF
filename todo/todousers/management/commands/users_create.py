from django.core.management import BaseCommand

from todousers.models import TodoUsers


class Command(BaseCommand):
    help = 'Создание пяти рандомных пользователей, а также супер пользователя - admin\nПароли равны username'

    def handle(self, *args, **options):
        TodoUsers.objects.all().delete()

        for i in range(1, 6):
            new_user = TodoUsers.objects.create_user(username=f'user{i}',
                                                     first_name=f'user{i}_first_name',
                                                     last_name=f'user{i}_last_name',
                                                     email=f'user{i}@mail.ru',
                                                     password=f'user{i}')
            new_user.save()

        TodoUsers.objects.create_superuser(username='admin', password='admin')
