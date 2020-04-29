from django.shortcuts import render
from guardian.shortcuts import assign_perm
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from permissions.services import APIPermissionClassFactory
from events.models import Event
from events.serializers import EventSerializer

# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.object.all()
    serializer_class = EventSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='EventPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                },
                'instance': {
                'retrieve': 'events.view_event',
                'destroy': False,
                'update': False,
                 }
            },

        )
    )

    def perform_create(self, serializer):
        event = serializer.save()
        user = self.request.user
        assign_perm('events.change_event', user, event)
        return Response(serializer.data)
