from rest_framework import serializers
from api.models import User,Posts

# create a new User serializers
class UserSerializer(serializers.ModelSerializer):
    user_id=serializers.ReadOnlyField()
    class Meta:
        model = User
        fields='__all__'


class PostSerializer(serializers.ModelSerializer):
    img_id=serializers.ReadOnlyField()
    class Meta:
        model = Posts
        fields='__all__'
        extra_kwargs={
            'tags':{'required':False},
            'category':{'required':False}
        }