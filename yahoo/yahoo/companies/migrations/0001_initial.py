# Generated by Django 2.0 on 2018-04-19 14:13

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True, unique=True)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('volume', models.IntegerField(blank=True, null=True)),
                ('average_volume', models.IntegerField(blank=True, null=True)),
                ('revenue', models.IntegerField(blank=True, null=True)),
                ('day_minimum', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('day_maximum', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('year_minimum', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('year_maximum', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('previous_close', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('opening', models.DecimalField(blank=True, decimal_places=10, default=Decimal('0'), max_digits=19, null=True)),
                ('ask', models.CharField(blank=True, max_length=50, null=True)),
                ('bid', models.CharField(blank=True, max_length=50, null=True)),
                ('market_cap', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
