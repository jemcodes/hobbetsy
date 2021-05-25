from app.models import db, Category


def seed_categories():

    weapons = Category('Weapons')
    shields = Category('Shields')
    armor = Category('Armor')
    food_and_drink = Category('Food and Drink')

    db.session.add(weapons)
    db.session.add(shields)
    db.session.add(armor)
    db.session.add(food_and_drink)

    db.session.commit()


def undo_categories():

    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
