# Generated by Django 5.0.7 on 2024-11-01 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0007_registration_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registration',
            old_name='number',
            new_name='phone_number',
        ),
    ]