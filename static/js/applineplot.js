function lineplot() {

  var url = '/AAPL'

  d3.json(url).then(function(data) {
    var Xaxis = [];
    for (var i = 0; i < data.length; i++) {
      var currentdate = data[i].post_date;
      if(Xaxis.indexOf(currentdate) == -1){
        Xaxis.push(currentdate);
      }
    }
    var likeslist = []
    var commentslist = []
    var retweetslist =[]

    for (var i = 0; i < Xaxis.length; i++) {
      // console.log(Xaxis[i])
      sumlikes = 0
      sumcomments = 0
      sumretweets = 0
//         //This uses the value in XAxis list to look through the full data and to find all rows with matching dates
      for (var j = 0; j < data.length; j++) {
//           //grab each value in turn from the reaction_total column (or change to other column)
        currentlikes = data[j].like_num;
        currentcomments = data[j].comment_num;
        currentretweets = data[j].retweet_num;
        // console.log(currentlikes)
//           //grab each value in turn from the relevant column (ie you would use date column)
        datecurrent = data[j].post_date;
        // console.log(i, datecurrent)
//           //So if the first item in your list of XAxis (ie the date) = the current date selected in this loop
        if (Xaxis[i] == datecurrent){
//             // console.log(writer[i])
//             //Add the current value to the sum variable = so you get a running tally for that date
          sumlikes += currentlikes;
          sumcomments += currentcomments;
          sumretweets += currentretweets;
//             // console.log(holding[i], “is equals”);
        }
      }
      likeslist.push(sumlikes);
      commentslist.push(sumcomments);
      retweetslist.push(sumretweets);

    }
    console.log(Xaxis);
    console.log(likeslist);
    console.log(commentslist);
    console.log(retweetslist);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Total Comments",
      x: Xaxis,
      y: commentslist,
      line: {
          color: "#17BECF"
        }

  }

  var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Total Retweets",
      x: Xaxis,
      y: retweetslist,
      line: {
        color: "#1F77B4"
      }
  }


  var trace3 = {
      type: "scatter",
      mode: "lines",
      name: "Total Likes",
      x: Xaxis,
      y: likeslist,
      line: {
        color: "#FF7F0E"
      }
    };


  var data = [trace1, trace2, trace3];

  var layout = {
      title: "May Twitter Activity",
      xaxis: {
          autorange: true,
          type: "date",
          title: 'May 2019 Daily Activity'
        },
        yaxis: {
          autorange: true,
          type: "linear",
          title:"Total Likes,Comments & Retweets"
        },
        showlegend: false
  };

Plotly.newPlot("lineplot", data, layout);

})
}

lineplot()

///////////////////////////////////
// DO WE NEED TO DO A LISTENING EVENT
//Drop box manually created on html

//Reference the input field id
var form = d3.select("#selDataset")

// Create event handlers for clicking the button or pressing the enter key
form.on("change",runEnter);


