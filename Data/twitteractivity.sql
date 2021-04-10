-- Drop table if exists
DROP TABLE topwritersmay;

CREATE TABLE topwritersmay (
	ticker_symbol VARCHAR,
	company_name VARCHAR,
	tweet_id VARCHAR,
	writer VARCHAR,
	post_date VARCHAR,
	body VARCHAR,
	comment_num INT,
	retweet_num INT,
	like_num INT,
	reaction_total INT
);

SELECT * FROM topwritersmay;

--Checking data loaded
SELECT * FROM topwritersmay;