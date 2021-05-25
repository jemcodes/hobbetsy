from app.models import db, Product


def seed_products():

    """SWORDS"""
    short_sword = Product(title="Short Sword", image="https://images.unsplash.com/photo-1440711085503-89d8ec455791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dvcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price=200, description="A sword for only the very bravest of heros. It is for the Hero who is not afraid to get up close and personal with the maw of the beast. Light versital and ready for any close combat you can throw at it.", lore="It was written by a master swordsman once that a warriors true mettle could only be found when wielding a short sword.", quantity=2000, category_id=1)
    long_sword = Product(title="Long Sword", image="http://www.pngall.com/wp-content/uploads/2016/03/Sword-Free-Download-PNG.png", price=300, description="A sword perfect for your assault class hero. It can stand up to heavy blows from mid-level weapons and yet still be versitile enough to leap into the fold. This blade is deadly in a fight against lightly armoured foes and multiple enemy engagements.", lore="Empires have been won and lost depending on which end of the long sword you found yourself on.", quantity=1467, category_id=1)
    broad_sword = Product(title="Broad Sword", image="", price=500, description="This weapon is designed to counter heavily armoured enemies. It is also helpful in cutting a path through an enemy hoard. It is slow, heavy and will decimate anything in its path.", lore="It is said that when the realm of man was told they would face the armored hoards of Sauron, they responded with the broad sword.", quantity=1298, category_id=1)
    dagger = Product(title="Dagger", image="", price=150, description="If you are looking for fast look no farther than the dagger. This weapon will slice dice and cut POTATOES faster than you can say Bererland.", lore="Strike fast and move quickly is the code of the dagger.", quantity=5000, category_id=1)
    elven_dagger = Product(title="Elven Dagger", image="", price=150, description="The back up weapon of the elvish Army. Used Broadly as a secondary to their bows. More nimble than the traditional dagger but only has one edge.", lore="The elvish dagger is considered a short weapon. Not because of its size but because its target only sees it for a short time before they expire.", quantity=419, category_id=1)
    hook_sword = Product(title="Hook_sword", image="", price=325, description="A sword with surprising multiplicity. It is between the long sword and short sword in length. It has a sharpened point on the end of the backside of the blade that is used to puncture hard targets and pull them.", lore="Its not much to look at but you can use it anywhere.", quantity=10000, category_id=1)
    falchion = Product(title="Falchion", image="", price=500, description="Similar to the broad sword in speed but heavier and more special", lore="", quantity=1298, category_id=1)

    """AXES"""
    dull_axe = Product(title="Dull Axe", image="", price=50, description="I wouldn't say it will split skulls, but it might cut a melon", lore="This axe, at one time, was sharp.", quantity=1, category_id=1)
    huntsmans_axe = Product(title="Huntsman's Axe", image="", price=100, description="This axe is great for a man hunting. Need to feed your family? Look no further. We've got what you're looking for! The Huntsman's Axe!", lore="", quantity=500, category_id=1)
    obsidian_axe = Product(title="Obsidian Axe", image="", price=150, description="This axe cuts through like a cold, dark night. Silent and terrifying.", lore="", quantity=600, category_id=1)
    dwarven_axe = Product(title="Dwarven Axe", image="", price=600, description="Forged within the depths of Moria. Smelted through ages of experience, sweat, blood, and dragon tears.", lore="", quantity=100, category_id=1)

    """BOWS"""
    long_bow = Product(title="Longbow", image="", price=75, description="Great for launching a volley or defending from a siege. A longbow is classic and dependable. Made from a single piece of wood.", lore="", quantity=5000, category_id=1)
    short_bow = Product(title="Shortbow", image="", price=50, description="Great for firing from horseback. The shortbow considered to be the cavalry's first resort.", lore="A favorite of the men of Rohan", quantity=3000, category_id=1)
    elven_bow = Product(title="Elven Bow", image="", price=400, description="Features delicate carvings painted gold. Known for accuracy from great distances. Elegant and effective.", lore="Hewn from the trees of Lothlorien", quantity=100, category_id=1)

    """MACES"""
    wooden_club = Product(title="Wooden Club", image="", price=15, description="Nine out of ten cavemen agree: this wooden club will at least get you home from work.", lore="Definitely didn't find it on the side of the road.", quantity=1, category_id=1)
    flanged_mace = Product(title="Flanged Mace", image="", price=600, description="A highly-specialized mace designed for punching through armor. Heavy and indestructable.", lore="Has ruined more than one game of whack-a-mole.", quantity=1900, category_id=1)
    stone_club = Product(title="Stone Club", image="", price=20, description="Avid stone club users know how hard it is to find the perfect stone for a club. This, my friends, is it.", lore="Definitely also not found on the side of the road.", quantity=2, category_id=1)
    night_club = Product(title="Night Club", image="", price=500, description="A good time, until it's not.", lore="", quantity=7, category_id=1)

    """SHIELDS"""
    wooden_shield = Product(title="Wooden Shield", image="", price=50, description="Effective against weak enemies and dull weapons. If you want to live go for the upgrade.", lore="Also definitely not found on the side of the road.", quantity=2800, category_id=2)
    aspi = Product(title="Aspi", image="", price=600, description="Heavy-duty, metal-studded, but unfortunately not waterproof. Please stop asking.", lore="Used by a civilization where the warrior was held to the highest esteem. Truly unmatched for its potential, especially in group combat.", quantity=300, category_id=2)
    gondorian_shield = Product(title="Gondorian Shield", image="", price=1000, description="This defensive weapon is more of a structure than a piece of equipment. Built to carry its user all the way across No Man's Land. Intimidating and beautiful.", lore="Engraved with the Tree of Gondor.", quantity=10, category_id=2)

    """ARMOR"""
    leather_armor = Product(title="Leather Armor", image="", price=150, description="Light, durable, and slightly flame-retardant.", lore="Made from cow. Depending on the company you keep, can be multifunctional.", quantity=829, category_id=3)
    orc_armor = Product(title="Orc Armor", image="", price=200, description="A patchwork of trophies woven into something somewhat like armor.", lore="Don't look too close.", quantity=317, category_id=3)
    full_plate_armor = Product(title="Full Plate Armor", image="", price=2000, description="You won't go anywhere fast in this, and you won't sneak up on anyone. Also, takes a while to get off but it'll keep your head on.", lore="Imbued with mithril filigree.", quantity=10, category_id=3)

    """FOOD AND DRINK"""
    lembas_bread = Product(title="Lembas Bread", image="", price=15, description="A bite will satisfy a man a day.", lore="", quantity=42, category_id=4)
    legolas_lager = Product(title="Legolas Lager", image="", price=5, description="It won't give you the eyes of an elf, but it'll make you feel like you shoot like one.", lore="It's been said Legolas drank a cask and felt a tingle.", quantity=6, category_id=4)
    gollum_grog = Product(title="Gollum Grog", image="", price=2000, description="Everyone looks good after ten, my precious. A real loincloth-dropper.", lore="Strong enough to bring Deagol back.", quantity=10, category_id=4)
    potatoes = Product(title="Potatoes", image="", price=2000, description="Boil 'em, mash 'em, stick 'em in stew.", lore="Boil 'em, mash 'em, stick 'em in stew.", quantity=100, category_id=4)

    """HORSES"""
    """MAGIC"""
    """UNIQUE ITEMS"""

    db.session.add(short_sword)