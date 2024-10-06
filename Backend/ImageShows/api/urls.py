from django.urls import path,include
from rest_framework import routers
from api.views import UserViweSet , PostViewSet

router=routers.DefaultRouter()

router.register(r'users',UserViweSet)
router.register(r'images',PostViewSet)
urlpatterns = [
    path('',include(router.urls))
]
