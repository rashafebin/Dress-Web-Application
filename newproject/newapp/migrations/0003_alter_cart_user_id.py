# Generated by Django 5.0.7 on 2024-10-29 03:57

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0002_alter_cart_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='newapp.login'),
        ),
    ]
