from django.urls import path
from . import views

urlpatterns = [
    # 화면 추가 path("경로", 해당 경로)
    path('homeworkA/', views.homework_a, name="homeworkA"),
    path('homeworkB/', views.homework_b, name="homeworkB"),
    path("homeworkC/", views.homework_c, name="homeworkC"),
    path("homeworkD/", views.homework_d, name="homeworkD"),
    path("homeworkE/", views.homework_e, name="homeworkE")
]