import os
from sqlalchemy import create_engine, Table, Column, Float, Integer, String, MetaData
# from app import db

# # db.drop_all()
# db.create_all()

meta = MetaData()

connection = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

print("connection to databse")
engine = create_engine(connection)

if not engine.has_table("pets"):
    print("Creating Table")

    new_table = Table(
        'topwritersmay', meta,
        Column('ticker_symbol', String),
        Column('company_name', String),
        Column('tweet_id', String, primary_key=True),
        Column('writer', String),
        Column('post_date', String),
        Column('body', String),
        Column('comment_num', Integer),
        Column('retweet_num', Integer),
        Column('like_num', Integer),
        Column('reaction_total', Integer),
    )

    meta.create_all(engine)

    print("Table created")

    seed_data = [
        {"ticker_symbol": "AAPL", "company_name": "apple", "tweet_id": "1123390000000000000", "writer": "gerberkawasaki", "post_date": "1/5/2019", "body": "thoughts on apple and innovation", "comment_num": 5, "retweet_num": 4, "like_num": 18, "reaction_total": 27}, 
    ]

    with engine.connect() as conn:
        conn.execute(new_table.insert(), seed_data)

    print("Seed Data Imported")
else:
    print("Table already exists")
print("initdb complete")
