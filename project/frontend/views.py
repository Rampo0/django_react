from django.shortcuts import render

def index(request):
    return render(request , 'frontend/index.html', {})

def error_404_view(request , exception):
    return render(request , 'frontend/error_404.html', {})