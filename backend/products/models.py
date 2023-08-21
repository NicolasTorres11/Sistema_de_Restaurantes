from django.db import models
from django.db.models.fields.files import ImageField


class Product(models.Model):
    title = models.CharField(max_length=100, verbose_name='Titulo')
    image = models.ImageField(upload_to='products', verbose_name='Imagen')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=False)
    category = models.ForeignKey('categories.Category', on_delete=models.SET_NULL, null=True)
    
    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        
    def __str__(self) -> str:
        return self.title
    