# Generated by Django 3.0.5 on 2020-04-25 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formgroup', '0002_auto_20200425_0939'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formgroup',
            name='ph_no',
            field=models.BigIntegerField(default=0, max_length=10),
        ),
    ]
