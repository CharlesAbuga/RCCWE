from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Newsletter, Contact, Subscriber
from .serializers import NewsLetterSerializer, ContactSerializer, SubscriberSerializer




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
def subscribe(request):
    if request.method == 'POST':
        serializer = SubscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)







# Create your views here.
