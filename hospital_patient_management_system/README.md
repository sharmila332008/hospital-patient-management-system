# Hospital / Patient Management System

A beginner-friendly full-stack CRUD web application built with Django REST Framework, HTML/CSS/JavaScript and SQLite.

## Features
- Patient Create, Read, Update and Delete
- Server-side validation
- Search/filter
- REST API
- Responsive UI
- SQLite database
- Django admin
- Clear success/error messages

## Setup
1. Install Python 3.11+.
2. Open terminal in this project folder.
3. Create a virtual environment:
   `python -m venv venv`
4. Activate it:
   Windows: `venv\Scripts\activate`
   Linux/macOS: `source venv/bin/activate`
5. Install dependencies:
   `pip install -r requirements.txt`
6. Create database tables:
   `python manage.py makemigrations`
   `python manage.py migrate`
7. Start server:
   `python manage.py runserver`
8. Open `http://127.0.0.1:8000/`

## API endpoints
- POST `/api/patients/`
- GET `/api/patients/`
- GET `/api/patients/{id}/`
- PUT `/api/patients/{id}/`
- PATCH `/api/patients/{id}/`
- DELETE `/api/patients/{id}/`

## Suggested Postman tests
- Create: valid patient, missing name, invalid age, invalid phone, duplicate patient ID
- Read: empty and populated database
- Update: valid ID and invalid ID
- Delete: valid ID and invalid ID
- Verify database after every operation

## Architecture
User -> HTML/CSS/JavaScript -> Django REST API -> Django ORM -> SQLite

## Future enhancements
Authentication/role-based access, doctor and appointment modules, billing, bed management, reports, MySQL/PostgreSQL, deployment.
