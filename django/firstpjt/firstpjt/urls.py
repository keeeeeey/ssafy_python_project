from django.contrib import admin
from django.urls import path, include # include 가 url 나누기의 핵심 기능

urlpatterns = [
    path('admin/', admin.site.urls),
    # 화면 추가 path("경로", 해당 경로)
    path('articles/', include('articles.urls')),
    path('pages/', include('pages.urls')),
]
