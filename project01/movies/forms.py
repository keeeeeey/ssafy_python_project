from django import forms
from .models import Movie

genre_choices = [("코미디", "코미디"), ("공포", "공포"), ("로맨스", "로맨스")]

class MovieForm(forms.ModelForm):
    title = forms.CharField(
        widget = forms.TextInput(
            attrs = {
                "placeholder" : "Title",
            },
        )
    )

    audience = forms.IntegerField(
        widget = forms.NumberInput(
            attrs = {
                "placeholder" : "Audience",
            },
        )
    )
    
    release_date = forms.DateField(
        widget = forms.DateInput(
            attrs = {
                "type" : "date",
                "placeholder" : "연도-월-일",
            },
        )
    )

    genre = forms.ChoiceField(
        choices=genre_choices,
        widget = forms.Select(
            attrs = {
            }
        )
    )

    score = forms.FloatField(
        widget = forms.NumberInput(
            attrs={
                "step" : 0.5,
                "min" : 0,
                "max" : 5,
                "placeholder" : "Score",
            },
        )
    )
    
    class Meta:
        model = Movie
        exclude = ("user",)