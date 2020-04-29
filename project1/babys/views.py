from guardian.shortcuts import assign_perm
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from permissions.services import APIPermissionClassFactory
from babys.models import Baby
from events.models import Event
from babys.serializers import BabySerializer

def evaluate(user, obj, request):
    return user.name == obj.parent.name


class BabyViewSet(viewsets.ModelViewSet):
    queryset = Baby.object.all()
    serializer_class = BabySerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='EventPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': False,
                    'destroy': True
                    
                },
                'instance': {
                    'retrieve': evaluate,
                    'destroy': evaluate,
                    'update': evaluate,
                    'partial_update': evaluate,
                    'events': evaluate
                }
            }
        ),
    )

    def perform_create(self, serializer):
        baby = serializer.save()
        user = self.request.user
        assign_perm('babys.change_baby', user, baby)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def events(self, request, pk=None):
        baby = self.get_object()
        response = []
        for event in Event.object.all():
            #TODO SEND ALL EVENTS OF THIS BABE
            if (event.baby == baby.id):
                response.append(event)
        
        return Response(response)
