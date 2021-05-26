from flask import Blueprint, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, Cart, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    print(current_user.gold)
    user = User.query.get(id)
    return user.to_dict()


"""-----BELOW THIS LINE IS CART FUNCTIONALITY-----"""


@user_routes.route('/<int:id>/cart')
@login_required
def cart(id):
    carts = Cart.query.filter(Cart.user_id == id)
    # carts = Cart.query.all()
    # return {"reviews": [review.user.username for review in reviews]}
    return {"carts": [cart.to_dict() for cart in carts]}


@user_routes.route('/<int:id>/cart/products/<int:product_id>', methods=['POST'])
# @login_required
def add_to_cart(id, product_id):
    return f'This is the {id} and the {product_id}!'


@user_routes.route('/<int:id>/cart/products/<int:product_id>', methods=['DELETE'])
# @login_required
def delete_from_cart(id, product_id):
    return f'This is the {id} and the {product_id}!'


@user_routes.route('/<int:id>/cart', methods=['DELETE'])
# @login_required
def delete_cart(id):
    return 'CART!!!'
