from app.models import cart, db, Cart


def seed_carts():

    first_item = Cart(user_id=1, product_id=1)

    db.session.add(first_item)


    db.session.commit()


def undo_carts():

    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()
