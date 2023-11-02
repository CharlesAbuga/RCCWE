from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_daraja.mpesa.core import MpesaClient

from .models import Newsletter, Contact, Donation
from .serializers import NewsLetterSerializer, ContactSerializer, DonationSerializer




@api_view(['GET'])
def getRoutes(request):

    data = [{'name':'Charles'}]
    return Response(data)


@api_view(['GET'])
def getNewsLetter(request):
    newsletter = Newsletter.objects.all()
    serializer = NewsLetterSerializer(newsletter, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def searchNewsletters(request):
    query = request.GET.get('query', '')  # Get the search query from the request
    newsletters = Newsletter.objects.filter(title__icontains=query)  # Replace 'title' with the field you want to search on
    serializer = NewsLetterSerializer(newsletters, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSingleNewsLetter(request, pk):
    singleNewsletter = Newsletter.objects.get(id=pk)
    serializer = NewsLetterSerializer(singleNewsletter, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def getContacts(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    


@api_view(['POST'])
def donate(request):
    callback_url = 'https://rccwe-1-3d3e8fafea19.herokuapp.com/express-payment'
    account_reference = 'reference'
    transaction_desc = 'Description'
    phone_number = request.data.get('phone_number')  # Default to '0' if not found
    amount = int(request.data.get('amount'))
    email = request.data.get('email')
    cl = MpesaClient()
    response = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
    if response.response_code == 0:
        donation = Donation(phone_number=phone_number, amount=amount, email=email)
        donation.save()
        serializer = DonationSerializer(donation)
        return Response(serializer.data, status=201)
    else:
        return Response(response, status=400)



# Create your views here.
