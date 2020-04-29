from rest_framework import serializers

from events.models import Event
from babys.serializers import BabySerializer

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        'id',
        'dateTime',
        'event_type',
        'notes',
        'baby'



