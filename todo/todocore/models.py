from django.db import models
from todousers.models import TodoUsers


class Project(models.Model):
    project_name = models.CharField(max_length=100)
    project_user = models.ManyToManyField(TodoUsers, blank=True)
    repository = models.URLField(max_length=200, blank=True)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.project_name


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.PROTECT, blank=False)
    todo_text = models.TextField(blank=True)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    user = models.ForeignKey(TodoUsers, on_delete=models.PROTECT)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Заметка'
        verbose_name_plural = 'Заметки'

    def __str__(self):
        return self.project


