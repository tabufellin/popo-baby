from django.db import models

# Create your models here.
class Parent(models.Model):
    name = models.CharField(max_length=50)
    object = models.Manager()
    def __str__(self):
        return self.name

