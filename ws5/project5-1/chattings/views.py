from django.shortcuts import render, redirect
from .models import Chat
from .forms import ChatForm

# Create your views here.
def index(request):
    chattings = Chat.objects.all()
    context = {
        "chattings" : chattings,
    }
    return render(request, "chattings/index.html", context)

def create(request):
    if request.method == "POST":
        form = ChatForm(request.POST)
        if form.is_valid():
            chat = form.save()
            return redirect("chattings:detail", chat.pk)
    else:
        form = ChatForm()
    context = {
        "form" : form,
    }
    return render(request, "chattings/create.html", context)

def detail(request, pk):
    chat = Chat.objects.get(pk=pk)
    context = {
        "chat" : chat,
    }
    return render(request, "chattings/detail.html", context)