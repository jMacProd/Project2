// //////////////////////////////////
// // VERSION 2 - CAPTURES ALL DATA
function sunplot() {

    var url = '/fulldata'

    d3.json(url).then(function(data) {
        // console.log("Jason", data);

        tickerarray = [];
        var labels = [];
        var parents = []
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
                //As first 5 items in labels are the tickers, they do not have parents in the parents list or values in the values list.
                //But the parents and values for the other labels must be in the same list position as the labels
                parents.push("");
                values.push(0);

            }

            //Adding the unique list of tickers into the sunburst label list - the labels are a list of all unique items in the sunburst (ie tickers and writers)
            if(labels.indexOf(currenttickervalue) == -1){

                labels.push(currenttickervalue);

            }

        }

        // console.log('tikerarray', tickerarray);

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
                // console.log(tickerarray[t], labelholdingarray[h], sum);
                values.push(sum);

            }

        }
        // console.log('labels', labels); 
  
        
        // console.log('tikerarray', tickerarray);
        // console.log('labels', labels);
        // console.log('parents', parents);
        // console.log('values', values);



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

