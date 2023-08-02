from rest_framework.routers import DefaultRouter
from users.api.views.views_user import UserAPIView


router = DefaultRouter()

router.register(
    prefix='Users', basename='Users', viewset=UserAPIView
)

urlpatterns = router.urls
