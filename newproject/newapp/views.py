from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration,Login,Category,Product,Shop,Wishlist, Registration,Cart,Order
from .serializers import RegistrationSerializer,LoginSerializer,CategorySerializer,ProductSerializer,WishlistSerializer,ReviewSerializer,CartSerializer,OrderSerializer
from django.http import Http404 
from rest_framework import generics

# Create your views here.




# class login_api(GenericAPIView):
    # serializer_class = LoginSerializer
    # def post(self, request):
    #     email=request.data.get('email')
    #     password=request.data.get('password')
    #     log_var=Login.objects.filter(email=email,password=password)
    #     print(log_var.count())
    #     if log_var.count()>0:
    #         a=LoginSerializer(log_var,many=True)
    #         for i in a.data:
    #             login_id=i['id']
    #             role=i['role']
    #             print(role)
    #             if role=='user':
    #                 register_data=Registration.objects.filter(login_id=login_id).values()
    #                 print(register_data)
    #                 for i in register_data:
    #                    id=i['id']
    #                    name=i['name']
    #                    phone_number=i['phone_number']
                    
    #                 return Response({'data': {'login_id':login_id ,'user_id':id,'email':email,'password':password,'name':name,'phone_number':phone_number,'role':role},'success':1,'message':'login successfully'},status=status.HTTP_200_OK)
    #             elif role=='shop':
    #                   shop_data=Shop.objects.filter(login_id=login_id).values()
    #                   shop_name = None
    #                   email = None
    #                   password = None
    #                   address = None
    #                   phone_number = None
    #                   login_id = None
    #                   role = None
    #                   shop_id = None
    #                   for i in shop_data:
    #                       shop_name=i['shop_name']
    #                       email=i['email']
    #                       password=i['password']
    #                       address=i['address']
    #                       phone_number=i['phone_number']
    #                       login_id=login_id
    #                       role=i['role']
    #                       shop_id= i ['id']
    #                       print(shop_name)
    #                   return Response({'data': {'shop_name':shop_name ,'email':email,'password':password,'address':address,'phone_number':phone_number,'login_id':login_id,'role':role,'shop_id':shop_id},'success':1,'message':'login successfully'},status=status.HTTP_200_OK)
    #     else:
    #         return Response({'data':'user name or password invalid'}, status=status.HTTP_400_BAD_REQUEST)





class login_api(GenericAPIView):
    
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        log_var = Login.objects.filter(email=email, password=password).first()

        if log_var:
            a = LoginSerializer(log_var)
            login_id = a.data.get('id')
            role = a.data.get('role')

            if login_id is None:
                return Response({
                    'data': 'Error: Login ID not found.'
                }, status=status.HTTP_400_BAD_REQUEST)

            print(role)  

            if role == 'user':
                register_data = Registration.objects.filter(login_id=login_id).values()
                if register_data:
                    user_info = register_data[0]
                    id = user_info.get('id')
                    name = user_info.get('name')
                    phone_number = user_info.get('phone_number')
                    return Response({
                        'data': {
                            'login_id': login_id,
                            'user_id': id,
                            'email': email,
                            'password': password,
                            'name': name,
                            'phone_number': phone_number,
                            'role': role
                        },
                        'success': 1,
                        'message': 'Login successfully'
                    }, status=status.HTTP_200_OK)

            elif role == 'shop':
                shop_data = Shop.objects.filter(login_id=login_id).values()
                if shop_data:
                    shop_info = shop_data[0]
                    shop_name = shop_info.get('shop_name')
                    email = shop_info.get('email')
                    password = shop_info.get('password')
                    address = shop_info.get('address')
                    phone_number = shop_info.get('phone_number')
                    return Response({
                        'data': {
                            'shop_name': shop_name,
                            'email': email,
                            'password': password,
                            'address': address,
                            'phone_number': phone_number,
                            'login_id': login_id,
                            'role': role
                        },
                        'success': 1,
                        'message': 'Login successfully'
                    }, status=status.HTTP_200_OK)

            return Response({
                'data': 'Username or password invalid'
            }, status=status.HTTP_400_BAD_REQUEST)

        return Response({
            'data': 'Username or password invalid'
        }, status=status.HTTP_400_BAD_REQUEST)




