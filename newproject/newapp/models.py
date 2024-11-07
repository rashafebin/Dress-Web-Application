from django.db import models
# from django.utils import timezone


# Create your models here.
class Login (models.Model):
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20)
    role= models.CharField(max_length=10)
    


class Registration(models.Model):

    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    address=models.CharField(max_length=50)
    login_id = models.OneToOneField(Login,on_delete=models.CASCADE)
    role=models.CharField(max_length=50)
    image=models.URLField(max_length=100,default='image')
    

class Category(models.Model):
    Category_name=models.CharField(max_length=50)



class Product(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(max_length=100,default='image')
    category_name =models.CharField(max_length=100)
    shop_id =models.CharField(max_length=100,default="1")

# class Wishlist(models.Model):
#     login_id = models.OneToOneField( Login,  on_delete=models.CASCADE,related_name='wishlist_for_login')
#     product_id = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='wishlist_for_product')   
#     class Meta:
#         unique_together = ('login_id', 'product_id')

class Wishlist(models.Model):
    login_id = models.ForeignKey(Login, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ('login_id', 'product_id')



class Review(models.Model):

    product_id=models.CharField(max_length=100)
    user_id=models.CharField(max_length=100)
    product_name=models.CharField(max_length=100)
    user_name=models.CharField(max_length=100)
    time=models.DateTimeField(max_length=100)
    discription=models.CharField(max_length=100)


    
class Shop(models.Model):
    shop_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    login_id = models.OneToOneField(Login, on_delete=models.CASCADE, default="100")
    role = models.CharField(max_length=50, default="shop")
    image=models.URLField(max_length=100,default='image')

    
# class Shop(models.Model):
#     shop_name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)
#     address = models.CharField(max_length=255)
#     phone_number = models.CharField(max_length=15)
#     login_id = models.OneToOneField(Login, on_delete=models.CASCADE)
#     role = models.CharField(max_length=50, default="shop")


class Cart(models.Model):
    user_id = models.ForeignKey(Login, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    cart_status = models.IntegerField(default=1)



class Order(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    user_id = models.CharField(max_length=30)
    quantity = models.IntegerField()
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Pending')

    def __str__(self):
        return f"Order {self.id} - User {self.user_id}"



