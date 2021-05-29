from app.models import category, db, Category


def seed_categories():

    weapons = Category(category='Weapons')
    shields = Category(category='Shields')
    armor = Category(category='Armor')
    food_and_drink = Category(category='Food and Drink')
    unique = Category(category='Unique')

    db.session.add(weapons)
    db.session.add(shields)
    db.session.add(armor)
    db.session.add(food_and_drink)
    db.session.add(unique)

    db.session.commit()


def undo_categories():

    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
