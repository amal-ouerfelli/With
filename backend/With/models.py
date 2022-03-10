from django.db import models
# Create your models here.

class User(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField(auto_now=True)
    first_name = models.CharField(max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_user'

class Profile(models.Model):
    GENDER_CHOICES=[('F','Female'), ('M', 'Male')]
    idProfile = models.AutoField(db_column='idProfile', primary_key=True)  
    HomeTown = models.CharField(db_column='HomeTown', max_length=255)  
    Gender = models.CharField(db_column='Gender', max_length=6, choices=GENDER_CHOICES)
    Age= models.IntegerField(db_column='Age')
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    class Meta:
        db_table = 'profile'
