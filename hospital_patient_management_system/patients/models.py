from django.db import models

class Patient(models.Model):
    GENDER_CHOICES = [("Male","Male"),("Female","Female"),("Other","Other")]
    STATUS_CHOICES = [("Active","Active"),("Discharged","Discharged")]
    patient_id = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phone = models.CharField(max_length=15)
    email = models.EmailField(blank=True)
    blood_group = models.CharField(max_length=5, blank=True)
    address = models.TextField(blank=True)
    diagnosis = models.CharField(max_length=200, blank=True)
    doctor = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Active")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.patient_id} - {self.name}"