# class registration_api(GenericAPIView):
#     serializer_class = RegisterSerializer
#     serializer_class_login = LoginSerializer

#     def post(self, request):
        
#         name = request.data.get('name')
#         email = request.data.get('email')
#         password= request.data.get('password')
#         number = request.data.get('number')
#         address = request.data.get('address')
#         login_id= request.data.get('login_id')
#         role = 'user'

#         # Check for duplicate email or phone number
#         if Registration.objects.filter(email=email).exists():
#             return Response({'message': 'Duplicate email found!'}, status=status.HTTP_400_BAD_REQUEST)
        
#         if Registration.objects.filter(number=number).exists():
#             return Response({'message': 'Duplicate phone number found!'}, status=status.HTTP_400_BAD_REQUEST)
        
#         login_data = {'email': email, 'password': password, 'role': role}
#         serializer_login = self.serializer_class_login(data=login_data)
        
#         if serializer_login.is_valid():
#                 log = serializer_login.save()
#                 login_id = log.id
            
#         else:
#                 return Response({ 'message': 'Login creation failed', 'errors': serializer_login.errors},
#                                 status=status.HTTP_400_BAD_REQUEST)

#         # Handle registration creation
#         serializer = self.serializer_class(
#             data={'name': name, 'email': email, 'number': number, 'password': password, 'address': address, 'login_id': login_id, 'role': role}
#         )
        
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'data': serializer.data, 'message': 'Registration successful', 'success': 1},
#                             status=status.HTTP_200_OK)
#         return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0},
#                         status=status.HTTP_400_BAD_REQUEST)
    

# class login_api(GenericAPIView):
#     serializer_class = LoginSerializer

#     def post(self, request):
#         email=request.data.get('email')
#         password=request.data.get('password')
#         log_var=Login.objects.filter(email=email,password=password)
#         if log_var.count()>0:
#             a=LoginSerializer(log_var,many=True)
#             for i in a.data:
#                 login_id=i['id']
#                 role=i['role']
#                 register_data=Registration.objects.filter(login_id=login_id).values()
#                 for i in register_data:
#                     id=i['id']
#                     name=i['name']
#                     number=i['number']
                    
#             return Response({'data': {'login_id':login_id ,'user_id':id,'email':email,'password':password,'name':name,'number':number,'role':role},'success':1,'message':'login successfully'},status=status.HTTP_200_OK)
#         else:
#             return Response({'data':'user name or password invalid'}, status=status.HTTP_400_BAD_REQUEST)
    




# 




