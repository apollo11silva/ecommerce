# Generated by Django 4.2.11 on 2024-03-31 01:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='countInStock',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='numReviews',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
