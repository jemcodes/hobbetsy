from .db import db
# from .user import User
# from .product import Product
from sqlalchemy.orm import relationship


class Cart(db.Model):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    user = db.relationship("User", back_populates="cart")
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    products = db.relationship("Product", back_populates="cart")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "products": self.products
        }
