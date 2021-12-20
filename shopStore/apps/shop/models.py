from django.db import models

from django.db import models


class Employee(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    surname = models.CharField(max_length=40, blank=True, null=True)
    first_name = models.CharField(max_length=40, blank=True, null=True)
    second_name = models.CharField(max_length=40, blank=True, null=True)
    post = models.CharField(max_length=40, blank=True, null=True)
    workplace = models.ForeignKey('Shop', models.DO_NOTHING, db_column='workplace', blank=True, null=True)
    salary = models.IntegerField(blank=True, default=15000)

    class Meta:
        managed = True
        db_table = 'employees'


class Item(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    prev_price = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    item_image = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'items'


class ItemShop(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, blank=True, null=True)
    shop = models.ForeignKey('Shop', on_delete=models.CASCADE, blank=True, null=True)
    amount = models.IntegerField(default=0)

    def getShopAddress(self):
        # return Shop.objects.get(id=self.shop)
        return self.shop.address

    class Meta:
        managed = True
        db_table = 'items_shops'


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    shop = models.ForeignKey('Shop', models.DO_NOTHING, db_column='shop')
    address = models.CharField(max_length=100, blank=True, null=True)
    delivery = models.IntegerField(blank=True, null=True)
    courier = models.ForeignKey(Employee, models.DO_NOTHING, db_column='courier', blank=True, null=True)
    item = models.IntegerField(blank=True, null=True)
    total_price = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    order_date = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey('User', models.DO_NOTHING, db_column='user', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'orders'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'orders_items'


class Shop(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    address = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'shops'


class ShopEmployee(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)

    class Meta:
        managed = True
        db_table = 'shops_employees'


class User(models.Model):
    id = models.AutoField(db_column='_id', primary_key=True)
    login = models.CharField(max_length=40, blank=True, null=True)
    pass_field = models.CharField(db_column='PASS', max_length=100, blank=True, null=True)
    user_type = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'users'
