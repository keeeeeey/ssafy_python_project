from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.views.decorators.http import (require_http_methods, require_POST, require_safe)

from .forms import MovieForm
from .models import Movie


# Create your views here.
@require_safe
def index(request):
    movies = Movie.objects.all()
    context = {
        "movies" : movies,
    }
    return render(request, "movies/index.html", context)

@require_http_methods(["GET", "POST"])
def create(request):
    if not request.user.is_authenticated:
        return redirect("accounts:login")

    if request.method == "POST":
        form = MovieForm(request.POST)
        if form.is_valid():
            movie = form.save(commit=False)
            movie.user = request.user
            movie.save()
            return redirect("movies:index")
    else:
        form = MovieForm()
    context = {
        "form" : form,
    }
    return render(request, "movies/create.html", context)

@require_safe
def detail(request, pk):
    movie = Movie.objects.get(pk=pk)
    context = {
        "movie" : movie,
    }
    return render(request, "movies/detail.html", context)

@require_http_methods(["GET", "POST"])
def update(request, pk):
    if not request.user.is_authenticated:
        return redirect("accounts:login")

    movie = Movie.objects.get(pk=pk)
    if movie.user == request.user:
        if request.method == "POST":
            form = MovieForm(request.POST, instance=movie)
            if form.is_valid():
                form.save()
                return redirect("movies:detail", movie.pk)
        else:
            form = MovieForm(instance=movie)
        context = {
            "movie" : movie,
            "form" : form,
        }
        return render(request, "movies/update.html", context)
    else:
        return redirect("movies:index")

@require_POST
def delete(request, pk):
    if not request.user.is_authenticated:
        return redirect("accounts:login")
    
    if movie.user == request.user:
        movie = Movie.objects.get(pk=pk)
        movie.delete()
    return redirect("movies:index")