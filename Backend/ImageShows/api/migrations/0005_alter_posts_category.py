# Generated by Django 5.1.1 on 2024-09-16 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_posts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='category',
            field=models.CharField(choices=[('nature', 'nature'), ('travel', 'travel'), ('animal', 'animal'), ('wallpaper', 'wallpaper'), ('art and culture', 'art and culture'), ('india', 'india'), ('anime', 'anime'), ('flower', 'flower'), ('city', 'city'), ('texture and patterns', 'texture and patterns'), ('prople', 'prople'), ('film', 'film'), ('fashion', 'fashion'), ('history', 'history')], max_length=100),
        ),
    ]
