from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.hashers import make_password
from users.api.serializers.user_serializers import UserSerializer
from users.models import User


class UserAPIView(ModelViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)
    
    def destroy(self, request, pk, format=None):
        user = User.objects.filter(id=pk).first()
        if user:
            user.is_active = False
            user.save()
            return Response({
                'message': 'Usuario Desactivado Correctamente'
            }, status=status.HTTP_200_OK)
        return Response({
            'error': 'No existe el Usuario'
        }, status=status.HTTP_400_BAD_REQUEST)
        

    def partial_update(self, request, *args, **kwargs):
        password = request.data['password']
        if password:
            request.data['password'] = make_password(request.data['password'])
        else:
            request.data['password'] = request.user.password
        return super().update(request, *args, **kwargs)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    