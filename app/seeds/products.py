from app.models import db, Product


def seed_products():

    """SWORDS"""
    short_sword = Product(title="Short Sword",
                          image="https://1.bp.blogspot.com/-iV-ILYgMtsg/WqgeQbw-efI/\
                          AAAAAAAADOI/eXxSIeSTWgwibevUdl1OtgapAZ5w3thogCLcBGAs/s1600/\
                          Polished%2BAncient%2BSteel%2BSword.png",
                          price=200, description="A sword for only \
                               the very bravest of heros. It is for the Hero \
                               who is not afraid to get up close and personal \
                               with the maw of the beast. Light versital and \
                               ready for any close combat you can throw at it",
                          lore="It was written by a master swordsman once that\
                               a warriors true mettle could only be found when\
                               wielding a short sword.", quantity=2000,
                          category_id=1)
    long_sword = Product(title="Long Sword",
                         image="https://3.bp.blogspot.com/-ZnGkRBCP3h0/Ws-EiDXXKxI/\
                         AAAAAAAADbY/Ba6RnoNCjMsogGggwL9jp-35xYBo70bsQCLcBGAs/s1600/\
                         Balanced%2BGreatsword%2Bof%2BExtermination%2B53%2B%2528of%\
                         2Bthe%2BMountains%2B56%2529%2B%2528Dwarf-craft%2BGreat%2BSword%2529.png",
                         price=300,
                         description="A sword perfect for\
                         your assault class hero. It can stand up to heavy \
                         blows from mid-level weapons and yet still be\
                         versitile enough to leap into the fold. This blade is\
                         deadly in a fight against lightly armoured foes and\
                         multiple enemy engagements.",
                         lore="Empires have been won and lost depending on\
                               which end of the long sword you found yourself\
                               on.", quantity=1467, category_id=1)
    broad_sword = Product(title="Broad Sword",
                          image="https://4.bp.blogspot.com/-k_jT3_NY9uk/Ws-EnpU4foI/\
                          AAAAAAAADcU/jKAJNf2nkngui4AKvzSG23JkP7Y-L7E-QCLcBGAs/s1600/\
                          Heavy%2BBright%2BSteel%2BGreat%2BSword%2Bof%2BMight.png",
                          price=500, description="This weapon is\
                                designed to counter heavily armoured enemies.\
                                It is also helpful in cutting a path through\
                                an enemy hoard. It is slow, heavy and will\
                                decimate anything in its path.", lore="It is\
                                said that when the realm of man was told they\
                                would face the armored hoards of Sauron, they \
                                responded with the broad sword.",
                                quantity=1298, category_id=1)
    dagger = Product(title="Dagger",
                     image="https://2.bp.blogspot.com/-gkan2PNlDI8/W00fVWx565I/\
                     AAAAAAAAD08/1-vsfzw4y48U3Oo8zFJ__vwRaYFGMCxcACLcBGAs/s1600/\
                     Dagger%2Bof%2Bthe%2BFirst%2BAge%2B59%2B%2528Reshaped%2BFA%2B65%2529.png",
                     price=150,
                     description="If you are looking for\
                     fast look no farther than the dagger. This weapon will\
                     slice dice and cut POTATOES faster than you can say\
                     Bererland.", lore="Strike fast and move quickly is the\
                     code of the dagger.", quantity=5000, category_id=1)
    elven_dagger = Product(title="Elven Dagger",
                           image="https://2.bp.blogspot.com/-gkan2PNlDI8/\
                           W00fVWx565I/AAAAAAAAD08/1-vsfzw4y48U3Oo8zFJ__v[…]%\
                           2Bthe%2BFirst%2BAge%2B59%2B%2528Reshaped%2BFA%2B65%\
                           2529.png", price=150, description="The back up\
                           weapon of the elvish Army. Used Broadly as a\
                           secondary to their bows. More nimble than the\
                           traditional dagger but only has one edge.",
                           lore="The elvish dagger is considered a short\
                           weapon. Not because of its size but because its\
                           target only sees it for a short time before they\
                           expire.", quantity=419, category_id=1)
    hook_sword = Product(title="Hook Sword",
                         image="https://2.bp.blogspot.com/-cJ9EySvp5hs/\
                         WqgeVEwtaGI/AAAAAAAADOg/\
                         DQO6ST0y73Q9EWKXgt0uoViAX1A_WuRvACLcBGAs/s1600/\
                         Scimitar.png", price=325, description="A sword with\
                         surprising multiplicity. It is between the long sword\
                         and short sword in length. It has a sharpened point\
                         on the end of the backside of the blade that is used\
                         to puncture hard targets and pull them.", lore="Its\
                         not much to look at but you can use it anywhere.",
                         quantity=10000, category_id=1)
    falchion = Product(title="Falchion",
                       image="https://4.bp.blogspot.com/-ImRhXaEjZkI/\
                       WqgeXKSiEnI/AAAAAAAADOs/yRzYvSGOW48t-Dyp7eudtr[…]/s1600/\
                       Sword%2Bof%2BKnowledge%2B%2528LM%2Bexclusive%2529.png",
                       price=500, description="Similar to the broad\
                       sword in speed but heavier and more special", lore="",
                       quantity=1298, category_id=1)

    """AXES"""
    dull_axe = Product(title="Dull Axe", image="https://2.bp.blogspot.com/-yJ-\
                       qHbtkjPQ/WtOlh3AV9RI/AAAAAAAADi4/46Xf9q7l6eUyGXmTEuvjxU\
                       […]B%2528Galadhrim%2BAxe%2Bof%2BCombat%2Band%2BTactics%\
                       2529.png", price=50, description="I\
                       wouldn't say it will split skulls, but it might cut a\
                       melon", lore="This axe, at one time, was sharp.",
                       quantity=1, category_id=1)
    huntsmans_axe = Product(title="Huntsman's Axe", image="https://1.bp.\
                            blogspot.com/-tPH6WeUgW3M/WtO52z4JaYI/AAAAAAAADls/\
                            w3OSTE2WOqsAw_F6ZTyXjp[…]eep%2B%2528Polished%\
                            2BFangorn%2BAxe%2Bof%2BStrength%2529.png",
                            price=100,
                            description="This axe is great for a man hunting.\
                            Need to feed your family? Look no further. We've\
                            got what you're looking for! The Huntsman's Axe!",
                            lore="", quantity=500, category_id=1)
    obsidian_axe = Product(title="Obsidian Axe", image="https://2.bp.blogspot.\
                           com/-W3i-bZwWeHg/WtOsikhznaI/AAAAAAAADko/\
                           oe0molH3mmQTgtbLQ975EI[…]s1600/Champion%2527s%2BAxe%\
                           2Bof%2Bthe%2BThird%2BAge%2B75.png", price=150,
                           description="This axe cuts through like a cold,\
                           dark night. Silent and terrifying.", lore="",
                           quantity=600, category_id=1)
    dwarven_axe = Product(title="Dwarven Axe", image="https://1.bp.blogspot.\
                          com/-0ffwfYTYoyg/WtS4CzyM1VI/AAAAAAAADok/\
                          4DPKzb85Ql88773dUcrj76[…]ampion%2527s%2BGreat%2BAxe%\
                          2Bof%2Bthe%2BFIrst%2BAge%2B59.png", price=600,
                          description="Forged within the depths of Moria.\
                          Smelted through ages of experience, sweat, blood,\
                          and dragon tears.", lore="", quantity=100,
                          category_id=1)

    """BOWS"""
    long_bow = Product(title="Longbow", image="https://wow.zamimg.com/uploads/\
                       screenshots/normal/211381-farstriders-longbow.jpg",
                       price=75, description="Great\
                       for launching a volley or defending from a siege. A\
                       longbow is classic and dependable. Made from a single\
                       piece of wood.", lore="", quantity=5000, category_id=1)
    short_bow = Product(title="Shortbow", image="https://wow.zamimg.com/\
                        uploads/screenshots/normal/1013267-composite-bow.jpg",
                        price=50, description="\
                        Great for firing from horseback. The shortbow\
                        considered to be the cavalry's first resort.", lore="A\
                        favorite of the men of Rohan", quantity=3000,
                        category_id=1)
    elven_bow = Product(title="Elven Bow", image="https://wow.zamimg.com/\
                        uploads/screenshots/normal/433155-thoridal-the-stars-\
                        fury.jpg", price=400, description="\
                        Features delicate carvings painted gold. Known for\
                        accuracy from great distances. Elegant and effective.",
                        lore="Hewn from the trees of Lothlorien", quantity=100,
                        category_id=1)

    """MACES"""
    wooden_club = Product(title="Wooden Club", image="https://3.bp.blogspot.\
                          com/-fJRu2TjIgZU/W1JWsyZRRCI/AAAAAAAAEF0/\
                          hHlvtvAnwGghukg0ESi_H2[…]sh%2BClub%2B%2528Heavy%\
                          2BAsh%2BClub%2Bof%2BVitality%2529.png", price=15,
                          description="Nine out of ten cavemen agree: this\
                          wooden club will at least get you home from work.",
                          lore="Definitely didn't find it on the side of the\
                          road.", quantity=1, category_id=1)
    flanged_mace = Product(title="Flanged Mace", image="https://1.bp.blogspot.\
                           com/-JIqZCZEwLBU/W06Kz5EFyvI/AAAAAAAAD6s/\
                           zk11VBxgn4IWyAzmhvgaqf[…]ACLcBGAs/s1600/Forged%\
                           2BElven-steel%2BMace%2Bof%2BCombat.png ", price=600,
                           description="A highly-specialized mace designed for\
                           punching through armor. Heavy and indestructable.",
                           lore="Has ruined more than one game of whack-a-mole\
                           ", quantity=1900, category_id=1)
    stone_club = Product(title="Stone Club", image="https://3.bp.blogspot.com/-\
                         Wf7AIzgCaNQ/W1JYhGeZKqI/AAAAAAAAEHQ/\
                         KsUtA6DCNz8hJtZcVFDhjV6gQvvTKuyaQCLcBGAs/s1600/Old%\
                         2BReliable.png", price=20,
                         description="Avid stone club users know how hard it\
                         is to find the perfect stone for a club. This, my\
                         friends, is it.", lore="Definitely also not found on\
                         the side of the road.", quantity=2, category_id=1)
    night_club = Product(title="Night Club",
                         image="https://1.bp.blogspot.com/-x1aMsB7F06U/\
                         W1j677uh6-I/AAAAAAAAENc/8SRg83q0K88cSwMAVV1lOC[…]\
                         ZW_8QCLcBGAs/s1600/Polished%2BScout%2527s%2BGreat%\
                         2BClub.png", price=500,
                         description="A good time, until it's not.", lore="",
                         quantity=7, category_id=1)

    """SHIELDS"""
    wooden_shield = Product(title="Wooden Shield", image="https://1.bp.\
                            blogspot.com/-FQLI0UrZjDc/XWgIjamlnrI/AAAAAAAAFIc/\
                            96ny6TkIoac6Yp8IEQ84RYs0onYt0uutQCLcBGAs/s1600/\
                            Crafted%2BBuckler.png", price=50,
                            description="Effective against weak enemies and\
                            dull weapons. If you want to live go for the\
                            upgrade.", lore="Also definitely not found on the\
                            side of the road.", quantity=2800, category_id=2)
    aspi = Product(title="Aspi", image="https://1.bp.blogspot.com/-R8vQKwyX9d8/\
                   XWf0nlUQ8JI/AAAAAAAAFFg/JB6BrLkArTMslNNyvm0Kosew-\
                   JQgZ6ABwCLcBGAs/s1600/Shield%2Bof%2BAnfalas.png", price=600,
                   description="Heavy-duty,\
                   metal-studded, but unfortunately not waterproof. Please\
                   stop asking.", lore="Used by a civilization where the\
                   warrior was held to the highest esteem. Truly unmatched for\
                   its potential, especially in group combat.", quantity=300,
                   category_id=2)
    gondorian_shield = Product(title="Gondorian Shield", image="https://1.bp.\
                               blogspot.com/-2t4JSZ5UtGE/XWf0nfhQCiI/\
                               AAAAAAAAFFc/\
                               6ex4hO02laIyDGvh4u9QSmc1zIJxGuyOgCLcBGAs/s1600/\
                               Pack%2Bof%2Bthe%2BAnorien%2BAutumn.png",
                               price=1000,
                               description="This defensive weapon is more of a\
                               structure than a piece of equipment. Built to\
                               carry its user all the way across No Man's Land\
                               Intimidating and beautiful.",
                               lore="Engraved with the Tree of Gondor.",
                               quantity=10, category_id=2)

    """ARMOR"""
    leather_armor = Product(title="Leather Armor",
                            image="http://4.bp.blogspot.com/-BHt4NyluE7g/\
                            U_JGVd00e4I/AAAAAAAACVw/zAWll-olyK0/s1600/\
                            Aerthain_Swan.png", price=150, description="Light,\
                            durable, and slightly\
                            flame-retardant.", lore="Made from cow.\
                            Depending on the company you keep, can be \
                                multifunctional.",
                            quantity=829, category_id=3)
    orc_armor = Product(title="Orc Armor", image="https://wow.zamimg.com/\
                        uploads/screenshots/normal/761325-savage-warrior.jpg",
                        price=200, description="A\
                        patchwork of trophies woven into something somewhat \
                        like armor.",
                        lore="Don't look too close.", quantity=317,
                        category_id=3)
    full_plate_armor = Product(title="Full Plate Armor",
                               image="https://1.bp.blogspot.com/-ZLAkWVbFLo8/\
                               XneqlU_E98I/AAAAAAAAFlg/ZNiD7740PVQJY_gN-\
                               JmmRS6SRyyCAl7JQCLcBGAsYHQ/s1600/\
                               Nathrien_Anniversary%2528s%2529.png ",
                               price=2000, description="You won't go anywhere\
                               fast in this, and you won't sneak up on anyone.\
                               Also, takes a while to get off but it'll keep\
                               your head on.", lore="Imbued with mithril\
                               filigree.", quantity=10, category_id=3)

    """FOOD AND DRINK"""
    lembas_bread = Product(title="Lembas Bread", image="https://cdn.mos.cms.\
                           futurecdn.net/rX8mEDef3UR4WNKdg3kTFW-1200-80.jpg",
                           price=15,
                           description="A bite will satisfy a man a day.",
                           lore="", quantity=42, category_id=4)
    legolas_lager = Product(title="Legolas Lager", image="https://wow.zamimg.\
                            com/uploads/screenshots/normal/58201-brewfest-pony-\
                            keg.jpg", price=5,
                            description="It won't give you the eyes of an elf,\
                            but it'll make you feel like you shoot like one.",
                            lore="It's been said Legolas drank a cask and felt\
                            a tingle.", quantity=6, category_id=4)
    gollum_grog = Product(title="Gollum Grog", image="https://wow.zamimg.com/\
                          uploads/screenshots/small/64740.jpg", price=2000,
                          description="Everyone looks good after ten, my\
                          precious. A real loincloth-dropper.", lore="Strong\
                          enough to bring Deagol back.", quantity=10,
                          category_id=4)
    potatoes = Product(title="Potatoes", image="https://images.unsplash.com/\
                       photo-1533384159656-84b8ae5ce5e3?ixlib=rb-1.2.1&ixid=\
                       MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=\
                       crop&w=934&q=80", price=2000,
                       description="Boil 'em, mash 'em, stick 'em in stew.",
                       lore="Boil 'em, mash 'em, stick 'em in stew.",
                       quantity=100, category_id=4)
    apple = Product(title="apple", image="https://4.bp.blogspot.com/-\
                    k2mjuRD0jYs/WrLr_OUCP9I/AAAAAAAADXI/\
                    D4xpVmsrL4gGnBrlc559w2wPEbdvsJxqgCLcBGAs/s1600/\
                    Satella_Picnic_Ver2.png", price=10, description="uh apple",
                    lore="This apple is menacing", quantity=1,
                    category_id=4)

    """HORSES"""
    """MAGIC"""
    """UNIQUE ITEMS"""

    db.session.add(short_sword)
    db.session.add(long_sword)
    db.session.add(broad_sword)
    db.session.add(dagger)
    db.session.add(elven_dagger)
    db.session.add(hook_sword)
    db.session.add(falchion)
    db.session.add(dull_axe)
    db.session.add(huntsmans_axe)
    db.session.add(obsidian_axe)
    db.session.add(dwarven_axe)
    db.session.add(long_bow)
    db.session.add(short_bow)
    db.session.add(elven_bow)
    db.session.add(wooden_club)
    db.session.add(flanged_mace)
    db.session.add(stone_club)
    db.session.add(night_club)
    db.session.add(wooden_shield)
    db.session.add(aspi)
    db.session.add(gondorian_shield)
    db.session.add(leather_armor)
    db.session.add(orc_armor)
    db.session.add(full_plate_armor)
    db.session.add(lembas_bread)
    db.session.add(legolas_lager)
    db.session.add(gollum_grog)
    db.session.add(potatoes)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
