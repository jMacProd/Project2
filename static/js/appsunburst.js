function sunplot() {

  var url = '/apple'

  d3.json(url).then(function(data) {

    console.log(data);

    var wordFrequency = [];
  
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].ticker_symbol);

      var currentWord = data[i].ticker_symbol;

      currentWord.indexOf(wordFrequency) === -1 ? array.push(wordFrequency) : console.log("This item already exists");
      // console.log(array)

    //   if (currentWord in wordFrequency) {
    //     console.log("Word already exist");
    //   }
    //   else {
    //     wordFrequency.push(currentWord);
    //   };
    // console.log(wordFrequency)
           


// If the word has been seen before...
      // if (currentWord in wordFrequency) {
      //   // Add one to the counter
      //   console.log("Word already exist");
      // }
      // else {
      //   // Set the counter at 1
      //   wordFrequency.push[currentWord];



    }
    

    
    
  

  });

}
sunplot();
////////////////////////////////
  

  

    // var ticker = data.map(data => data.ticker_symbol);
    // console.log("ticker", ticker);

  
  
  
  ////////////////////
    // var wordFrequency = {};
  
    // Iterate through the array
    // for (var i = 0; i < data.length; i++) {
    //   console.log(data.ticker_symbol[i]);
    //   console.log(data.ticker_symbol[i]);
      // var currentWord = data.ticker_symbol[i];
      // If the word has been seen before...
      // if (currentWord in wordFrequency) {
      //   // Add one to the counter
      //   console.log("Word already exist");
      // }
      // else {
      //   // Set the counter at 1
      //   wordFrequency.push[currentWord];
      // }
    // }
    // console.log(wordFrequency);
    // return wordFrequency;
  
  
  // });


// };

// sunplot();



//     var trace1 = {
//         labels: ["beer", "wine", "martini", "margarita",
//           "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//         labels: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//         type: "pie"
//       };
      
//       var data = [trace1];
      
//       var layout = {
//         title: "'Pie' Chart"
//       };
      
//       Plotly.newPlot("sunburstplot", data, layout);

// };

  // var url = '/apple'
  // d3.json(url).then(function(data) {
  //   // console.log("Full Data");
  //   // console.log(data);
  //   // console.log(data[0].writer);

  //   var applelist = data;
  //   console.log(applelist);
    
  //   var applewriterlist = [];
  //   var applelikeslist = []; 

    
    




  // });

  

 

  
// };

// sunplot();

// anychart.onDocumentReady(function () {
//   anychart.data.loadJsonFile('https://gist.githubusercontent.com/shacheeswadia/3bbe6eb041166e259f1712e6766fa5a2/raw/341d2796dd63e6e6defc1ec52dd4e73c7828c38c/sunburstDataUpdated.json',
//     function (data) {

//       console.log(data)
  
//       // create a data tree from the dataset
//       var dataTree = anychart.data.tree(data);
      
//       // create a sunburst chart
//       var chart = anychart.sunburst(dataTree);
  
//       // set the calculation mode
//       chart.calculationMode('parent-independent');
  
//       // set the ascending sort order
//       chart.sort('asc');
  
//       // set the chart title
//       chart.title("COVID-19 Cases Across the World");
    
//       // set the chart container element id
//       chart.container('sunburstplot');
  
//       // initiate chart drawing
//       chart.draw();
    
//     });
//   });




// var data = [{
//   type: "sunburst",
//   labels: ["AAPL", "gerberkawasaki", "markbspiegel", "pluginfud"],
//   parents: ["", "AAPL", "AAPL", "AAPL"],
//   values:  [0 , 777, 21, 20],
//   outsidetextfont: {size: 20, color: "#377eb8"},
//   leaf: {opacity: 0.4},
//   marker: {line: {width: 2}},
// }];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t: 0},
//   width: 500,
//   height: 500
// };


// Plotly.newPlot('sunburstplot', data, layout);

// var url = '/apple'

// d3.json(url).then(function(data) {
  // var ticker = data.map(data => data.ticker_symbol);
  // console.log("ticker", ticker);

  // for (var i = 0; i < stringArray.length; i++) {
  //   var currentWord = stringArray[i];
  //   if (currentWord in wordFrequency) {



// ////////////////////
//   var wordFrequency = {};

//   // Iterate through the array
//   // for (var i = 0; i < data.length; i++) {
//   //   console.log(data.ticker_symbol[i]);
//   //   console.log(data.ticker_symbol[i]);
//     // var currentWord = data.ticker_symbol[i];
//     // If the word has been seen before...
//     // if (currentWord in wordFrequency) {
//     //   // Add one to the counter
//     //   console.log("Word already exist");
//     // }
//     // else {
//     //   // Set the counter at 1
//     //   wordFrequency.push[currentWord];
//     // }
//   }
//   // console.log(wordFrequency);
//   // return wordFrequency;


// });
//////////////////






// d3.json(url).then(function(data) {
// var data = [{
//   type: "sunburst",
//   labels = ["AAPL", "gerberkawasaki", "markbspiegel", "pluginfud"],
//   parents = ["", "AAPL", "AAPL", "AAPL"],
//   values = [100 , 777, 21, 20],
//   outsidetextfont: {size: 20, color: "#377eb8"},
//   leaf: {opacity: 0.4},
//   marker: {line: {width: 2}},
//   }];

//   var layout = {
//     margin: {l: 0, r: 0, b: 0, t: 0},
//     width: 500,
//     height: 500
//   };
  
  
//   Plotly.newPlot('sunburstplot', data, layout);
  
// // });

