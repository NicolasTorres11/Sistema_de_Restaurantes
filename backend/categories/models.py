from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=100, verbose_name='Titulo')
    image = models.ImageField(upload_to='categories', verbose_name='Imagen')
    is_active = models.BooleanField(verbose_name='Estado', default=True)
    
    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
    
    def __str__(self) -> str:
        return f'|{self.title}|'
