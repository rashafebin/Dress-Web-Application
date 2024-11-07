from django.urls import path
from . import views


urlpatterns=[
    path('registration/',views.registration_api.as_view(),name='registration'),

    path('login/',views.login_api.as_view(),name='login'),

    path('category_api/',views.category_api.as_view(),name='category_api'),

    path('add_product_api/', views.add_product_api.as_view(), name='add_product_api'),

    path('view_product_api/',views.view_product_api.as_view(),name='view_product_api'),


    path('delete_sigle_user_api/<int:id>',views.delete_single_user_api.as_view(),name='delete_sigle_user_api'),
    
    path('add_category_api/',views.add_category_api.as_view(),name='add_category_api'),

    path('view_category_api/',views.view_category_api.as_view(),name='view_category_api'),

    path('categories/<int:pk>/', views.SingleCategoryAPI.as_view(), name='category-detail'),

    # path('view_user_profile_api/<int:pk>/', views.view_user_profile_api.as_view(), name='view_user_profile_api'),

    path('add_wishlist_api/',views.add_wishlist_api.as_view(),name='add_wishlist_api'),

    path('view_wishlist_api/<int:pk>/', views.view_wishlist_api.as_view(), name='view_wishlist_api'),

    path('view_user_api/',views.view_user_api.as_view(),name='view_user_api'),

    path('add_review_api/',views.add_review_api.as_view(),name='add_review_api'),

    path('view_single_product_api/<int:id>',views.view_single_product_api.as_view(),name='view_single_product_api'),

    path('shop_registration',views.shop_registration_api.as_view(),name='shop_registration_api'),

    path('shop_view_product_api/<int:id>',views.shop_view_product_api.as_view(),name='shop_view_product_api'),

    path('shop_view_profile_api/<int:id>',views.shop_view_profile_api.as_view(),name='shop_view_profile_api'),

    path('add_cart_api/',views.add_cart_api.as_view(),name='add_cart_api'),

    # path('view_cart_api/<user_id>/',views.ViewCartAPI.as_view(), name='view_cart_api'),

    # path('cart_view/<int:user_id>/',views.cart_view.as_view(),name='cart_view'),

    path("delete_cart_api/<int:id>/", views.delete_cart_api.as_view(), name="delete_cart_api"),

    path('place-order/<str:user_id>/', views.place_order_api.as_view(), name='place_order'),

# # viewwishlist
    path('view_data/<int:id>',views.view_data.as_view(),name='view_data'),

    path('view_data_cart/<int:user_id>',views.view_data_cart.as_view(),name='view_data_cart'),
    path('api/cart/<int:user_id>/',views.ViewCartApi.as_view(), name='view_cart'),

    # path('view_cart/<int:user_id>/',views.ViewCartAPI.as_view(), name='view_cart'),

    path('update_cart_quantity_api/',views.update_cart_quantity_api.as_view(), name='update_cart_quantity_api'),

    path('increment_quantity_api/',views.increment_quantity_api.as_view(), name='increment_quantity_api'),

    path('decrement_quantity_api/',views.decrement_quantity_api.as_view(), name='decrement_quantity_api'),
    
    path('view_orders_api/<int:user_id>/',views.view_orders_api.as_view(), name='view_orders_api'),
    

    path('view_user_profile_api/<int:pk>/',views. view_user_profile_api.as_view(), name='view_user_profile_api'),

    path('update_single_user_api/<int:id>',views.update_single_user_api.as_view(),name='update_single_user_api'),

    path('view_shop_profile_api/<int:pk>/',views. view_shop_profile_api.as_view(), name='view_shop_profile_api'),

    path('update_shop_profile_api/<int:id>',views.update_single_user_api.as_view(),name='update_single_user_api'),

    path('view_single_shop_product/',views.view_single_shop_product.as_view(), name='view_single_shop_product'),

     path('update_single_shop_product/<int:id>',views.update_single_shop_product.as_view(),name='update_single_shop_product'),

     path('delete_single_shop_product/<int:id>',views.delete_single_shop_product.as_view(),name='delete_single_shop_product'),


 ]