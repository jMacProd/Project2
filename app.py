#################################################
# import necessary libraries
#################################################

#From Pet Pals example
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy

#From Ryan's example
from sqlalchemy.sql import select, column, text
from sqlalchemy.sql.expression import func
import simplejson


#cofig.py file used when accessing data from locally hosted postgres database. Commented out for Heroku deployment. File not tracked to github
# from config import user, password

#################################################
# Flask Setup
#################################################
#https://flask-pymongo.readthedocs.io/en/latest/

app = Flask(__name__)


# #################################################
# # Database Setup - as per Pet Pals
# #################################################


# From Pet Pals example

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '').replace("://", "ql://", 1) or "sqlite:///db.sqlite"

#app code used when accessing data from locally hosted postgres database. Commented out for Heroku deployment.
# app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{user}:{password}@localhost:5432/twitteractivity'

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

twitterposts = create_classes(db)

#################################################
# create route that renders index.html template
#################################################

@app.route('/')
def home():
    return render_template("index.html")
   


#################################################
# create route that calls all data
#################################################

@app.route("/fulldata")
def fulldata():


    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).order_by(twitterposts.post_date).all()
    
    return jsonify(results)


#################################################
# create apple route that calls data on apple
#################################################

@app.route("/AAPL")
def apple():


    #Get all data about Apple
    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).filter(twitterposts.ticker_symbol == 'AAPL')\
    .order_by(twitterposts.post_date).all()

    return jsonify(results)



#################################################
# create amazon route that calls data on amazon
#################################################
@app.route("/AMZN")
def amazon():

    
    #Get all data about amazon
    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).filter(twitterposts.ticker_symbol == 'AMZN')\
    .order_by(twitterposts.post_date).all()
    
    return jsonify(results)

#################################################
# create Google Inc route that calls data on Google Inc
#################################################
@app.route("/GOOG")
def google():



    #Get all data about Google
    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).filter(twitterposts.ticker_symbol == 'GOOG')\
    .order_by(twitterposts.post_date).all()
    
    return jsonify(results)

#################################################
# create Microsoft  route that calls data on Microsoft
#################################################
@app.route("/MSFT")
def microsoft():


    #Get all data about Microsoft
    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).filter(twitterposts.ticker_symbol == 'MSFT')\
    .order_by(twitterposts.post_date).all()
    
    return jsonify(results)

#################################################
# create Tesla Inc  route that calls data on Tesla Inc
#################################################
@app.route("/TSLA")
def tesla():


    #Get all data about Tesla
    results = db.session.query(
        twitterposts.ticker_symbol,
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).filter(twitterposts.ticker_symbol == 'TSLA')\
    .order_by(twitterposts.post_date).all()
    
    return jsonify(results)




#################################################
# End
#################################################1
if __name__ == "__main__":
    app.run(debug=True)