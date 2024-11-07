from django.contrib import admin
from.models import Registration
from.models import Login
from.models import  Category
from.models import  Product
from.models import   Wishlist
from.models import   Review
from.models import   Shop
from.models import   Cart
from.models import   Order



# Register your models here.
admin.site.register(Registration)
admin.site.register(Login)
admin.site.register( Category)
admin.site.register(Product)
admin.site.register( Wishlist)
admin.site.register(Review)
admin.site.register(Shop)
admin.site.register(Cart)
admin.site.register(Order)
