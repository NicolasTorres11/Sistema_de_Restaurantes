from django.urls import path
from rest_framework.routers import DefaultRouter
from products.api.views.products_views import ProductViewSetApi

router = DefaultRouter()

router.register(
    prefix='Products', basename='Products', viewset=ProductViewSetApi
)

urlpatterns = router.urls