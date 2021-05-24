from .db import db
from sqlalchemy.orm import relationship

class Category(db.Model):
  __tablename__= 'categories'

  id = db.Column(db.Integer, primary_key=True)
  category = db.Column(db.String(254), nullable=False)
  products = relationship("Product", back_populates="Category")

def to_dict(self):
  return{
    "id": self.id,
    "category": self.category,
  }
