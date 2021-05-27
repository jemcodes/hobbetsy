from flask import Blueprint, jsonify, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, Cart, Product
from app.forms.cart_form import CartForm

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
    carts = Cart.query.filter(Cart.user_id == id).join(Product, Product.id == Cart.product_id).all()
    # carts = Cart.query.all()
    # return {"reviews": [review.user.username for review in reviews]}
    return {"carts": [cart.to_dict() for cart in carts]}


@user_routes.route('/<int:id>/cart/products/<int:product_id>', methods=['POST'])
@login_required
def add_to_cart(id, product_id):
    print(f"dfgsdfgsfh {id} {product_id} sfdgsdfg")
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(f"ARE WE IN THE IF? ARE WE VALIDATING?")
        new_cart_item = Cart(
            user_id = id,
            product_id = product_id
        )
        print(f"NEW_CART:{new_cart_item}")
        db.session.add(new_cart_item)
        db.session.commit()
        # return new_cart_item.to_dict()
        return new_cart_item
    return "okie dokey"

@user_routes.route('/<int:id>/cart/products/<int:product_id>', methods=['DELETE'])
# @login_required
def delete_from_cart(id, product_id):
    return f'This is the {id} and the {product_id}!'


@user_routes.route('/<int:id>/cart', methods=['DELETE'])
# @login_required
def delete_cart(id):
    return 'CART!!!'
