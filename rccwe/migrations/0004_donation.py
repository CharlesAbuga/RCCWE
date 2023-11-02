# Generated by Django 4.2.6 on 2023-11-01 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rccwe', '0003_contact_alter_images_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(max_length=15)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('email', models.EmailField(max_length=254)),
                ('transaction_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
