# Generated by Django 4.2.6 on 2023-11-02 17:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rccwe', '0005_rename_transaction_date_donation_created_at'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Donation',
        ),
    ]
