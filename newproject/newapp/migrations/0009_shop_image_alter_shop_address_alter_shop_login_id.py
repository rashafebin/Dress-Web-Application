# Generated by Django 5.0.7 on 2024-11-01 06:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0008_rename_number_registration_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='shop',
            name='image',
            field=models.URLField(default='image', max_length=100),
        ),
        migrations.AlterField(
            model_name='shop',
            name='address',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='shop',
            name='login_id',
            field=models.OneToOneField(default='100', on_delete=django.db.models.deletion.CASCADE, to='newapp.login'),
        ),
    ]
