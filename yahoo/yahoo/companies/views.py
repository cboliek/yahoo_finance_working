#we need to import a few things from the django files into the views here
import json
from django.http import JsonResponse
from django.urls import reverse
from django.core import serializers
from django.shortcuts import render, get_object_or_404, redirect, render_to_response
from django.db.models import Model
from . import models





# Create your views here.

#create home page view
def home(request):
    return render(request, "companies/home.html", {
        'Company': models.Company.objects.all(),
    })
#create individual company's views here
def business(request, pk):
    business = get_object_or_404(models.Company, id=pk)
    print(business)

    return render(request, "companies/company.html", {
    'business': business,
    })

#create api view here
# def api(request):
#     company = models.Company.objects.all()


def api(request, pk):
    #selected_company = models.Company.objects.get(pk=id)
    selected_company = get_object_or_404(models.Company, id=pk)
    #selected_company = models.Company.objects.filter(pk=id).values()
    data = {
        "company": selected_company.bid
    }
    return JsonResponse({"company": list(selected_company)})
