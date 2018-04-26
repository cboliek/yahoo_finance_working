# Generated by Django 2.0 on 2018-04-24 00:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_category', models.CharField(blank=True, max_length=50, null=True, unique=True)),
                ('frequency', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]