from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Review


class CartForm(FlaskForm):
    user_id = IntegerField('User Id', validators=[DataRequired()])
    product_id = IntegerField('Product Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
