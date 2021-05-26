from app.forms.review_form import ReviewForm
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, Review, User

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


@product_routes.route('/<int:id>/reviews')
@login_required
def product_reviews(id):
    reviews = Review.query.filter(Review.product_id == id).join(
        User, User.id == Review.user_id).all()
    # return {"reviews": [review.user.username for review in reviews]}
    return {"reviews": [review.to_dict() for review in reviews]}


@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def add_product_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(f'I am a review {newReview}')
    if form.validate_on_submit():
        new_review = Review(
            rating=form.data['rating'],
            review=form.data['review'],
            product_id=form.data["productId"],
            user_id=current_user.id
        )
        db.session.add(new_review)
        db.session.commit()
        print("NEW REVIEW", new_review)
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @product_routes.route('/<int:id>/reviews/<int:review_id>', methods=['PUT'])
# @login_required
# def edit_product_review(id, review_id):
#     form = ReviewForm()
#     review = Review.query.get(1)

#     return f'This is product id {id} and review id {review_id}!'


# @product_routes.route('/<int:id>/reviews/<int:review_id>',
#  methods=['DELETE'])
# # @login_required
# def edit_product_review(id, review_id):
#     return f'This is product id {id} and review id {review_id}!'
