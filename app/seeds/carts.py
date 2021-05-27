from app.models import cart, db, Cart


def seed_carts():

    first_item = Cart(user_id=1, product_id=1)
    second_item = Cart(user_id=2, product_id=2)
    third_item = Cart(user_id=1, product_id=3)

    db.session.add(first_item)
    db.session.add(second_item)
    db.session.add(third_item)


    db.session.commit()


def undo_carts():

    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()
