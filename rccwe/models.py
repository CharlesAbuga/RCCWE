from django.db import models
import secrets


class Images(models.Model):
    image = models.ImageField(blank=True, null=True)
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.description
    
class Newsletter(models.Model):
    title = models.CharField(max_length=250, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    title_pic = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.title

class Contact(models.Model):
    first_name= models.CharField(max_length=250, null=True, blank=True)
    last_name= models.CharField(max_length=250, null=True, blank=True)
    email= models.EmailField(blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    subject = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=250, null=True, blank=True)


    def __str__(self):
        return self.subject


class Subscriber(models.Model):
    email = models.EmailField(unique=True, blank=True, null=True)
    
    def __str__(self):
        return self.email
    

class Donation(models.Model):
    phone_number = models.CharField(max_length=15)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    email = models.EmailField()
    transaction_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
# Create your models here.
