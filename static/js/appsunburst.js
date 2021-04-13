// function sunplot() {

//   var url = '/apple'

//   d3.json(url).then(function(data) {

//     // console.log(data);

//     var labels = [];
  
//     for (var i = 0; i < data.length; i++) {
//       // console.log(data[i].ticker_symbol);

//       //Adding unique ticker to labels
//       var currentticker = data[i].ticker_symbol;
//       // console.log(currentWord)
      
//       if(labels.indexOf(currentticker) == -1){
//         labels.push(currentticker);
//       //   console.log("Value exists!")
//       }
//       // else {
//       //   labels.push(currentticker);
//       // }



//       //Adding unique writer to labels
//       var currentwriter = data[i].writer;
//       // console.log(currentWord)
      
//       if (labels.indexOf(currentwriter) == -1){
//         labels.push(currentwriter);
//       //   console.log("Value exists!")
//       }
//     }




//     var parents = [""];
//     var holding = [];

//     for (var i = 0; i < data.length; i++) {
//       var currentparent = data[i].ticker_symbol;
//       var currentchild = data[i].writer;

//       if (holding.indexOf(currentchild) == -1){
//         holding.push(currentchild);
//         parents.push(currentparent);
//       }

//     }
//     console.log("label", labels)
//     // console.log("holding", holding)
//     console.log("parents", parents)
    
    
    
//     // writer0 = 0
//     // writer1 = 0
//     // writer2 = 0
//     // writer3 = 0
//     // writer4 = 0
//     var values = [0]

//     for (var i = 0; i < holding.length; i++) {
//       // console.log(holding[i])
//       sum = 0
//       for (var j = 0; j < data.length; j++) {
        
//         currentreactiontotal = data[j].reaction_total;
//         // console.log(currentreactiontotal)
//         writercurrent = data[j].writer;
//         // console.log(i, writercurrent)
        
//         if (holding[i] == writercurrent){
//           // console.log(writer[i])
//           sum += currentreactiontotal;
//           // console.log(holding[i], "is equals");
//         } 
//         // else {
//         //   console.log("Not equals");
//         // }

//       }
//       values.push(sum);

//     }


//     console.log("values", values)
//     // console.log("writer", writer1)
//     // console.log("writer", writer2)
//     // console.log("writer", writer3)
//     // console.log("writer", writer4)


    
    
//     var data = [{
//       type: "sunburst",
//       labels: labels,
//       parents: parents,
//       values:  values,
//       outsidetextfont: {size: 20, color: "#377eb8"},
//       leaf: {opacity: 0.4},
//       marker: {line: {width: 2}},
//     }];

//     var layout = {
//       margin: {l: 0, r: 0, b: 0, t: 0},
//       width: 500,
//       height: 500
//     };


//     Plotly.newPlot('sunburstplot', data, layout);


//   });

// }
// sunplot();
////////////////////////////////
  

  

    // var ticker = data.map(data => data.ticker_symbol);
    // console.log("ticker", ticker);

  

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





//






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



function sunplot() {

  var url = '/fulldata'

  d3.json(url).then(function(data) {

    // console.log(data);

    tickerarray = [];
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].ticker_symbol);

    //   //Adding unique ticker to labels
      var currenttickervalue = data[i].ticker_symbol;
      // console.log(currentticker)
      
      if(tickerarray.indexOf(currenttickervalue) == -1){
        tickerarray.push(currenttickervalue);
    //   //   console.log("Value exists!")
    //   }
    //   // else {
    //   //   labels.push(currentticker);
      }
    }
    
    
    var labels = [];
  
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].ticker_symbol);

    //   //Adding unique ticker to labels
      var currentticker = data[i].ticker_symbol;
      // console.log(currentticker)
      
      if(labels.indexOf(currentticker) == -1){
        labels.push(currentticker);
    //   //   console.log("Value exists!")
    //   }
    //   // else {
    //   //   labels.push(currentticker);
      }
    }

    
////////////////////////
    for (var j = 0; j < tickerarray.length; j++) {
      // console.log(tickerarray[j]);
      holdingarray = []
      for (var i = 0; i < data.length; i++) {
        if (tickerarray[j] == data[i].ticker_symbol) {

        var currentwriter = data[i].writer;
        // console.log(currentwriter)
        }
        
        if (holdingarray.indexOf(currentwriter) == -1){
          holdingarray.push(currentwriter);
        // //   console.log("Value exists!")
        }
      }
      console.log(tickerarray[j], "holdingarray", holdingarray)
      for (var k = 0; k < holdingarray.length; k++) {
        labels.push(holdingarray[k])
      }

    }




    var parents = [""];
    var holding = [];

    for (var i = 0; i < data.length; i++) {
      var currentparent = data[i].ticker_symbol;
      var currentchild = data[i].writer;

      if (holding.indexOf(currentchild) == -1){
        holding.push(currentchild);
        parents.push(currentparent);
      }

    }
    console.log("tickerarray", tickerarray)
    console.log("label", labels)
    // console.log("holding", holding)
    // console.log("parents", parents)
    
    
    
    // // writer0 = 0
    // // writer1 = 0
    // // writer2 = 0
    // // writer3 = 0
    // // writer4 = 0
    // var values = [0]

    // for (var i = 0; i < holding.length; i++) {
    //   // console.log(holding[i])
    //   sum = 0
    //   for (var j = 0; j < data.length; j++) {
        
    //     currentreactiontotal = data[j].reaction_total;
    //     // console.log(currentreactiontotal)
    //     writercurrent = data[j].writer;
    //     // console.log(i, writercurrent)
        
    //     if (holding[i] == writercurrent){
    //       // console.log(writer[i])
    //       sum += currentreactiontotal;
    //       // console.log(holding[i], "is equals");
    //     } 
    //     // else {
    //     //   console.log("Not equals");
    //     // }

    //   }
    //   values.push(sum);

    // }


    // console.log("values", values)
    // // console.log("writer", writer1)
    // // console.log("writer", writer2)
    // // console.log("writer", writer3)
    // // console.log("writer", writer4)


    
    
    // var data = [{
    //   type: "sunburst",
    //   labels: labels,
    //   parents: parents,
    //   values:  values,
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


  });

}
sunplot();