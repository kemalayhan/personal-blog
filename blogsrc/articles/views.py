from django.shortcuts import render
from django.views.generic import DetailView, ListView

from .models import Article, Tag
from .mixin import TagMixin

class ArticleDetailView(TagMixin, DetailView):
    model = Article
    template_name = "article_detail.html"


class ArticleListView(TagMixin, ListView):
    template_name = "cards.html"
    context_object_name = "articles"

    def get_queryset(self):
        qs = Article.objects.defer(
                'content',
                'created',
                'updated',
                'tag'
        )
        return qs
    

class ArticleTagView(TagMixin, DetailView):
    model = Tag
    template_name = "cards.html"
    context_object_name = "tag"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["articles"] = self.object.article_set.all()
        return context
    

    