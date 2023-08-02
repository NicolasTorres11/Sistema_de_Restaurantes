from django.contrib import admin
from django.urls import path, re_path
from rest_framework.authentication import authenticate
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="APIDoc - Sistema Restaurante",
        default_version='v1',
        description="Documentacion de la Api del Sistema Para Restaurantes",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="penatorresnicolas@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swager-view'),
    path("readocs/", schema_view.with_ui('redoc',
         cache_timeout=0), name="schema-redoc")
]
