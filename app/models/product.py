from .db import db
# from .category import Category
from sqlalchemy.orm import relationship

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    image = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    lore = db.Column(db.Text, nullable=True)
    quantity = db.Column(db.Integer, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    categories = db.relationship("Category", back_populates="products")
    cart = db.relationship("Cart", back_populates="products")
    review = db.relationship("Review", back_populates="products")
    favorites = db.relationship("Favorite", back_populates="product")

    def to_dict(self):
      return{
        "id": self.id,
        "title": self.title,
        "image": self.image,
        "price": self.price,
        "description": self.description,
        "lore": self.lore,
        "quantity": self.quantity,
        # "categories": self.categories
      }
