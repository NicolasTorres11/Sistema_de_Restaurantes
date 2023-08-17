from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from categories.api.serializers.category_serializer import CategorySerializer
from categories.models import Category


class CategoryAPIViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Categoria Creada Exitosamente'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk, format=None):
        category = Category.objects.filter(id=pk).first()
        if category:
            category.is_active = False
            category.save()
            return Response({
                'message': 'Categoria Desactivada'
            }, status=status.HTTP_200_OK)
        return Response({
            'error': 'Categoria no encontrada'
        }, status=status.HTTP_404_NOT_FOUND)
            