from django.db import models

# Create your models here.
class Event(models.Model):
    event_type = models.CharField(max_length=20, null=False),
    dateTime = models.DateTimeField(auto_now=True),
    notes = models.CharField(max_length=200, null=True)
    baby = models.ForeignKey(
        'babys.Baby',
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    object = models.Manager()

    def __str__(self):
        return self.event_type, self.dateTime, self.notes, self.baby
