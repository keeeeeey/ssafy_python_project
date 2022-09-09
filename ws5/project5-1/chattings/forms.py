from django import forms
from .models import Chat

class ChatForm(forms.ModelForm):

    user = forms.CharField(
        label = "작성자",
        widget = forms.TextInput(
            attrs = {
                "class" : "my-nickname form-control",
                "placeholder" : "Nickname",
            }
        )
    )

    content = forms.CharField(
        label = "내용",
        widget = forms.Textarea(
            attrs = {
                "class" : "my-content form-control",
                "placeholder" : "Chat!",
                "cols" : 50,
                "rows" : 5,
            }
        )
    )

    class Meta:
        model = Chat
        fields = "__all__"
