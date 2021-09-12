from django.db import models


class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200, blank=True, default='')
    completed = models.BooleanField(default=False)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.name
