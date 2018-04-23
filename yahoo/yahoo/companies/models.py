#in order to make models, we need to import the models from django. We also need to import decimals so django can read the data properly
from django.db import models
from decimal import Decimal

#Create your models here.

#we will create a company model which will have all the companies' data from the scraped json file.
class Company(models.Model):
        name = models.CharField(unique=True, max_length=50, blank=True, null=True)
        category = models.CharField(unique=False, max_length=100, blank=True, null=True)
        volume = models.IntegerField(unique=False, blank=True, null=True)
        average_volume = models.IntegerField(unique=False, blank=True, null=True)
        revenue = models.IntegerField(unique=False, blank=True, null=True)
        day_minimum = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        day_maximum = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        year_minimum = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        year_maximum = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        previous_close = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        opening = models.DecimalField(unique=False, max_digits=19, decimal_places=10, default=Decimal(0.0000), blank=True, null=True)
        ask = models.CharField(unique=False, max_length=50, blank=True, null=True)
        bid = models.CharField(unique=False, max_length=50, blank=True, null=True)
        market_cap = models.CharField(unique=False, max_length=50, blank=True, null=True)

        #sort the info by name
        def __str__(self):
            return U'%s' %(self.name)
