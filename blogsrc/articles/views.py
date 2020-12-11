from django.shortcuts import render
from django.views.generic import DetailView, ListView

from .models import Article

class ArticleDetailView(DetailView):
    model = Article
    template_name = "article_detail.html"

class ArticleListView(ListView):
    model = Article
    template_name = "article_list.html"