from rest_framework import routers

from .todo import TodoViewSet

router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet)
