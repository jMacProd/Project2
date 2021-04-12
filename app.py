import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from sqlalchemy import create_engine

from flask import Response,json

from flask import Flask, jsonify

from flask import Flask, render_template

#################################################
# Database Setup
#################################################
engine = create_engine("postgres://kthtpzlsmlklig:4078440dd259b1618e3607054fff276bd4ec0f2a4e2bbe25b310087db53f2752@ec2-3-233-43-103.compute-1.amazonaws.com:5432/dbnbctndv895hi")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table

results = engine.execute("SELECT  * FROM topwritersmay").fetchall()




#################################################
# import necessary libraries
#################################################

#From Pet Pals example
from models import create_classes
import os
from flask import (
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy

#From Ryan's example
from sqlalchemy.sql import select, column, text
from sqlalchemy.sql.expression import func
import simplejson


#From SQL Challenge - read postgres database into jupyter notebook
# import pandas as pd
# from sqlalchemy import create_engine
# import psycopg2
#cofig.py file used to store user and password details. File not tracked to github
from config import user, password

#From Sqlalchemy challenge - read sqlite database into Flask app
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func



#################################################
# Flask Setup
#################################################
#https://flask-pymongo.readthedocs.io/en/latest/

app = Flask(__name__)

#################################################
# Database Setup - From SQL_Challenge
#################################################

# engine = create_engine(f'postgresql://{user}:{password}@localhost:5432/twitteractivity')

# #allows us to create a panda database
# connection = engine.connect()

# tweetdataframe = pd.read_sql("select * from \"topwritersmay\"", connection);

#############
# # From Sqlalchemy challenge
# Base = automap_base()
# #reflect the tables
# Base.prepare(engine, reflect=True)

# #Save reference to the table
# twittertable = Base.classes.twitteractivity

# #################################################
# # Database Setup - as per Pet Pals
# #################################################


# #SQLAlchemy - from Pet Pals example - no idea what it is doing

# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
#     'DATABASE_URL', '') or "sqlite:///db.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{user}:{password}@localhost:5432/twitteractivity'
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{user}:{password}@localhost:5432/twitteractivity'

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
# create apple route that calls data on apple?
#################################################

@app.route("/apple")
def apple():

    # return (
    #     "<h2>You have clicked the Apple button</h2>"
    # )

    #Get all data about Apple
    results = db.session.query(
        twitterposts.company_name,
        twitterposts.tweet_id,
        twitterposts.writer,
        twitterposts.post_date,
        twitterposts.body,
        twitterposts.comment_num,
        twitterposts.retweet_num,
        twitterposts.like_num,
        twitterposts.reaction_total
    ).all()
#       .filter(twitterposts.company_name == "apple").all()
    return jsonify(results)

    # return simplejson.dumps(results)

    # company = [results[0] for result in results]
    # writer = [results[2] for result in results]
    # comments = [results[5] for result in results]
    # retweets = [results[6] for result in results]
    # likes = [results[7] for result in results]

    # applesunburstlist = [{
    #     "company":company_name,
    #     # "writer":writer,
    #     # "comments":comments,
    #     # "retweets":retweets,
    #     # "likes":likes,
    # }]

    # applesunburstlist = []
    # # for company in results:

    # for company in results:
    #     applesunburst_dict= {}
    #     applesunburst_dict["company"] = company_name
        
    #     applesunburstlist.append(applesunburst_dict)


    
    # return jsonify(applesunburstlist)
#     results = db.sessions.query(
#         twitterposts.company_name).all()

    # company = [results]
    
    # twitter_results = {(
    #     "company": 
    # )}

    #THIS ONE WOKS - SORT OF
#     applesunburstlist = []
#     for company_name  in results:
#         applesunburst_dict= {}
#         applesunburst_dict["company_name"] = company_name
#         # applesunburst_dict["writer"] = tweet_id
# #         # applesunburst_dict["comment_num"] = comment_num
# #         # applesunburst_dict["retweet_num"] = retweet_num
# #         # applesunburst_dict["like_num"] = like_num
#         applesunburstlist.append(applesunburst_dict)
#     # return ("<h2>added key, values into dict</h>")
    # return jsonify(applesunburstlist)





# @app.route("/api/pals")
# def pals():
#     results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

#     hover_text = [result[0] for result in results]
#     lat = [result[1] for result in results]
#     lon = [result[2] for result in results]

#     pet_data = [{
#         "type": "scattergeo",
#         "locationmode": "USA-states",
#         "lat": lat,
#         "lon": lon,
#         "text": hover_text,
#         "hoverinfo": "text",
#         "marker": {
#             "size": 50,
#             "line": {
#                 "color": "rgb(8,8,8)",
#                 "width": 1
#             },
#         }
#     }]

#     return jsonify(pet_data)



#################################################
# End
#################################################1
if __name__ == "__main__":
    app.run(debug=True)