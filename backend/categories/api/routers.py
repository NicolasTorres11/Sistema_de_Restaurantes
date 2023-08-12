from django.urls import path
from rest_framework.routers import DefaultRouter
from categories.api.views.views_categories import CategoryAPIViewSet

router = DefaultRouter()

router.register(
    prefix='Categories', basename='Categories', viewset=CategoryAPIViewSet
)

urlpatterns = router.urls