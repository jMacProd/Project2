-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/hPcTGE
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Company" (
    "ticker_symbol" VARCHAR(5)   NOT NULL,
    "company_name" VARCHAR(30)   NOT NULL,
    CONSTRAINT "pk_Company" PRIMARY KEY (
        "ticker_symbol","company_name"
     )
);

CREATE TABLE "Conpany_Tweet" (
    "tweet_id" INT(30)   NOT NULL,
    "ticker_symbol" VARCHAR(5)   NOT NULL,
    CONSTRAINT "pk_Conpany_Tweet" PRIMARY KEY (
        "tweet_id"
     )
);

CREATE TABLE "Tweet" (
    "tweet_id" INT(30)   NOT NULL,
    "writer" VARCHAR(30)   NOT NULL,
    "post_date" DATE   NOT NULL,
    "body" VARCHAR(300)   NOT NULL,
    "comment_num" INT(5)   NOT NULL,
    "retweet_num" INT(5)   NOT NULL,
    "like_num" INT(5)   NOT NULL
);

ALTER TABLE "Conpany_Tweet" ADD CONSTRAINT "fk_Conpany_Tweet_ticker_symbol" FOREIGN KEY("ticker_symbol")
REFERENCES "Company" ("ticker_symbol");

ALTER TABLE "Tweet" ADD CONSTRAINT "fk_Tweet_tweet_id" FOREIGN KEY("tweet_id")
REFERENCES "Conpany_Tweet" ("tweet_id");

