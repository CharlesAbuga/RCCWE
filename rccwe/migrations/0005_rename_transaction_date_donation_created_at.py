# Generated by Django 4.2.6 on 2023-11-02 16:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rccwe', '0004_donation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='donation',
            old_name='transaction_date',
            new_name='created_at',
        ),
    ]