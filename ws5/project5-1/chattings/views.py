from django.shortcuts import render, redirect, get_object_or_404
from .models import Chat
from .forms import ChatForm
from django.views.decorators.http import require_safe, require_POST, require_http_methods

# Create your views here.
@require_safe
def index(request):
    chattings = Chat.objects.all()
    context = {
        "chattings" : chattings,
    }
    return render(request, "chattings/index.html", context)

@require_http_methods(["GET", "POST"])
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

@require_safe
def detail(request, pk):
    chat = get_object_or_404(Chat, pk=pk)
    context = {
        "chat" : chat,
    }
    return render(request, "chattings/detail.html", context)

@require_POST
def delete(request, pk):
    chat = Chat.objects.get(pk=pk)
    chat.delete()
    return redirect("chattings:index")
