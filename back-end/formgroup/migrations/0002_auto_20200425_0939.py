# Generated by Django 3.0.5 on 2020-04-25 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formgroup', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formgroup',
            name='ph_no',
            field=models.IntegerField(default=0, max_length=10),
        ),
    ]
