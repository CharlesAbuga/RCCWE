from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('newsletters/', views.getNewsLetter, name='newsletter'),
    path('search-newsletters/', views.searchNewsletters, name='search-newsletters'),
    path('newsletter/<str:pk>/', views.getSingleNewsLetter, name='singleNewsletter'),
    path('contact/', views.getContacts, name='contact'),
    path('subscribe/', views.subscribe, name='subscribe'),
    path('donate/', views.donate, name='donate'),
]

