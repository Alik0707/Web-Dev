from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Product, Category


def product_to_dict(p):
    return {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category_id,
    }


def category_to_dict(c):
    return {
        "id": c.id,
        "name": c.name,
    }


@require_GET
def product_list(request):
    try:
        limit = int(request.GET.get('limit', 10))
        page = int(request.GET.get('page', 1))
    except ValueError:
        return JsonResponse({"error": "limit and page must be integers"}, status=400)

    if limit < 1 or page < 1:
        return JsonResponse({"error": "limit and page must be positive"}, status=400)

    total = Product.objects.count()
    offset = (page - 1) * limit
    products = list(Product.objects.all()[offset:offset + limit])

    return JsonResponse({
        "total": total,
        "page": page,
        "limit": limit,
        "total_pages": (total + limit - 1) // limit,
        "data": [product_to_dict(p) for p in products],
    })


@require_GET
def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


@require_GET
def category_list(request):
    categories = list(Category.objects.all())
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)


@require_GET
def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


@require_GET
def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = list(category.products.all())
        return JsonResponse([product_to_dict(p) for p in products], safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
