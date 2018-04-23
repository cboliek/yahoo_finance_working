#let's import the admin feature of django, the path function in order to make urls, and views that the url will display
from django.contrib import admin
from django.urls import path

from . import views

#what's our app name?
app_name = 'companies'
#let's put the urls here
urlpatterns = [
    #url for the home page
    path('', views.home, name='home'),
    #url for the indidivual page
    path('business/<int:pk>', views.business, name='business'),
    # path('companies/', views.list_companies, name='companies-list'),
    # path('companies/<int:pk>', views.companies, name='companies-detail'),
    #url for the api
    # path('api/', views.api, name='api'),
]
