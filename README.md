# Project2

## Proposal Google Doc
For the time being see proposal doc -
https://docs.google.com/document/d/1mLOU8C87V4_bWTs-eqrpyNpZDkMEsH-7PAyjc5GbHdM/edit?usp=sharinghttps://docs.google.com/document/d/1mLOU8C87V4_bWTs-eqrpyNpZDkMEsH-7PAyjc5GbHdM/edit?usp=sharing

## CONTRIBUTORS:
Swobabika Jena
Diana Madonko
Thomas ? 
Jason Sutton

## Status
Under construction

## Navigating the repository
* File: app.py

    * Directory: Data
        * top5writers_May.csv
    
    * Directory: static
    
        * Directory: css
            * style.css
            
        * Directory: js
            * appbubbleplot.js
            * applineplot.js
            * appsunburst.js
            * apptoptweet.js
            * appwordcloud.js
            
        * Directory: placeholder_images
            * bubbleplot.png
            * lineplot.png
            * sunburst.png
            * wordcloud.png
            
        * Directory: templates
            * index.html
                
        * Directory: Working documents

## Running order and notes
### Step 1 - Launching html page

**Run: app.py**
* From Terminal in it's own environment - need to work this out
* Visit http://127.0.0.1:5000/ in web browser

## Final Output
* Insert screen shot


## Technologies



## Entity Relationship Diagram
![Entity Relationship Diagram](https://github.com/jMacProd/javascript-challenge/blob/main/Process%20Maps/UFO_Dynamic_Table_Webpage_Part1.png)


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
