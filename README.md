# Project2

## Proposal Google Doc
For the time being see proposal doc -
https://docs.google.com/document/d/1mLOU8C87V4_bWTs-eqrpyNpZDkMEsH-7PAyjc5GbHdM/edit?usp=sharinghttps://docs.google.com/document/d/1mLOU8C87V4_bWTs-eqrpyNpZDkMEsH-7PAyjc5GbHdM/edit?usp=sharing

## CONTRIBUTORS:
* Swobabika Jena
* Diana Madonko
* Thomas Maina 
* Jason Sutton

## Status
Under construction

## Set Up Environment
* conda create -n project2 python=3.6
* conda activate project2
* pip install gunicorn
* pip install flask
* pip install flask-sqlalchemy
* pip intall simplejson

**Do not need at the moment**
* pip install psycopg2
* pip install pandas
* 

## Navigating the repository
* app.py
* config.py
* models.py

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
            * appwordcloud.js
            
        * Directory: templates
            * index.html
                
        * Directory: placeholder_images
        * Directory: Working documents

## Order for running flask with database on local server

### Step 1 - Establishing local database
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
* **Click:** a company button to show visualisation for relevent data

## Final Output
* Insert screen shot


## Technologies

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
https://www.w3schools.com/sql/sql_datatypes.asp

**Entity Relationship Diagram**
https://app.quickdatabasediagrams.com/#/d/hPcTGE

**PLOTLY ideas and instructions**
https://towardsdatascience.com/visualization-with-plotly-express-comprehensive-guide-eb5ee4b50b57

https://www.datacamp.com/community/tutorials/wordcloud-python
