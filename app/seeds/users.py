from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='BradTheDemolicious', email='demo@aa.io', password='password', gold=500)
    gimli = User(username='Gimli', email='demo1@aa.io', password='password', gold=600)
    legolas = User(username='Legolas', email='demo2@aa.io', password='password', gold=700)
    pippin = User(username='Pippin', email='demo3@aa.io', password='password', gold=800)
    gandalf = User(username='GandalfTheGrey', email='demo4@aa.io', password='password', gold=900)
    aragorn = User(username='Aragorn', email='demo5@aa.io', password='password', gold=1000)
    samwise = User(username='SamwiseGamgee', email='demo6@aa.io', password='password', gold=500)
    frodo = User(username='Frodo', email='demo7@aa.io', password='password', gold=600)
    bombadil = User(username='T.Bombadil', email='demo8@aa.io', password='password', gold=700)
    treebeard = User(username='TreeBeard', email='demo9@aa.io', password='password', gold=700)
    oldManWillow = User(username='OldManWillow', email='demo10@aa.io', password='password', gold=700)
    gollum = User(username='Gollum', email='demo11@aa.io', password='password', gold=700)
    sauron = User(username='Sauron', email='demo12@aa.io', password='password', gold=700)
    smaug = User(username='SmaugTheTerrible', email='demo13@aa.io', password='password', gold=700)
    bilbo = User(username='BilboTheThief', email='demo14@aa.io', password='password', gold=700)
    radagast = User(username='RadagastTheBrown', email='demo15@aa.io', password='password', gold=700)
    elrond = User(username='Elrond', email='demo16@aa.io', password='password', gold=900)
    galadriel = User(username='Galadriel', email='demo17@aa.io', password='password', gold=900)

    db.session.add(demo)
    db.session.add(gimli)
    db.session.add(legolas)
    db.session.add(pippin)
    db.session.add(gandalf)
    db.session.add(aragorn)
    db.session.add(samwise)
    db.session.add(frodo)
    db.session.add(bombadil)
    db.session.add(treebeard)
    db.session.add(oldManWillow)
    db.session.add(gollum)
    db.session.add(sauron)
    db.session.add(smaug)
    db.session.add(bilbo)
    db.session.add(radagast)
    db.session.add(elrond)
    db.session.add(galadriel)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
