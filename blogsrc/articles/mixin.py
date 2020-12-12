from .models import Tag

class TagMixin():
        def get_context_data(self, *args, **kwargs):
            context = super().get_context_data(*args, **kwargs)
            context["tags"] = Tag.objects.all() 
            return context