////////////////////////////////////////////////////
//Collect drop down value
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#selDataset");
  var inputValue = inputElement.property("value");
  console.log(` DIANA Filter: ${inputValue}`);
  console.log('--------')

  //Run function to update sunburst
  updatelineplot(inputValue);

} 
function updatelineplot(indexnumber) {
  console.log("diana",indexnumber);

  var url = `/${indexnumber}`

  d3.json(url).then(function(data) {
    var Xaxis = [];
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      var currentdate = data[i].post_date;
      // console.log(currentdate)
      if(Xaxis.indexOf(currentdate) == -1){
        Xaxis.push(currentdate);
      }
    } 
    var likeslist = []
    var commentslist = []
    var retweetslist =[]

    for (var i = 0; i < Xaxis.length; i++) {
      // console.log(Xaxis[i])
      sumlikes = 0
      sumcomments = 0
      sumretweets = 0
      
      //This uses the value in XAxis list to look through the full data and to find all rows with matching dates
      for (var j = 0; j < data.length; j++) {
        //grab each value in turn from the reaction_total column (or change to other column)
        currentlikes = data[j].like_num;
        currentcomments = data[j].comment_num;
        currentretweets = data[j].retweet_num;
        // console.log(currentlikes);
        // console.log(currentcomments);
        // console.log(currentretweets);

        //grab each value in turn from the relevant column (ie you would use date column)
        datecurrent = data[j].post_date;
        // console.log(i, datecurrent)
        
        //So if the first item in your list of XAxis (ie the date) = the current date selected in this loop
        if (Xaxis[i] == datecurrent){
            // console.log(datecurrent[i])
            //Add the current value to the sum variable = so you get a running tally for that date
          sumlikes += currentlikes;
          sumcomments += currentcomments;
          sumretweets += currentretweets;
          // console.log(sumretweets);
        }
      }
      likeslist.push(sumlikes);
      commentslist.push(sumcomments);
      retweetslist.push(sumretweets);

    }
    console.log(Xaxis);
    console.log(likeslist);
    console.log(commentslist);
    console.log(retweetslist);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Total Comments",
      x: Xaxis,
      y: commentslist,
      line: {
        color: "#17BECF"
          }

    }

  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: "Total Retweets",
    x: Xaxis,
    y: retweetslist,
    line: {
      color: "#1F77B4"
    }
  }


  var trace3 = {
      type: "scatter",
      mode: "lines",
      name: "Total Likes",
      x: Xaxis,
      y: likeslist,
      line: {
        color: "#FF7F0E"
      }
    };


  var data = [trace1, trace2, trace3];
  console.log(data)

  var layout = {
      title: "May Twitter Activity",
      xaxis: {
          autorange: true,
          type: "date",
          title: 'May 2019 Daily Activity',
        },
        yaxis: {
          autorange: true,
          type: "linear",
          title:"Total Likes,Comments & Retweets"
        },
        showlegend: false
  }

  Plotly.newPlot("lineplot", data, layout);

});
}
// function updatelineplot(indexnumber) {
//   console.log("diana",indexnumber);

//   var url = `/${indexnumber}`

//   d3.json(url).then(function(data) {
//     var Xaxis = [];
//     // console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       var currentdate = data[i].post_date;
//       // console.log(currentdate)
//       if(Xaxis.indexOf(currentdate) == -1){
//         Xaxis.push(currentdate);
//       }
//     } 
//     var likeslist = []
//     var commentslist = []
//     var retweetslist =[]

//     for (var i = 0; i < Xaxis.length; i++) {
//       // console.log(Xaxis[i])
//       sumlikes = 0
//       sumcomments = 0
//       sumretweets = 0
      
//       //This uses the value in XAxis list to look through the full data and to find all rows with matching dates
//       for (var j = 0; j < data.length; j++) {
//         //grab each value in turn from the reaction_total column (or change to other column)
//         currentlikes = data[j].like_num;
//         currentcomments = data[j].comment_num;
//         currentretweets = data[j].retweet_num;
//         // console.log(currentlikes);
//         // console.log(currentcomments);
//         // console.log(currentretweets);

//         //grab each value in turn from the relevant column (ie you would use date column)
//         datecurrent = data[j].post_date;
//         // console.log(i, datecurrent)
        
//         //So if the first item in your list of XAxis (ie the date) = the current date selected in this loop
//         if (Xaxis[i] == datecurrent){
//             // console.log(datecurrent[i])
//             //Add the current value to the sum variable = so you get a running tally for that date
//           sumlikes += currentlikes;
//           sumcomments += currentcomments;
//           sumretweets += currentretweets;
//           // console.log(sumretweets);
//         }
//       }
//       likeslist.push(sumlikes);
//       commentslist.push(sumcomments);
//       retweetslist.push(sumretweets);

//     }
//     console.log(Xaxis);
//     console.log(likeslist);
//     console.log(commentslist);
//     console.log(retweetslist);

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: "comments data",
//       x: Xaxis,
//       y: commentslist,
//       line: {
//         color: "#17BECF"
//           }

//     }

//   var trace2 = {
//     type: "scatter",
//     mode: "lines",
//     name: "retweets data",
//     x: Xaxis,
//     y: retweetslist,
//     line: {
//       color: "#1F77B4"
//     }
//   }


//   var trace3 = {
//       type: "scatter",
//       mode: "lines",
//       name: "likes data",
//       x: Xaxis,
//       y: likeslist,
//       line: {
//         color: "#FF7F0E"
//       }
//     };


//   var data = [trace1, trace2, trace3];
//   console.log(data)

//   var layout = {
//       title: "May Twitter Activity",
//       xaxis: {
//           autorange: true,
//           type: "date"
//         },
//         yaxis: {
//           autorange: true,
//           type: "linear"
//         },
//         showlegend: false
//   }

//   Plotly.newPlot("lineplot", data, layout);

// });
// }

