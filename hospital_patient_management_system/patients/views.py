from django.shortcuts import render
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework import status
from .models import Patient
from .serializers import PatientSerializer

def frontend(request):
    return render(request, "index.html")

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all().order_by("-created_at")
    serializer_class = PatientSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["patient_id","name","phone","doctor","diagnosis"]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message":"Patient deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
