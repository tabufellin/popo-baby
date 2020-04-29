from django.db import models

# Create your models here.
#I would like to change it, that if it has no parent
#i kill the baby, kidding, but if its no parent
#is no child
class Baby(models.Model):
    name = models.CharField(max_length=50, null=False)
    lastname = models.CharField(max_length=50, null=True)
    parent = models.ForeignKey(
        'parents.Parent',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    object = models.Manager()
    def __str__(self):
        return self.name, self.lastname, self.parent
