from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from formgroup.serializers import FormGroupSerializer
from formgroup.models import FormGroup
from formgroup.utils import StandardResultsSetPagination


class FormGroupViewSet(viewsets.ModelViewSet):
    queryset = FormGroup.objects.all()
    pagination_class = StandardResultsSetPagination
    serializer_class = FormGroupSerializer

    def get_queryset(self):
        qs = FormGroup.objects.all().order_by('-id')
        return qs

