from django.db import models

# Create your models here.

class FormGroup(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    ph_no = models.BigIntegerField(default=0, max_length=10)
    dob = models.DateTimeField(auto_now=False, null=True)
    msg = models.CharField(max_length=50)
    url = models.CharField(max_length=50)

