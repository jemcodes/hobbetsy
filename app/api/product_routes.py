from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product

product_routes = Blueprint('products', __name__)


@product_routes.route('/')
@login_required
def products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}


# @product_routes.route('/<int:id>')
# # @login_required
# def product(id):
#     # product = Product.query.get(id)
#     # return product.to_dict()


"""-----BELOW THIS LINE IS REVIEW/RATING FUNCTIONALITY-----"""

# @product_routes.route('/<int:id>/reviews')
# # @login_required
# def product_reviews(id):
#     return 'THESE ARE REVIEWS!'


# @product_routes.route('/<int:id>/reviews', methods=['POST'])
# # @login_required
# def add_product_review(id):
#     return 'THESE ARE REVIEWS!'


# @product_routes.route('/<int:id>/reviews/<int:review_id>', methods=['PUT'])
# # @login_required
# def edit_product_review(id, review_id):
#     return f'This is product id {id} and review id {review_id}!'


# @product_routes.route('/<int:id>/reviews/<int:review_id>', methods=['DELETE'])
# # @login_required
# def edit_product_review(id, review_id):
#     return f'This is product id {id} and review id {review_id}!'
