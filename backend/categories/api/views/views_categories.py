from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from categories.api.serializers.category_serializer import CategorySerializer


class CategoryAPIViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CategorySerializer
    
    def get_queryset(self, pk=None):
        if pk is None:
            return self.serializer_class().Meta.model.objects.filter(is_active=True)
        else: 
            return self.serializer_class().Meta.model.objects.filter(is_active=True, id=pk).first()
        
    def list(self, request, *args, **kwargs):
        serializer = self.serializer_class(self.get_queryset(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)