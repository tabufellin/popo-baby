from django.shortcuts import render

# Create your views here.

from guardian.shortcuts import assign_perm
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from permissions.services import APIPermissionClassFactory
from parents.models import Parent
from babys.models import Baby
from parents.serializers import ParentSerializer

def evaluate(user, obj, request):
    return user.name == obj.parent.name


class ParentViewSet(viewsets.ModelViewSet):
    queryset = Parent.object.all()
    serializer_class = ParentSerializer
    permission_classes = (
        APIPermissionClassFactory(
            name='BabyPermission',
            permission_configuration={
                'base': {
                    'create': True,
                    'list': True,
                    'update': True,
                    'partial_update': True
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
        parent = serializer.save()
        user = self.request.user
        assign_perm('parents.change_parent', user, parent)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def babys(self, request, pk=None):
        parent = self.get_object()
        response = []
        for baby in Baby.object.all():
            #TODO SEND ALL EVENTS OF THIS BABE
            if (baby.parent == parent.id):
                response.append(baby)
        
        return Response(response)
