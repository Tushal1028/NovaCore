from django.http import HttpResponse
def home_page(request):
    print ("Home page")
    return HttpResponse('this is home page')