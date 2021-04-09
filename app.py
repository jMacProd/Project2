#################################################
# import necessary libraries
#################################################

# Not sure I need this. Models/py creates a class that builds a table
    # but we will provide table
# from models import create_classes

import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

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
# from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# # Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# Pet = create_classes(db)

#################################################
# create route that renders index.html template
#################################################

@app.route('/')
def home():
    return render_template("index.html")



#################################################
# End
#################################################1
if __name__ == "__main__":
    app.run(debug=True)