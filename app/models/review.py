from .db import db

class Review(db.Model):
  __tablename__ = "reviews"

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer, nullable=False)
  review = db.Column(db.Text, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  user = db.relationship("User",back_populates="reviews")
  product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
  products = db.relationship("Product",back_populates="review")


  def to_dict(self):
    return {
      "id": self.id,
      "rating": self.rating,
      "review": self.review,
      "user_id": self.user_id,
      "product_id": self.product_id,
      "user": self.user.username
    }
