// //////////////////////////////////
// // THE SUPER COMPLICATED ONE
function sunplot() {

    var url = '/fulldata'

    d3.json(url).then(function(data) {
        // console.log("Jason", data);

        tickerarray = [];
        var labels = [];
        // var parents = ["", "", "", "", "", "TSLA", "TSLA", "TSLA", "TSLA", "TSLA", "AAPL", "AAPL", "AAPL", "AMZN", "AMZN", "AMZN", "GOOG", "MSFT" ];
        //Ideally would create a loop to add as many empty items to the start of this list rather than manualy adding them.
        //As first 5 items in labels are the tickers, they do not have parents in the parents list.
        //But the parents for the other labels must be in the same list position as the labels
        var parents = []
        //This is the vales that manually work for live website
        values = [];

        //Setting a list of top level of sunburst hierarchy (ie the tickers)
        for (var i = 0; i < data.length; i++) {

            // console.log(data[i].ticker_symbol);

            //Adding unique ticker to labels
            var currenttickervalue = data[i].ticker_symbol;
            // console.log(currenttickervalue);

            //Colelcting a unique list of tickers to use other loops
            if(tickerarray.indexOf(currenttickervalue) == -1){

                tickerarray.push(currenttickervalue);
                parents.push("");
                values.push(0);

            }

            //Adding the unique list of tickers into the sunburst label list - the labels are a list of all unique items in the sunburst (ie tickers and writers)
            if(labels.indexOf(currenttickervalue) == -1){

                labels.push(currenttickervalue);

            }

        }

        console.log('tikerarray', tickerarray);

        //Adding the unique list of writers per ticker group to the labels list
        for (var t = 0; t < tickerarray.length; t++){

            labelholdingarray = [];
            parentholdingarray = [];
            // valueholdingarray = [];
            // valueholding = 0

            for (d = 0; d < data.length; d ++) {

                if (tickerarray[t] == data[d].ticker_symbol) {
                    var currentwriter = data[d].writer;
                    // var currentvalue = data[d].reaction_total;

                }

                 
                if (labelholdingarray.indexOf(currentwriter) == -1){
                    labelholdingarray.push(currentwriter);
                    //Also used same loop to collect the parents for writer within a ticker group.
                    parentholdingarray.push(tickerarray[t]); 
                    // valueholdingarray.push(currentvalue); 

 
                }

                
            }
            // console.log("valueholdingarray", valueholdingarray)

            //Add the collected label and parent list into their main lists.
            //Needs to be done this way so as the labels list is added, so is correct parent added in the same list position as label.
            for (var h = 0; h < labelholdingarray.length; h++) {
                sum = 0;
                labels.push(labelholdingarray[h]);
                parents.push(parentholdingarray[h]);

                // console.log(tickerarray[t], labelholdingarray[h]);

                for (var y = 0; y < data.length; y++) {
                    // console.log("data.writer", data[y].writer);
                    
                    if (tickerarray[t] == data[y].ticker_symbol && labelholdingarray[h] == data[y].writer) {
                        // console.log(tickerarray[t], ":", data[y].ticker_symbol);
                        sum += data[y].reaction_total
                    }

                    
                }
                console.log(tickerarray[t], labelholdingarray[h], sum);
                values.push(sum);
                

                   


            } 

            // ///////VALUE CODE HERE
            // for (var v = 5; v < labelholdingarray.length; v++){
            //     console.log(tickerarray[t], labels[v]);

            //  }
            


        }
        console.log('labels', labels); 
        
        // valuearray = [];
        // for (var t = 0; t < tickerarray.length; t++){
        //     valuearray = [];
        //     console.log("tickerarray", tickerarray[t]); 
        //     for (var l = 5; l < labels.length; l++){
        //         console.log("labels", labels[l]); 
        //         for (var y = 0; y < data.length; y++) {
        //             // console.log("data.writer", data[y].writer);
        //             sum = 0;
        //             if (tickerarray[t] == data[y].ticker_symbol && labels[l] == data[y].writer) {
        //                 sum += data[y].ticker_symbol
        //                 // console.log(tickerarray[t], ":", data[y].ticker_symbol)
        //                 // if (labels[l] == data[y].writer) {
        //                     // valuearray.push(data[y].reaction_total);
        //                     // console.log("reaction", data[y].reaction_total);

        //                 // }
        //             }
        //         }
        //     }
                
        // }
        // console.log("valuearray", valuearray);

        //////////
        //PARENTS

        // for (var t = 0; t < tickerarray.length; t++){
        //     for (l = 0; l < labels.length; l++){
    
        //         // console.log(l)

        //         parentarray = []
        //         for (x = 0; x< data.length; x++){

        //             if (tickerarray[t] == data[x].ticker_symbol) {
        //                 currentlabel = labels[l];
        //             }
        //             // console.log(data[x].writer);
        //             if (currentlabel == data[x].writer) {
        //             //     currentparent = tickerarray[t];
        //             }
        //             // console.log(currentparent);


        //         //     if (parentarray.indexOf(currentparent) == -1){
        //         //         parentarray.push(currentparent);
     
        //         //     }
        //         // console.log(parentarray);



        //         }
        //     }
            

        //     // // parentholdingarray = [];
            
        //     // for (x = 0; x< data.length; x++){

        //     //     if (tickerarray[t] == data[x].ticker_symbol) {
        //     //         currentlabel = labels[l];
        //     //     }
        //     //     console.log("currentlabel", currentlabel)

        //     //     if (currentlabel == data[x].writer) {
        //     //         currentparent = data[x].ticker_symbol;
        //     //     }
        //     //     // console.log(currentlabel, currentparent);


                    
        //     //         // if (labels[l] == data[x].writer) {
        //     // //             var currentparent = data[x].ticker_symbol;
        //     // //         }
                    
        //     // //         if (parentholdingarray.indexOf(currentparent) == -1) {
        //     // //             parentholdingarray.push(currentparent);
        //     // //         }

        //     //     }
        //     // // console.log(l, parentholdingarray);

        // }
        

        



        
        // console.log('tikerarray', tickerarray);
        // console.log('labels', labels);
        console.log('parents', parents);
        console.log('values', values);



        var data = [{
            type: "sunburst",
            labels: labels,
            parents: parents,
            values:  values,
            outsidetextfont: {size: 20, color: "#377eb8"},
            leaf: {opacity: 0.4},
            marker: {line: {width: 2}},
          }];
      
          var layout = {
            margin: {l: 0, r: 0, b: 0, t: 0},
            width: 500,
            height: 500
          };
      
      
          Plotly.newPlot('sunburstplot', data, layout);

    });

}

