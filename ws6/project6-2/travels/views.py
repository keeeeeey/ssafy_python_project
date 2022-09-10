from django.shortcuts import render, redirect, get_object_or_404
from .models import Travels
from .forms import TravelForm
from django.views.decorators.http import require_safe, require_POST, require_http_methods

# Create your views here.
@require_safe
def index(request):
    travels = Travels.objects.all()
    context = {
        "travels" : travels,
    }
    return render(request, "travels/index.html", context)

@require_http_methods(["GET", "POST"])
def create(request):
    if request.method == "POST":
        form = TravelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("travels:index")
    else:
        form = TravelForm()
    context = {
        "form" : form,
    }
    return render(request, "travels/create.html", context)

@require_safe
def detail(request, pk):
    travel = get_object_or_404(Travels, pk=pk)
    context = {
        "travel" : travel,
    }
    return render(request, "travels/detail.html", context)

@require_POST
def delete(request, pk):
    travel = get_object_or_404(Travels, pk=pk)
    travel.delete()
    return redirect("travels:index")

@require_http_methods(["GET", "POST"])
def update(request, pk):
    travel = get_object_or_404(Travels, pk=pk)
    if request.method == "POST":
        form = TravelForm(request.POST, instance=travel)
        if form.is_valid():
            form.save()
            return redirect("travels:detail", travel.pk)
    else:
        form = TravelForm(instance=travel)
    context = {
        "form" : form,
        "travel" : travel,
    }
    return render(request, "travels/update.html", context)