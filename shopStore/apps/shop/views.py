from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.generic import DetailView
from .models import Item, ItemShop


def index(request):
    return render(request, 'shop/index.html')


def getData(request):
    from_ = request.GET.get('from')
    to = request.GET.get('to')
    items = Item.objects.filter(id__gte=from_, id__lte=to)
    objects = []
    for item in items:
        object = {}
        object['id'] = item.id
        object['image_url'] = item.item_image
        object['category'] = item.category
        object['name'] = item.name
        object['price'] = item.price
        object['prev_price'] = item.prev_price

        objects.append(object)
    return JsonResponse({'objects': objects})


def getItem(request):
    id = request.GET.get('id')
    item = Item.objects.filter(id=id)[0]

    return JsonResponse({
        'id': item.id,
        'image_url': item.item_image,
        'category': item.category,
        'name': item.name,
        'price': item.price,
    })


class ItemInfo(DetailView):
    model = Item
    template_name = 'shop/itemInfo.html'
    context_object_name = 'item'

    def get_context_data(self, **kwargs):
        context = super(ItemInfo, self).get_context_data(**kwargs)
        context['shops'] = ItemShop.objects.filter(item_id=context['item'].id)
        context['shops_len'] = len(context['shops'])
        return context
