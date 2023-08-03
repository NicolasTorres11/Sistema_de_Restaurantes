from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views.views_user import UserAPIView, UserView


router = DefaultRouter()

router.register(
    prefix='Users', basename='Users', viewset=UserAPIView
)

urlpatterns = router.urls + [
    path('auth/me/', UserView.as_view(), name='Me'),
]
