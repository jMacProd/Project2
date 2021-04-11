#################################################
# import necessary libraries
#################################################

# Not sure I need this. Models/py creates a class that builds a table
    # but we will provide table
# from models import create_classes

import os
from sqlalchemy.sql import select, column, text
from sqlalchemy.sql.expression import func
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
#Ryan's project has this also
from models import create_classes
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import create_engine
import 

#cofig.py file used to store user and password details. File not tracked to github
from config import user, password

engine = create_engine(f'postgresql://{user}:{password}@localhost:5432/EmployeeSQL')

#allows us to create a panda database
connection = engine.connect()

#################################################
# Flask Setup
#################################################
#https://flask-pymongo.readthedocs.io/en/latest/

app = Flask(__name__)

#################################################
# Database Setup
#################################################

    #Mongo Example from web-scraping challenge
    # #example:app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
    #     # the last bit of the uri link creates the database I think
    # app.config["MONGO_URI"] = 'mongodb://localhost:27017/marsDB'
    # mongo = PyMongo(app)

    # # Declare the collection
    # marscollection = mongo.db.marscollection

#SQLAlchemy - from Pet Pals example - no idea what it is doing

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Pet = create_classes(db)
# AvatarHistory = create_classes(db)
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
def appledata():

    # #Get all data about Apple
    # results = db.sessions.query(
    #     twitterposts.company_name,
    #     # twitterposts.tweet_id,
    #     twitterposts.writer,
    #     # twitterposts.post_date
    #     # twitterposts.body
    #     twitterposts.comment_num,
    #     twitterposts.retweet_num,
    #     twitterposts.like_num
    #     # twitterposts.reaction_total
    # ).filter(twitterposts.company_name == "apple").all()

    results = db.sessions.query(
        twitterposts.company_name).all()



    applesunburstlist = []
    for company_name in results:
        applesunburst_dict= {}
        applesunburst_dict["company_name"] = company_name
        # applesunburst_dict["writer"] = writer
        # applesunburst_dict["comment_num"] = comment_num
        # applesunburst_dict["retweet_num"] = retweet_num
        # applesunburst_dict["like_num"] = like_num
        applesunburstlist.append(applesunburst_dict)

    return jsonify(applesunburstlist)





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