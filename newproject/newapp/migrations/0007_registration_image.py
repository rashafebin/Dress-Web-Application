# Generated by Django 5.0.7 on 2024-11-01 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0006_alter_order_product_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='image',
            field=models.URLField(default='image', max_length=100),
        ),
    ]
