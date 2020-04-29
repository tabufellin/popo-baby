from rest_framework import serializers

from babys.models import Baby
from parents.serializers import ParentSerializer

class BabySerializer(serializers.ModelSerializer):

    class Meta:
        model = Baby
        fields = (
            'id',
            'name',
            'lastname',
            'parent'
        )

