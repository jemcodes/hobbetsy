from flask import Blueprint, jsonify
from flask_login import login_required
# from app.models import Product

product_routes = Blueprint('product', __name__)


@product_routes.route('/')
# @login_required
def products():
    return 'Hello world'
