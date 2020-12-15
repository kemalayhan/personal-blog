from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('articles.urls'), name='articles'),
    path('about', TemplateView.as_view(template_name="about.html"), name="about"),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)