from django.contrib import admin
from .models import Patient
@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ("patient_id","name","age","gender","phone","doctor","status","created_at")
    search_fields = ("patient_id","name","phone","doctor")
