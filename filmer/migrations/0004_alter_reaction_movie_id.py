# Generated by Django 4.0.2 on 2022-03-15 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filmer', '0003_reaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reaction',
            name='movie_id',
            field=models.CharField(max_length=100),
        ),
    ]