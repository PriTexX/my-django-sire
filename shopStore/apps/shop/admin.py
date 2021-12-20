from django.contrib import admin

from .models import Employee, Item, ItemShop, Order, OrderItem, Shop, ShopEmployee, User

admin.site.register(Employee)
admin.site.register(Item)
admin.site.register(ItemShop)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Shop)
admin.site.register(ShopEmployee)
admin.site.register(User)


