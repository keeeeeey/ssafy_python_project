# Generated by Django 3.2.13 on 2022-10-11 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_alter_article_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(blank=True, upload_to='%Y/%m/%d'),
        ),
    ]
