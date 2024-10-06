from django.db import models

# Create your models here.

# creating user models here
class User(models.Model):
    user_id=models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50,blank=False)
    last_name = models.CharField(max_length=50,blank=False)
    User_name = models.CharField(max_length=50,blank=False)
    email = models.EmailField(blank=False)
    password = models.CharField(max_length=100,blank=False)
    bio=models.TextField(default='None')
    insta_name = models.CharField(max_length=50,default="None")
    faceboook_name = models.CharField(max_length=50,default='None')
    profile_image = models.ImageField(upload_to='user/', blank=True)

    def __str__(self):
        return str(self.first_name)
    

class Posts(models.Model):
    img_id = models.AutoField(primary_key=True)
    image_file=models.ImageField(upload_to='images/',blank=True)
    category=models.CharField(max_length=100,blank=False,choices=(
        ('nature', 'nature'),
        ('travel', 'travel'),
        ('animal', 'animal'),
        ('wallpaper', 'wallpaper'),
        ('india', 'india'),
        ('anime', 'anime'),
        ('flower', 'flower'),
        ('city', 'city'),
        ('prople', 'prople'),
        ('film', 'film'),
        ('fashion', 'fashion'),
        ('history', 'history'),
    ))
    tags=models.TextField(blank=True)
    added=models.DateTimeField(auto_now=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)