sunplot();






















// function sunplot() {

//     var url = '/fulldata'
  
//     d3.json(url).then(function(data) {
  
//       // console.log(data);
  
//       tickerarray = [];
//       for (var i = 0; i < data.length; i++) {
//         // console.log(data[i].ticker_symbol);
  
//       //   //Adding unique ticker to labels
//         var currenttickervalue = data[i].ticker_symbol;
//         // console.log(currentticker)
        
//         if(tickerarray.indexOf(currenttickervalue) == -1){
//           tickerarray.push(currenttickervalue);
//       //   //   console.log("Value exists!")
//       //   }
//       //   // else {
//       //   //   labels.push(currentticker);
//         }
//       }
//       console.log("tickerarray", tickerarray);
      
//       var labels = [];
//       var parents = ["", "", "", "", ""];
    
//       ////// - just adding company to labels
//       for (var i = 0; i < data.length; i++) {
//         // console.log(data[i].ticker_symbol);
  
//       //   //Adding unique ticker to labels
//         var currentticker = data[i].ticker_symbol;
//         // console.log(currentticker)
        
//         if(labels.indexOf(currentticker) == -1){
//           labels.push(currentticker);
//       //   //   console.log("Value exists!")
//       //   }
//       //   // else {
//       //   //   labels.push(currentticker);
//         }
//       }
  
      
//   //////////////////////// = adding each unique writer for each company into labels array
//       for (var j = 0; j < tickerarray.length; j++) {
//         // console.log(tickerarray[j]);
//         holdingarray = []
//         for (var i = 0; i < data.length; i++) {
//           if (tickerarray[j] == data[i].ticker_symbol) {
  
