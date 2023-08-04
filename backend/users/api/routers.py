from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views.views_user import UserAPIView, UserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)


router = DefaultRouter()

router.register(
    prefix='Users', basename='Users', viewset=UserAPIView
)

urlpatterns = router.urls + [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh_token/', TokenRefreshView.as_view(), name='token_refre'),
    path('auth/me/', UserView.as_view(), name='Me'),
]
