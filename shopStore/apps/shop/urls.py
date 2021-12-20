from django.urls import path

from . import views

from django.conf import settings
from django.conf.urls.static import static

app_name = 'shop'
urlpatterns = [
    path('', views.index, name='index'),
    path('getDataFromDB', views.getData, name='getJSONData'),
    path('getItem', views.getItem, name='getItem'),
    path('aboutItem/<int:pk>', views.ItemInfo.as_view(), name='showItemInfo'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)