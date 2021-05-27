from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Review


class ReviewForm(FlaskForm):
    rating = IntegerField('Rating', validators=[DataRequired()])
    review = TextAreaField('Review', validators=[DataRequired()])
    productId = IntegerField('Product Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
