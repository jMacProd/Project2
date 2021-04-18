# Twitter Activity

Building a dashboard with multiple interactive charts to allow exploration of the Twitter activity around the top 6 NASDAQ Companies. The dashboard would provide an organisation awareness of the social media activity concerning them, or modifed to track the activity of their own tweets.

To develop the dashboard a single source of data was used covering the twitter activity for 5 writers for May 2019. It included the company being written about, the writer, date posted, body of the tweet and the likes, comments, shares and a total of these for all tweets.

The visualisations include:
* A highlight of the tweet with the most likes, shares and comments
* A Plotly line chart measuring tweat activity over time
* A non-standard D3.js bubble chart indicating the activity around all writers and the company they are referencing
* A sunburst chart showing the top writers utilising the AnyChart JS library

Further development is out of scope of this project but it can be expanded to include a greater range of dates and writers and a potential to make use of APIs from the Twitter Developement site.  

## Link to site
The web app has been deployed via  Heroku
* https://twitteractivity.herokuapp.com/

## Contributors
* Swobabika Jena (https://github.com/SwobabikaJena)
* Diana Madonko (https://github.com/DMadonko)
* Thomas Maina (https://github.com/1418tm-data)
* Jason Sutton (https://github.com/jMacProd)

## Status
* Project is finalised

## Technologies
* Python Web Flask 
* HTML
* JavaScript
* CSS
* D3.js
* Bootstrap
* Herokuapp


## Navigating the repository
* app.py
* config.py
* initdb.py 
* models.py
* Procfile
* requirements.txt

    * Directory: Data
        * top5writers_May.csv
        * twitteractivity.sql
    
    * Directory: static
    
        * Directory: css
            * style.css
            
        * Directory: js
            * appbubbleplot.js
            * applineplot.js
            * appsunburst.js
            * apptoptweet.js
            * linechartupdate.js
            
        * Directory: templates
            * index.html
                
* Directory: Submission documents
    * Group 4 Presentation.pdf
    * Group 4- Project Proposal.pdf


## Data Source
* www.kaggle.com/omermetinn/tweets-about-the-top-companies-from-2015-to-2020?select=Tweet.csv

## Set Up Environment
A dedicated environment was established for this project. 
* conda create -n project2 python=3.6
* conda activate project2
* pip install gunicorn
* pip install flask
* pip install flask-sqlalchemy
* pip install simplejson
* pip install psycopg2

## Order for running flask app with database on local server

### Step 1 - Edit app.py to point to local database (currently points to database connected to Heruko deployment)
* Comment out **app.config[‘SQLALCHEMY_DATABASE_URI’] = os.environ.get(‘DATABASE_URL’, ‘’).replace(“://“, “ql://“, 1) or “sqlite:///db.sqlite”**
* un-comment out **app.config[‘SQLALCHEMY_DATABASE_URI’] = f’postgresql://{user}:{password}@localhost:5432/twitteractivity’**
* un-comment out **from config import user, password**
* Add own config file to route directory listing database username and password

### Step 2 - Establishing local database
* **Launch:** pgadmin
* **Open:** twitteractivity.sql and run to establish table schema
* **Import:** top5writers_May.csv

### Step 3: - Connecting flask app to local database 
* **Edit:** config.py to your pgAdmin username and password

### Step 2 - Launching html page
* **Launch:** gitbash/terminal at project route directory
* **Enter into gitbush/terminal:** conda activate project2
* **Enter into gitbush/terminal:** python app.py
* **Go to:** http://127.0.0.1:5000/ in Google Chrome

## Final Output
![Twitter Ativity Screenshot](https://raw.githubusercontent.com/jMacProd/Project2/main/Submission%20documents/TwitterActivityScreenShot.png)

## Data Mungling
* Imported three relational CSV datasets into Python
* Converted unix(?) date to standard date-time and removed time
* Filtered dataframe to include 1 year of tweets
* Merged CSVs into one dataframe
* Dropped Null values
* Converted ID, comment counts, shared counts and like counts to integers
* Convered writer and body to all lowercase
* Dropped all writers who had less that 365 tweets (ie didn't tweet every day)
* Filtered to top 200 writers as per the total sum of the likes, shares and comments of their tweets. 
* Exported to new CSV

## Resources
**SQL DATA TYPES**
* https://www.w3schools.com/sql/sql_datatypes.asp

**Entity Relationship Diagram**
* https://app.quickdatabasediagrams.com/#/d/hPcTGE

**PLOTLY ideas and instructions**
* https://towardsdatascience.com/visualization-with-plotly-express-comprehensive-guide-eb5ee4b50b57
* https://www.datacamp.com/community/tutorials/wordcloud-python
* https://plotly.com/javascript/sunburst-charts/
