from flask import Blueprint, jsonify
from flask_login import login_required
# from app.models import Favorite

favorite_routes = Blueprint('favorites', __name__)


@favorite_routes.route('/')
# @login_required
def favorites():
    """Need to pass in the user id to the query to get single user's favorites"""
    favorites = Favorite.query.all()
    return {"favorites": [favorite.to_dict() for favorite in favorites]}


@favorite_routes.route('/', methods= ['POST'])
# @login_required
def add_favorite():
    """Need to pass in the user id to the query to get single user's favorites
    and update logic to match method
    """
    favorites = Favorite.query.all()
    return {"favorites": [favorite.to_dict() for favorite in favorites]}


@favorite_routes.route('/<int:id>', methods= ['DELETE'])
# @login_required
def remove_favorite():
    """Need to pass in the user id to the query to get single user's favorites
    and update logic to match method
    """
    favorites = Favorite.query.all()
    return {"favorites": [favorite.to_dict() for favorite in favorites]}