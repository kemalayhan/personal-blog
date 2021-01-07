from django.urls import path
from .views import ArticleDetailView, ArticleListView, ArticleTagView

urlpatterns = [
    path('', ArticleListView.as_view(), name='index'),
    path('tag/<slug:slug>/', ArticleTagView.as_view(), name='article_tag'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article_detail'),

]
