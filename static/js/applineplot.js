function sunplot() {

    var url = '/apple'
  
    d3.json(url).then(function(data) {
  
        // console.log("line plot js");
        // console.log(data);

        var date = data.map(data => data.post_date);
        console.log("date", date);

        var comments = data.map(data => data.comment_num);
        console.log("comments", comments);

        var retweets = data.map(data => data.retweet_num);
        console.log("retweets", retweets);

        var likes = data.map(data => data.like_num);
        console.log("likes", likes);

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "comments data",
            x: date,
            y: comments,
            line: {
                color: "#17BECF"
              }

        }

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: "retweets data",
            x: date,
            y: retweets,
            line: {
              color: "#1F77B4"
            }
        }


        var trace3 = {
            type: "scatter",
            mode: "lines",
            name: "likes data",
            x: date,
            y: likes,
            line: {
              color: "#FF7F0E"
            }
          };


        var data = [trace1, trace2, trace3];

        var layout = {
            title: "May Twitter Activity",
            xaxis: {
                autorange: true,
                type: "date"
              },
              yaxis: {
                autorange: true,
                type: "linear"
              },
              showlegend: false
        };

        Plotly.newPlot("lineplot", data, layout);


    });
}
sunplot()