//           var currentwriter = data[i].writer;
//           // console.log(currentwriter)
//           }
          
//           if (holdingarray.indexOf(currentwriter) == -1){
//             holdingarray.push(currentwriter);
//           // //   console.log("Value exists!")
//           }
//         }
//         console.log(tickerarray[j], "holdingarray", holdingarray)
//         for (var k = 0; k < holdingarray.length; k++) {
//           labels.push(holdingarray[k])
  
          
  
//           var holding = [];
//           for (var x = 0; x < data.length; x++) {
            
//             if (tickerarray[j] == data[x].ticker_symbol)
//               var currentparent = data[x].ticker_symbol;
//               var currentchild = data[x].writer;
  
//               if (holding.indexOf(currentchild) == -1){
//                 holding.push(currentchild);
//                 parents.push(currentparent);
//               }
  
//           } 
  
  
  
  
          
//         }
        
  
  
//       }
  
  
  
  
//       // var parents = ["", "", "", "", ""];
      
  
  
//       for (var j = 0; j < holdingarray.length; j++) {
//         // var holding = [];
//         // for (var i = 0; i < data.length; i++) {
          
//         //   if (tickerarray[j] == data[i].ticker_symbol)
//         //     var currentparent = data[i].ticker_symbol;
//         //     var currentchild = data[i].writer;
  
//         //     if (holding.indexOf(currentchild) == -1){
//         //       holding.push(currentchild);
//         //       parents.push(currentparent);
//         //     }
  
//         // } 
//       }
//       console.log("tickerarray", tickerarray)
//       console.log("label", labels)
//       console.log("holding", holding)
//       console.log("parents", parents)
      
      
      
//       // // writer0 = 0
//       // // writer1 = 0
//       // // writer2 = 0
//       // // writer3 = 0
//       // // writer4 = 0
//       // var values = [0]
  
//       // for (var i = 0; i < holding.length; i++) {
//       //   // console.log(holding[i])
//       //   sum = 0
//       //   for (var j = 0; j < data.length; j++) {
          
//       //     currentreactiontotal = data[j].reaction_total;
//       //     // console.log(currentreactiontotal)
//       //     writercurrent = data[j].writer;
//       //     // console.log(i, writercurrent)
          
//       //     if (holding[i] == writercurrent){
//       //       // console.log(writer[i])
//       //       sum += currentreactiontotal;
//       //       // console.log(holding[i], "is equals");
//       //     } 
//       //     // else {
//       //     //   console.log("Not equals");
//       //     // }
  
//       //   }
//       //   values.push(sum);
  
//       // }
  
  
//       // console.log("values", values)
//       // // console.log("writer", writer1)
//       // // console.log("writer", writer2)
//       // // console.log("writer", writer3)
//       // // console.log("writer", writer4)
  
  
      
      
//       // var data = [{
//       //   type: "sunburst",
//       //   labels: labels,
//       //   parents: parents,
//       //   values:  values,
//       //   outsidetextfont: {size: 20, color: "#377eb8"},
//       //   leaf: {opacity: 0.4},
//       //   marker: {line: {width: 2}},
//       // }];
  
//       // var layout = {
//       //   margin: {l: 0, r: 0, b: 0, t: 0},
//       //   width: 500,
//       //   height: 500
//       // };
  
  
//       // Plotly.newPlot('sunburstplot', data, layout);
  
  
//     });
  
//   }
//   sunplot();