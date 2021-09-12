
from rest_framework import viewsets

from models.todo import Todo
from serializers.todo import TodoSerializer



class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
