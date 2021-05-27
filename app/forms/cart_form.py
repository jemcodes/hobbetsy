from flask_wtf import FlaskForm
from wtforms import SubmitField, IntegerField
from wtforms.validators import DataRequired


class CartForm(FlaskForm):

    userId = IntegerField('User Id', validators=[DataRequired()])
    productId = IntegerField('Product Id', validators=[DataRequired()])
    submit = SubmitField('Submit')
