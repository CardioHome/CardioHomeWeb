from django.shortcuts import render
from django.http.response import HttpResponse

import remote_auth

# # Create your views here.
# def home(request):
#     result = remote_auth.login('11', '456')
#     return HttpResponse('<h1>result %d</h1>' % result)
#
#
# def login(request):
#     result = remote_auth.login('112121212', '456')
#     return HttpResponse('result %d' % result)