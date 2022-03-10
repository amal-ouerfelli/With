from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.Users, name='users'),
    path('profile/', views.Profiles, name="profile"),
    path('profile/<str:pk>/', views.ProfileById, name="profileDetail"),



]
