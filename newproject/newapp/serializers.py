from rest_framework import serializers
from .models import Registration, Login,Category,Product,Wishlist,Review,Shop,Cart,Order





class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['name','email','password','phone_number','address','image','login_id']

    

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['id', 'role', 'email','password']
             
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category        
        fields='__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'price']  # Include all necessary fields




class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Wishlist
        fields='__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields="__all__"


class ShopRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ['shop_name', 'email', 'password', 'phone_number', 'address', 'login_id', 'role']



class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cart
        fields=['product_id','user_id','quantity','id']

    def create(self,validated_data):
        return Cart.objects.create(**validated_data)



class OrderSerializer(serializers.ModelSerializer):
    product= ProductSerializer(read_only=True, source='product_id')
    class Meta:
        model = Order
        fields = '__all__'