class registration_api(GenericAPIView):
    serializer_class = RegistrationSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        phone_number = request.data.get('phone_number')
        address = request.data.get('address')
        role = 'user'
        image = request.FILES.get('image')

        phone_number = phone_number.strip().replace(" ", "")

        if not image:
            return Response({'error': 'Please upload a valid image'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            upload_data = cloudinary.uploader.upload(image)
        except Exception as e:
            return Response({'error': 'Image upload failed', 'details': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        if Registration.objects.filter(email=email).exists():
            return Response({'message': 'Duplicate email found!'}, status=status.HTTP_400_BAD_REQUEST)

        if Registration.objects.filter(phone_number=phone_number).exists():
            return Response({'message': 'Duplicate phone number found!'}, status=status.HTTP_400_BAD_REQUEST)

        login_data = {'email': email, 'password': password, 'role': role}
        serializer_login = self.serializer_class_login(data=login_data)

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
        else:
            return Response({'message': 'Login creation failed!', 'errors': serializer_login.errors}, status=status.HTTP_400_BAD_REQUEST)

        # Registration data
        registration_data = {
            'name': name,
            'email': email,
            'password': password, 
            'phone_number': phone_number,
            'address': address,
            'login_id': login_id,
            'role': role,
            'image': upload_data['url'],  
        }

        serializer = self.serializer_class(data=registration_data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration successful', 'success': 1}, status=status.HTTP_200_OK)

        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)







class category_api(GenericAPIView):
    serializer_class = CategorySerializer

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response({'data': serializer.data, 'message': 'Categories fetched successfully', 'success': 1}, status=status.HTTP_200_OK)

    def post(self, request):
        name = request.data.get('name')
        description = request.data.get('description')

        category_data = {
            'name': name,
            'description': description
        }

        serializer = CategorySerializer(data=category_data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Category added successfully', 'success': 1}, status=status.HTTP_201_CREATED)
        return Response({'data': serializer.errors, 'message': 'Failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)







import cloudinary
from cloudinary import uploader
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .serializers import ProductSerializer  # Adjust the import based on your project structure

# # Cloudinary configuration
# cloudinary.config(
#     cloud_name='dknt17ydh',
#     api_key='459982528519112',
#     api_secret='3nTIT3euXGWXo7Uk-hraBVzDrKQ'
# )

# class add_product_api(GenericAPIView):
#     serializer_class = ProductSerializer   

#     def post(self, request):
#         name = request.data.get('name')
#         description = request.data.get('description')
#         price = request.data.get('price')
#         image = request.FILES.get('image')
#         category = request.data.get('category')

#         if not image:
#             return Response({'error': 'please upload a valid image'}, status=status.HTTP_400_BAD_REQUEST)
        
#         try:
#             # Upload the image to Cloudinary
#             upload_data = uploader.upload(image)

#             Product_data = {
#                 'name': name,
#                 'description': description,
#                 'price': price,
#                 'image': upload_data['url'],  # Get the URL of the uploaded image
#                 'category': category
#             }

#             serializer = ProductSerializer(data=Product_data)

#             if serializer.is_valid():
#                 serializer.save()
#                 return Response({'data': serializer.data, 'message': 'Product added successfully', 'success': True}, status=status.HTTP_201_CREATED)
            
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#         except Exception as e:
#             import logging
#             logging.error("Upload error: %s", str(e))
#             return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# Example for testing upload separately (not part of the API)
def test_upload():
    response = uploader.upload("path_to_your_image.jpg")  # Replace with an actual image path
    print(response)

import cloudinary
from cloudinary import uploader
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .serializers import ProductSerializer  # Adjust the import based on your project structure

# Cloudinary configuration
cloudinary.config(
    cloud_name='ddiru5eab',
    api_key='829282756295675',
    api_secret='3nTIT3euXGWXo7Uk-hraBVzDrKQ'
)

class add_product_api(GenericAPIView):
    
    serializer_class = ProductSerializer
    def post(self, request):
        name = request.data.get('name')
        description = request.data.get('description')
        price = request.data.get('price')
        quantity=request.data.get('quantity')
        image = request.FILES.get('image') 
        if not image:
            return Response({'error':'please upload a valid image'},status=status.HTTP_400_BAD_REQUEST)
        try:
            upload_data=cloudinary.uploader.upload(image)

            product_data = {
              'name': name,
              'description': description,
              'price': price,
              'quantity':quantity,
              'image': upload_data['url'],
             }
          
            serializer = ProductSerializer(data=product_data)  
            if serializer.is_valid():
               serializer.save()
               return Response({'data': serializer.data, 'message': 'Product added successfully', 'success': 1}, status=status.HTTP_200_OK)
            return Response({'data': serializer.errors, 'message': 'Failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error':str(e)},status=status.HTTP_400_BAD_REQUEST)







class view_product_api(GenericAPIView):
    serializer_class = ProductSerializer
    def get(self,request):
       queryset = Product.objects.all()
       if (queryset.count()>0):
           serializer=ProductSerializer(queryset,many=True)
           return Response({'data': serializer.data, 'message': 'Product added successfully', 'success': 1}, status=status.HTTP_200_OK)
       else:
          return Response({'data': 'no data available', 'message': 'Failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)









class delete_single_user_api(GenericAPIView):
    serializer_class=RegistrationSerializer
    def delete(self,request,id):
        queryset=Registration.objects.get(pk=id)
        queryset.delete()
        return Response({'delete Successfully'})
    


                
class add_category_api(GenericAPIView):
    serializer_class = CategorySerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class view_category_api(GenericAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def get(self, request):
        categories = self.get_queryset()
        serializer = self.get_serializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)





from rest_framework.generics import RetrieveAPIView
from django.http import Http404

class SingleCategoryAPI(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_object(self):
        pk = self.kwargs.get('pk')
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404("Category not found")
        




# class view_user_profile_api(RetrieveAPIView):
#     serializer_class = RegisterSerializer
#     queryset = Registration.objects.all()
    
#     def get_object(self):
#         login_id = self.kwargs.get('pk') 
        # return Registration.objects.get(id=user_id)
    


    


 


from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from django.shortcuts import get_object_or_404
from django.db import IntegrityError

       


class add_wishlist_api(GenericAPIView):

    serializer_class = WishlistSerializer

    def post(self, request):
        product_id = request.data.get('product_id')
        login_id = request.data.get('login_id')

        if not product_id or not login_id:
            return Response({"error": "Both product_id and login_id are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            login_id = int(login_id)
            product_id = int(product_id)
        except ValueError:
            return Response({"error": "Invalid login_id or product_id format. Must be integers."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            login_instance = get_object_or_404(Login, id=login_id)
            product_instance = get_object_or_404(Product, id=product_id)
        except Http404 as e:
            missing_model = 'Login' if 'Login' in str(e) else 'Product'
            return Response({"error": f"{missing_model} not found with the provided id."}, status=status.HTTP_404_NOT_FOUND)

        wishlist_entry = Wishlist.objects.filter(login_id=login_instance, product_id=product_instance).first()
        if wishlist_entry:
            wishlist_entry.delete()
            return Response({"message": "Product removed from wishlist."}, status=status.HTTP_200_OK)
        else:
            Wishlist.objects.create(login_id=login_instance, product_id=product_instance)
            return Response({"message": "Product added to wishlist."}, status=status.HTTP_201_CREATED)







from rest_framework.response import Response
from rest_framework import generics

# class view_wishlist_api(generics.ListAPIView):

#     serializer_class = WishlistSerializer

#     def get_queryset(self):
#         loginid = self.kwargs.get('pk')
#         return Wishlist.objects.filter(login_id=loginid)

#     def list(self, request, *args, **kwargs):
#         wishlists = self.get_queryset()
#         loginid = self.kwargs.get('pk')

#         try:
#             user = Login.objects.get(id=loginid)
#         except Login.DoesNotExist:
#             return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

#         wishlist_data = WishlistSerializer(wishlists, many=True).data
#         user_data = LoginSerializer(user).data  
#         product_ids = [wishlist['product_id'] for wishlist in wishlist_data]

#         products = Product.objects.filter(id__in=product_ids)
#         product_data = ProductSerializer(products, many=True).data
#         product_data_map = {product['id']: product for product in product_data}

#         for wishlist in wishlist_data:
#             wishlist['login_id'] = user_data  
#             wishlist['product_details'] = product_data_map.get(wishlist['product_id'], {})

#         response_data = {
#             'wishlists': wishlist_data,
#         }

#         return Response(response_data)

from rest_framework import generics, status
from rest_framework.response import Response
from .models import Wishlist, Login, Product
from .serializers import WishlistSerializer, LoginSerializer, ProductSerializer

class view_wishlist_api(generics.ListAPIView):
    serializer_class = WishlistSerializer

    def get_queryset(self):
        loginid = self.kwargs.get('pk')
        return Wishlist.objects.filter(login_id=loginid)

    def list(self, request, *args, **kwargs):
        wishlists = self.get_queryset()
        loginid = self.kwargs.get('pk')

        try:
            user = Login.objects.get(id=loginid)
        except Login.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        wishlist_data = WishlistSerializer(wishlists, many=True).data
        user_data = LoginSerializer(user).data  
        product_ids = [wishlist['product_id'] for wishlist in wishlist_data]

        products = Product.objects.filter(id__in=product_ids)
        product_data = ProductSerializer(products, many=True).data
        product_data_map = {product['id']: product for product in product_data}

        for wishlist in wishlist_data:
            wishlist['login_id'] = user_data  
            wishlist['product_details'] = product_data_map.get(wishlist['product_id'], {})

        response_data = {
            'wishlists': wishlist_data,
        }

        return Response(response_data)

    def options(self, request, *args, **kwargs):
        response = super().options(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = '*'  # Allow all origins
        response['Access-Control-Allow-Methods'] = 'GET, OPTIONS'  # Allowed methods
        response['Access-Control-Allow-Headers'] = 'Content-Type'  # Allowed headers
        return response



class view_user_api(GenericAPIView):
    def get(self,request):
        user=Registration.objects.all()
        if (user.count()>0):
            serializer=RegistrationSerializer(user,many=True)
            return Response({'data':serializer.data,'message':'data get','success':True}, status=status.HTTP_200_OK)
        else:
            return Response({'data':'no data availabe'}, status=status.HTTP_400_BAD_REQUEST)
        







class add_review_api(GenericAPIView):
    serializer_class = ReviewSerializer

    def post(self, request):
        product_id = request.data.get('product_id')
        user_id = request.data.get('user_id')
        description = request.data.get('description')

        # Check for product
        product_data = Product.objects.filter(id=product_id).values()
        if not product_data:
            return Response({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        product_name = product_data[0].get('product_name', '')

        # Check for user
        user_data = Registration.objects.filter(login_id=user_id).values()
        if not user_data:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        username = user_data[0].get('username', '')

        # Create serializer
        serializer = self.serializer_class(data={
            'product_id': product_id,
            'user_id': user_id,
            'product_name': product_name,
            'username': username,
            'time': "",  # You may want to populate this with the current time
            'description': description,
        })

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Review added successfully'}, status=status.HTTP_201_CREATED)

        return Response({'data': serializer.errors, 'message': 'Failed to add review', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)










from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer

class view_single_product_api(GenericAPIView):
    
    def get(self, request, id):
        try:
            queryset = Product.objects.get(pk=id)
            serializer = ProductSerializer(queryset)
            return Response({
                'data': serializer.data,
                'message': 'Product retrieved successfully',
                'success': 1
            }, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({
                'data': 'no data available',
                'message': 'Failed',
                'success': 0
            }, status=status.HTTP_404_NOT_FOUND)
        






from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import Shop, Login
from .serializers import ShopRegistrationSerializer, LoginSerializer

class shop_registration_api(GenericAPIView):
    serializer_class = ShopRegistrationSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        shop_name = request.data.get('shop_name')
        email = request.data.get('email')
        password = request.data.get('password')
        phone_number = request.data.get('number')
        address = request.data.get('address')
        role = 'shop'

        # Check for duplicate email or phone number
        if Shop.objects.filter(email=email).exists():
            return Response({'message': 'Duplicate email found!'}, status=status.HTTP_400_BAD_REQUEST)
        if Shop.objects.filter(phone_number=phone_number).exists():
            return Response({'message': 'Duplicate phone number found!'}, status=status.HTTP_400_BAD_REQUEST)

        # Create a Login entry
        login_data = {'email': email, 'password': password, 'role': role}
        serializer_login = self.serializer_class_login(data=login_data)
        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
        else:
            return Response({'message': 'Login creation failed!', 'errors': serializer_login.errors}, status=status.HTTP_400_BAD_REQUEST)

        # Create the Shop entry
        shop_data = {
            'shop_name': shop_name,
            'email': email,
            'password': password,
            'phone_number': phone_number,
            'address': address,
            'login_id': login_id,
            'role': role
        }

        serializer = self.serializer_class(data=shop_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Shop registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    




class shop_view_product_api(GenericAPIView):
    
    def get(self, request, id):
        try:
            queryset = Product.objects.get(shop_id=id)
            serializer = ProductSerializer(queryset)
            return Response({
                'data': serializer.data,
                'message': 'Product retrieved successfully',
                'success': 1
            }, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({
                'data': 'no data available',
                'message': 'Failed',
                'success': 0
            }, status=status.HTTP_404_NOT_FOUND)
        





class shop_view_profile_api(GenericAPIView):        
    def get(self, request, id):
        try:
            queryset = Shop.objects.get(pk=id)
            serializer = ShopRegistrationSerializer(queryset)
            return Response({
                'data': serializer.data,
                'message': 'Product retrieved successfully',
                'success': 1
            }, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({
                'data': 'no data available',
                'message': 'Failed',
                'success': 0
            }, status=status.HTTP_404_NOT_FOUND)
        






# class view_user_profile_api(GenericAPIView):
#     def get(self, request, id):
#         try:
#             queryset = Registration.objects.get(pk=id)
#             serializer = RegistrationSerializer(queryset)
#             return Response({
#                 'data': serializer.data,
#                 'message': 'Product retrieved successfully',
#                 'success': 1
#             }, status=status.HTTP_200_OK)
#         except Registration.DoesNotExist:
#             return Response({
#                 'data': 'no data available',
#                 'message': 'Failed',
#                 'success': 0
#             }, status=status.HTTP_404_NOT_FOUND)
        







class add_cart_api(generics.GenericAPIView):
    serializer_class = CartSerializer

    def post(self, request):
        product_id = request.data.get('product_id')
        user_id = request.data.get('user_id')
        
        if not product_id or not user_id:
            return Response({"error": "Both product_id and user_id are required."}, status=status.HTTP_400_BAD_REQUEST)

        product_data = Product.objects.filter(id=product_id).first()
        if not product_data:
            return Response({'message': 'Product not found', 'success': False}, status=status.HTTP_404_NOT_FOUND)

        user_data = Login.objects.filter(id=user_id).first()  # Ensure you are checking for a valid user
        if not user_data:
            return Response({'message': 'User not found', 'success': False}, status=status.HTTP_404_NOT_FOUND)

        cart_entry = Cart.objects.filter(product_id=product_data, user_id=user_data).first()
        if cart_entry:
            return Response({'message': 'Item already exists in the cart', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

        try:
            new_cart_entry = Cart(
                user_id=user_data,  # Assign the Login instance
                product_id=product_data,  # Assign the Product instance
                quantity=1,  # Set default quantity to 1
                cart_status=1  # Set cart_status to 1
            )
            new_cart_entry.save()
            return Response({"message": "Product added to cart.", "success": True}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"error": "This product is already in your cart."}, status=status.HTTP_400_BAD_REQUEST)
class ViewCartApi(generics.GenericAPIView):
    serializer_class = CartSerializer

    def get(self, request, user_id):
        # Validate that user_id is provided
        if not user_id:
            return Response({"error": "user_id is required."}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve the cart items for the specified user
        cart_items = Cart.objects.filter(user_id=user_id).select_related('product_id')  # Use select_related for optimization
        print(cart_items)
        if not cart_items.exists():
            return Response({"message": "Cart is empty.", "success": False}, status=status.HTTP_404_NOT_FOUND)

        # Serialize the cart items
        serializer = self.serializer_class(cart_items, many=True)
        
        return Response({"cart_items": serializer.data, "success": True}, status=status.HTTP_200_OK)


class ViewCartAPI(generics.GenericAPIView):
    serializer_class = CartSerializer

    def get(self, request, user_id):
        cart_items = Cart.objects.filter(user_id=user_id)

        if cart_items.exists():
            cart_data = self.serializer_class(cart_items, many=True).data
            return Response({'cart_items': cart_data, 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Cart is empty', 'success': False}, status=status.HTTP_404_NOT_FOUND)
        



class view_data(GenericAPIView):

    serializer_class = WishlistSerializer

    def get(self, request, id):
        cart_items = Wishlist.objects.filter(login_id=id)

        if cart_items.exists():
            cart_data = self.serializer_class(cart_items, many=True).data

            product_ids = [item['product_id'] for item in cart_data]
            products = Product.objects.filter(id__in=product_ids)
            product_data = ProductSerializer(products, many=True).data
            product_data_map = {product['id']: product for product in product_data}

            for item in cart_data:
                item['product_details'] = product_data_map.get(item['product_id'], {})

            return Response({'wishlist': cart_data, 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'wishlist is empty', 'success': False}, status=status.HTTP_404_NOT_FOUND)



class view_data_cart(GenericAPIView):

    serializer_class = CartSerializer

    def get(self, request, user_id):
        print(user_id)
        cart_items = Cart.objects.filter(user_id=user_id)
        print(cart_items)
        if cart_items.exists():
            cart_data = self.serializer_class(cart_items, many=True).data
            print(cart_data)

            product_ids = [item['product_id'] for item in cart_data]
            products = Product.objects.filter(id__in=product_ids)
            product_data = ProductSerializer(products, many=True).data
            product_data_map = {product['id']: product for product in product_data}

            for item in cart_data:
                item['product_details'] = product_data_map.get(item['product_id'], {})

            return Response({'cart_items': cart_data, 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Cart is empty', 'success': False}, status=status.HTTP_404_NOT_FOUND)
        




class delete_cart_api(generics.GenericAPIView):
    serializer_class = CartSerializer

    def delete(self, request,id):
        try:
            cart_item = Cart.objects.get(pk=id)
            cart_item.delete()
            return Response({'message': 'Deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
        except Cart.DoesNotExist:
            return Response({'error': 'Cart item not found.'}, status=status.HTTP_404_NOT_FOUND)
        




class place_order_api(GenericAPIView):
    serializer_class = OrderSerializer

    def post(self, request, user_id):
        print(f"User ID: {user_id}")
        cart_items = Cart.objects.filter(user_id=user_id, cart_status="1")
        print(f"Cart Items: {cart_items}")

        if cart_items.exists():
            orders = []
            for item in cart_items:
                order_data = {
                    'product_id': item.product_id.id, 
                    'user_id': item.user_id.id,      
                    'quantity': item.quantity,
                }
                print(f"Order Data: {order_data}")

                serializer = self.serializer_class(data=order_data)
                
                if serializer.is_valid():
                    serializer.save()
                    orders.append(serializer.data)
                else:
                    print(f"Serializer Errors: {serializer.errors}")
                    return Response({'message': 'Failed to place order', 'errors': serializer.errors, 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

            cart_items.delete()

            return Response({'data': orders, 'message': 'Order placed successfully', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No items in cart to place order', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)






class increment_quantity_api(GenericAPIView):

    serializer_class = CartSerializer

    def post(self, request):
        cart_id = request.data.get('cart_id')

        if not cart_id:
            return Response({"error": "cart_id is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = get_object_or_404(Cart, id=cart_id)
            
            cart_item.quantity = cart_item.quantity + 1
            cart_item.save()

            return Response({
                "message": "Product quantity incremented successfully.",
                "quantity": cart_item.quantity
            }, status=status.HTTP_200_OK)

        except Cart.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({"error": "Invalid quantity value."}, status=status.HTTP_400_BAD_REQUEST)





class update_cart_quantity_api(generics.GenericAPIView):
    
    serializer_class = CartSerializer

    def post(self, request):
        cart_id = request.data.get('cart_id')
      
        if not cart_id:
            return Response({"error": "cart_id is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = get_object_or_404(Cart, id=cart_id)
            print("Before increment:", cart_item.quantity)
            cart_item.quantity = cart_item.quantity + 1
            print("After increment:", cart_item.quantity)
            cart_item.save()

            return Response({"message": "Cart quantity updated successfully."}, status=status.HTTP_200_OK)
        except Cart.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({"error": "Invalid quantity value."}, status=status.HTTP_400_BAD_REQUEST)




class decrement_quantity_api(GenericAPIView):

    serializer_class = CartSerializer

    def post(self, request):
        cart_id = request.data.get('cart_id')

        if not cart_id:
            return Response({"error": "cart_id is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_item = get_object_or_404(Cart, id=cart_id)
            
            cart_item.quantity = cart_item.quantity - 1
            cart_item.save()

            return Response({
                "message": "Product quantity decrement successfully.",
                "quantity": cart_item.quantity
            }, status=status.HTTP_200_OK)

        except Cart.DoesNotExist:
            return Response({"error": "Cart item not found."}, status=status.HTTP_404_NOT_FOUND)
        except ValueError:
            return Response({"error": "Invalid quantity value."}, status=status.HTTP_400_BAD_REQUEST)






class view_orders_api(GenericAPIView):

    serializer_class = OrderSerializer

    def get(self, request, user_id):
        orders = Order.objects.filter(user_id=user_id)
        print(f"Orders for User ID {user_id}: {orders}")

        if orders.exists():
            serializer = self.serializer_class(orders, many=True)
            return Response({'data': serializer.data, 'message': 'Orders retrieved successfully', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No orders found for the user', 'success': 0}, status=status.HTTP_404_NOT_FOUND)








class view_user_profile_api(RetrieveAPIView):
    serializer_class = RegistrationSerializer
    queryset = Registration.objects.all()

    def get_object(self):
        user_id = self.kwargs.get('pk')  # Assuming 'pk' is the URL parameter for the user ID
        # Use get_object_or_404 for better error handling
        return get_object_or_404(Registration, id=user_id)

    def get(self, request, *args, **kwargs):
        registration = self.get_object()
        serializer = self.get_serializer(registration)
        return Response(serializer.data, status=status.HTTP_200_OK)




class view_shop_profile_api(RetrieveAPIView):
    serializer_class = ShopRegistrationSerializer
    queryset = Shop.objects.all()
    
    def get_object(self):
        login_id = self.kwargs.get('pk')  
        return Shop.objects.get(login_id=login_id)




class update_single_user_api(GenericAPIView):
    serializer_class=RegistrationSerializer
    def put(self,request,id):
        queryset=Registration.objects.get(pk=id)
        print(queryset)
        serializer=RegistrationSerializer(
            instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'data get','success':True}, status=status.HTTP_200_OK)
        

  






from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status




class update_shop_profile_api(APIView):
    parser_classes = (MultiPartParser, FormParser)
    
    def put(self, request, id):
        try:
            shop = Shop.objects.get(id=id)
            serializer = ShopRegistrationSerializer(shop, data=request.data, partial=True)
            
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {'data': serializer.data, 'message': 'Profile updated successfully', 'success': True}, 
                    status=status.HTTP_200_OK
                )
            return Response(
                {'message': 'Invalid data', 'errors': serializer.errors}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except Shop.DoesNotExist:
            return Response({'message': 'Shop not found'}, status=status.HTTP_404_NOT_FOUND)



class view_single_shop_product(RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_object(self):
        product_id = self.kwargs.get('pk') 
        return get_object_or_404(Product, id=product_id)

    def get(self, request, *args, **kwargs):
        product = self.get_object()
        serializer = self.get_serializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)



from rest_framework.generics import UpdateAPIView


class update_single_shop_product(UpdateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_object(self):
        product_id = self.kwargs.get('id') 
        return get_object_or_404(Product, id=product_id)

    def put(self, request, *args, **kwargs):
        product = self.get_object()
        serializer = self.get_serializer(product, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Product updated successfully', 'success': True}, 
                            status=status.HTTP_200_OK)
        
        return Response({'errors': serializer.errors, 'success': False}, status=status.HTTP_400_BAD_REQUEST)
    




from rest_framework.generics import DestroyAPIView

class delete_single_shop_product(DestroyAPIView):
    queryset = Product.objects.all()

    def get_object(self):
        product_id = self.kwargs.get('id')  # Using 'id' from the URL
        return get_object_or_404(Product, id=product_id)

    def delete(self, request, *args, **kwargs):
        product = self.get_object()
        product.delete()  # Delete the product
        return Response({'message': 'Product deleted successfully', 'success': True}, 
                        status=status.HTTP_204_NO_CONTENT)