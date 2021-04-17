// //////////////////////////////////
// // THE SUPER COMPLICATED ONE
function sunplot() {

    var url = '/fulldata'

    d3.json(url).then(function(data) {
        // console.log("Jason", data);

        tickerarray = [];
        var labels = [];
        // var parents = ["", "", "", "", "", "TSLA", "TSLA", "TSLA", "TSLA", "TSLA", "AAPL", "AAPL", "AAPL", "AMZN", "AMZN", "AMZN", "GOOG", "MSFT" ];
        var parents = ["", "", "", "", ""]
        values = [68322,818,387,116,161, 11145, 25030, 10707, 9025, 12415, 20, 777, 21, 350, 23, 14, 116, 161];

        for (var i = 0; i < data.length; i++) {

            // console.log(data[i].ticker_symbol);

            //Adding unique ticker to labels
            var currenttickervalue = data[i].ticker_symbol;
            // console.log(currenttickervalue);

            if(tickerarray.indexOf(currenttickervalue) == -1){

                tickerarray.push(currenttickervalue);

            }


            if(labels.indexOf(currenttickervalue) == -1){

                labels.push(currenttickervalue);

            }

        }

        console.log('tikerarray', tickerarray);

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
                    parentholdingarray.push(tickerarray[t]); 
                    // valueholdingarray.push(currentvalue); 

 
                }
            }
            // console.log("valueholdingarray", valueholdingarray)

            for (var h = 0; h < labelholdingarray.length; h++) {

                    labels.push(labelholdingarray[h]);
                    parents.push(parentholdingarray[h]);


            } 


        }
        console.log('labels', labels); 
        valuearray = [];
        for (var t = 0; t < tickerarray.length; t++){
            // console.log("tickerarray", tickerarray[t]); 
            for (var l = 5; l < labels.length; l++){
                // console.log("labels", labels[l]); 
                for (var y = 0; y > data.length; y++) {
                    console.log("data.length", data.length);
                    sum = 0;
                    if (tickerarray[t] == data[y].ticker_symbol) {
                        if (labels[l] == data[y].writer) {
                            valuearray.push(data[y].reaction_total);
                            // console.log("reaction", data[y].reaction_total);

                        }
                    }
                }
            }
                
        }
        console.log("valuearray", valuearray);

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