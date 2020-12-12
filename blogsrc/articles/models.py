from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.template.defaultfilters import slugify
from django.shortcuts import reverse


class Article(models.Model):
    title = models.CharField(max_length=70)
    brief = models.CharField(max_length=140)
    content = RichTextUploadingField(blank=True, null=True)
    main_image = models.ImageField(upload_to='article_image/')
    slug = models.SlugField(unique=True, blank=True)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    tag = models.ManyToManyField('Tag')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("article_detail", kwargs={"slug": self.slug})
    
 
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

class Tag(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)