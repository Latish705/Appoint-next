# Generated by Django 5.0.2 on 2024-03-03 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_appointment_user_alter_user_phone_organisation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='organisation',
            name='appointments',
        ),
        migrations.AddField(
            model_name='user',
            name='refreshToken',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=20),
        ),
        migrations.DeleteModel(
            name='appointment',
        ),
        migrations.DeleteModel(
            name='organisation',
        ),
    ]
