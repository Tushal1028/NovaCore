from django.shortcuts import render
from rest_framework import viewsets
from api.models import User, Posts
from api.serializers import UserSerializer , PostSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser,FormParser
# Create your views here.
class UserViweSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # user/1/posts
    @action(detail=True,methods=['get'])
    def posts(self,request,pk=None):
        try:
            user=User.objects.get(pk=pk)
            post=Posts.objects.filter(user=user)
            post_serializer=PostSerializer(post,many=True,context={'request':request})
            return Response(post_serializer.data)
        except:
            return Response({'message':'user might not exist or no post in user'})
    
class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    parser_classes=[MultiPartParser,FormParser]

    @action(detail=False, methods=['get'], url_path='category/(?P<categoryl>[^/.]+)')
    def filter_by_user(self, request, categoryl=None):
        try:
            post=Posts.objects.filter(category=categoryl)
            post_serializer=PostSerializer(post,many=True,context={'request':request})
            return Response(post_serializer.data)
        except:
            return Response({'message':'category not found'})
        
    @action(detail=False, methods=['get'], url_path='accounts/(?P<user>[^/.]+)')
    def filter_by_user_s_post(self, request, user=None):
        try:
            post=Posts.objects.filter(user_id=user)
            post_serializer=PostSerializer(post,many=True,context={'request':request})
            return Response(post_serializer.data)
        except:
            return Response({'message':'category not found'})