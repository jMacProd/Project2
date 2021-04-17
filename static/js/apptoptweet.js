var selectID = d3.select("#toptweet");
var options = ["Most Liked", "Most Commented", "Most Shared"];
var tweetText = [];
var tweetData = [];
var final_tweetData;

//Prepare the data set
function topTweets() {
    var url = '/fulldata';

    d3.json(url).then((data) => {
        console.log(data);

        function getMax(arr, prop) {
            var max;
            for (var i=0 ; i<arr.length ; i++) {
                if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
                    max = arr[i];
            }
            return max;
        }

        var maxLikes = getMax(data, "like_num");
        tweetText.push(maxLikes.body);

        var maxComments = getMax(data, "comment_num");
        tweetText.push(maxComments.body);

        var maxShares = getMax(data, "retweet_num");
        tweetText.push(maxShares.body);
    
        console.log(tweetText);

        //Combine the select and data in a key-value pair
        final_tweetData =  tweetText.reduce(function(tweetData, field, index) {
            tweetData[options[index]] = field;
            return tweetData;
        },{})
        tweetData.push(final_tweetData);

        //Initialise the loading
        options.forEach((option => {
            var topic = selectID.append("option");
            topic.text(option);
        }));
        var firstSample = Object.keys(final_tweetData)[0];
        console.log(firstSample);

        //Display the initial load
        initialDisplay(firstSample);

    });
}

//First Time Display
function initialDisplay(sample) {
    var demo = d3.select("#sample-metadata");
    var selectTweet = final_tweetData[sample];
    console.log(selectTweet);
    demo.append("h6").text(`${selectTweet}`);
}

//Execute on select change to display 
function displayTweetOnChange(sample) {
    var demo = d3.select("#sample-metadata");
    demo.html("");
    var selectTweet = final_tweetData[sample];
    console.log(selectTweet);
    demo.append("h6").text(`${selectTweet}`);
}

//On selecting an option
function getval(sel) {
    console.log(sel.value);
    displayTweetOnChange(sel.value);
}

topTweets();