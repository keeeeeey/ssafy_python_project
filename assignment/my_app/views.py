from datetime import datetime
from django.shortcuts import render
from datetime import date

# Create your views here.
def homework_a(request):
    menus = ["사과", "바나나", "코코넛"]
    context = {
        "menus" : menus
    }
    return render(request, "homework_a.html", context)

def homework_b(request):
    users = []
    context = {
        "users" : users
    }
    return render(request, "homework_b.html", context)

def homework_c(request):
    return render(request, "homework_c.html")

def homework_d(request):
    return render(request, "homework_d.html")

def homework_e(request):
    today = datetime.now()
    context = {
        "today" : today
    }
    return render(request, "homework_e.html", context)