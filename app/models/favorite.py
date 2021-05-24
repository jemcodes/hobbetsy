from .db import db

class Favorite(db.Model):
  __tablename__ = "favorites"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  user = db.relationship("User",back_populates="favorites")
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
  product = db.relationship("Product",back_populates="favorites")

  def to_dict(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "product_id": self.product_id
    }
