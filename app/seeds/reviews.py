from app.models import db, Review


def seed_reviews():

    One = Review(rating=4, review="I wish I could go back in time and buy this again.", user_id=1, product_id=1)
    Two = Review(rating=5, review="Best sh*t ever", user_id=2, product_id=2)
    Three = Review(rating=1, review="They stole my gold! Don't buy this! It's a scam!", user_id=2, product_id=2)
    Four = Review(rating=3, review="Dear fellow conspirators, this item is no good.", user_id=3, product_id=3)
    Five = Review(rating=4, review="Great stuff! All praise to his wine and ale", user_id=4, product_id=4)
    Six = Review(rating=5, review="May the hair on your feet grow thick and furry.", user_id=5, product_id=5)
    Seven = Review(rating=4, review="May the hair on this seller's toes never fall out!", user_id=6, product_id=1)
    Eight = Review(rating=2, review="This seller has good manners for THIEF and a LIAR.", user_id=7, product_id=2)
    Nine = Review(rating=1, review="This was actually as bad as a nasty, dirty, wet hole. No, there were no worms or an oozy smell, so I suppose you need to be grateful about the little things in life.", user_id=10, product_id=5)
    Ten = Review(rating=2, review="It was NASTY, DISTURBING and UNCOMFORTABLE! It actually made me late for my second supper. What an awful day twas!", user_id=11, product_id=1)
    Eleven = Review(rating=5, review="Is it nice? Yesss. Is it juicy?? Whyyy, yesss it isss! It was scrumptiously crunchable!", user_id=12, product_id=2)
    Twelve = Review(rating=5, review="May the wind under your wings bear you where the sun sails and the moon walks. And yeah you wanna buy this. It's good stuff", user_id=16, product_id=1)
    Thirteen = Review(rating=1, review="Gave it a one because I cannot give it a zero. Beware The mines! Beware of the Sea!", user_id=2, product_id=5)

    db.session.add(One)
    db.session.add(Two)
    db.session.add(Three)
    db.session.add(Four)
    db.session.add(Five)
    db.session.add(Six)
    db.session.add(Seven)
    db.session.add(Eight)
    db.session.add(Nine)
    db.session.add(Ten)
    db.session.add(Eleven)
    db.session.add(Twelve)
    db.session.add(Thirteen)
    # db.session.add(Fourteen)
    # db.session.add(Fifteen)
    # db.session.add(Sixteen)
    # db.session.add(Seventeen)
    # db.session.add(Eighteen)
    # db.session.add(Nineteen)
    # db.session.add(Twenty)
    # db.session.add(TwentyOne)
    # db.session.add(TwentyTwo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
