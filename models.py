# # Example from Ryan's WOW avatar history
# def create_classes(db):
#     class AvatarHistory(db.Model):
#         __tablename__ = 'avatar_history'

#         id = db.Column(db.Integer, primary_key=True)
#         level = db.Column(db.Integer)        
#         guild = db.Column(db.String(64))
#         race = db.Column(db.String(64))
#         char_class = db.Column(db.String(64))
#         region = db.Column(db.String(256))

#         def __repr__(self):
#             return f'<AvatarHistory {self.id}>'

#     return AvatarHistory


# # Example from pet pals
# def create_classes(db):
#     class Pet(db.Model):
#         __tablename__ = 'pets'

#         id = db.Column(db.Integer, primary_key=True)
#         name = db.Column(db.String(64))
#         lat = db.Column(db.Float)
#         lon = db.Column(db.Float)

#         def __repr__(self):
#             return '<Pet %r>' % (self.name)
#     return Pet

#Our class
def create_classes(db):
    class twitterposts(db.Model):
        __tablename__ = 'topwritersmay'

        ticker_symbol = db.Column(db.String)
        company_name = db.Column(db.String)
        tweet_id = db.Column(db.String, primary_key=True)
        writer = db.Column(db.String)
        post_date = db.Column(db.String)
        body = db.Column(db.String)
        comment_num = db.Column(db.Integer)
        retweet_num = db.Column(db.Integer)
        like_num = db.Column(db.Integer)
        reaction_total = db.Column(db.Integer)

        def __repr__(self):
            return f'<twitterposts {self.id}>'

    return twitterposts
