from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='BradTheDemolicious',
                email='demo@aa.io', password='password', gold=500)
    gimli = User(username='Gimli', email='demo1@aa.io',
                 password='password', gold=600)
    legolas = User(username='Legolas', email='demo2@aa.io',
                   password='password', gold=700)
    pippin = User(username='Pippin', email='demo3@aa.io',
                  password='password', gold=800)
    gandalf = User(username='GandalfTheGrey',
                   email='demo4@aa.io', password='password', gold=900)
    aragorn = User(username='Aragorn', email='demo5@aa.io',
                   password='password', gold=1000)
    samwise = User(username='SamwiseGamgee', email='demo6@aa.io',
                   password='password', gold=500)
    frodo = User(username='Frodo', email='demo7@aa.io',
                 password='password', gold=600)
    bombadil = User(username='T.Bombadil', email='demo8@aa.io',
                    password='password', gold=700)
    treebeard = User(username='TreeBeard', email='demo9@aa.io',
                     password='password', gold=700)
    oldManWillow = User(username='OldManWillow',
                        email='demo10@aa.io', password='password', gold=700)
    gollum = User(username='Sméagol', email='demo11@aa.io',
                  password='password', gold=700)
    sauron = User(username='Sauron', email='demo12@aa.io',
                  password='password', gold=700)
    smaug = User(username='SmaugTheTerrible',
                 email='demo13@aa.io', password='password', gold=700)
    bilbo = User(username='BilboTheThief', email='demo14@aa.io',
                 password='password', gold=700)
    radagast = User(username='RadagastTheBrown',
                    email='demo15@aa.io', password='password', gold=700)
    elrond = User(username='Elrond', email='demo16@aa.io',
                  password='password', gold=900)
    galadriel = User(username='Galadriel', email='demo17@aa.io',
                     password='password', gold=900)
    fili = User(username='Fili', email='demo18@aa.io',
                password='password', gold=900)
    kili = User(username='Kili', email='demo19@aa.io',
                password='password', gold=900)
    balin = User(username='Balin', email='demo20@aa.io',
                 password='password', gold=900)
    dwalin = User(username='Dwalin', email='demo21@aa.io',
                  password='password', gold=700)
    oin = User(username='Oin', email='demo22@aa.io',
               password='password', gold=600)
    gloin = User(username='Glóin', email='demo23@aa.io',
                 password='password', gold=500)
    dori = User(username='Dori', email='demo24@aa.io',
                password='password', gold=1000)
    nori = User(username='Nori', email='demo25@aa.io',
                password='password', gold=800)
    ori = User(username='Ori', email='demo26@aa.io',
               password='password', gold=900)
    bifur = User(username='Bifur', email='demo27@aa.io',
                 password='password', gold=400)
    bofur = User(username='Bofur', email='demo28@aa.io',
                 password='password', gold=700)
    bombur = User(username='Bombur', email='demo29@aa.io',
                  password='password', gold=800)
    thorin = User(username='ThorinOakenshield',
                  email='demo30@aa.io', password='password', gold=900)
    bard = User(username='BardTheBowman', email='demo31@aa.io',
                password='password', gold=500)
    lordOfTheEagles = User(username='Gwaihir', email='demo32@aa.io',
                           password='password', gold=600)
    theNecromancer = User(username='TheNecromancer', email='demo33@aa.io',
                          password='password', gold=600)
    tomBertWilliam = User(username='TomBertAndWilliam', email='demo34@aa.io',
                          password='password', gold=600)
    burrahobbit = User(username='Aburrahobbit', email='demo35@aa.io',
                       password='password', gold=600)
    arwen = User(username='Arwen', email='demo36@aa.io',
                          password='password', gold=600)

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
    db.session.add(fili)
    db.session.add(kili)
    db.session.add(balin)
    db.session.add(dwalin)
    db.session.add(oin)
    db.session.add(gloin)
    db.session.add(dori)
    db.session.add(ori)
    db.session.add(bifur)
    db.session.add(bombur)
    db.session.add(thorin)
    db.session.add(bard)
    db.session.add(lordOfTheEagles)
    db.session.add(theNecromancer)
    db.session.add(tomBertWilliam)
    db.session.add(burrahobbit)
    db.session.add(arwen)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
