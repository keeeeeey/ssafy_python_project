from django.shortcuts import render
import random

# Create your views here.
def index(request):
    # request : 사용자의 요청 정보가 담겨있다.
    # 사용자에게 보여줄 화면 html 파일이름
    return render(request, "articles/index.html")

def greeting(request):
    foods = ["apple", "banana", "coconut"]
    info = {
        "name" : "김기윤"
    }
    context = {
        "foods" : foods,
        "info" : info
    }
    return render(request, "articles/greeting.html", context)

def dinner(request):
    foods = ["족발", "햄버거", "치킨", "초밥"]
    pick = random.choice(foods)
    number = random.choice(range(1, 101))
    context = {
        "pick" : pick,
        "foods" : foods,
        "number" : number
    }
    return render(request, "articles/dinner.html", context)

def throw(request):
    return render(request, "articles/throw.html")

def catch(request):
    print(request)
    print(type(request))
    print(request.GET)
    print(request.GET.get("message"))
    message = request.GET.get("message")
    context = {
        "message" : message
    }
    return render(request, "articles/catch.html", context)

def hello(request, name, age):
    context = {
        "name" : name,
        "age" : age
    }
    return render(request, "articles/hello.html", context)