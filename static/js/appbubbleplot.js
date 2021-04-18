var file = "/static/Rawjson.json";
var width = 650;
var height = 650;
var colors = {
    AAPL: '#F16529',
    AMZN: '#1C88C7',
    GOOG: '#FCC700',
    MSFT: '#29f136',
    TSLA: '#29f136'
};

var generateChart = data => {
    var bubble = data => d3.pack()
        .size([width, height])
        .padding(2)(d3.hierarchy({ children: data }).sum(d => d.reaction_total));

    var svg = d3.select('#bubble-chart')
        .style('width', width)
        .style('height', height);
    
    var root = bubble(data);
    

    var node = svg.selectAll()
        .data(root.children)
        .enter().append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
    
    var circle = node.append('circle')
        .style('fill', d => colors[d.data.ticker_symbol])
        .on('mouseover', function (e, d) {
        

            d3.select(this).style('stroke', '#222');
        })
        
        .on('mouseout', function () {
            d3.select(this).style('stroke', 'none');
            
        })
        
    
    var label = node.append('text')
        .attr('dy', 2)
        .text(d => d.data.company_name.substring(0, d.r / 3));

    node.transition()
        .ease(d3.easeExpInOut)
        .duration(1000)
        .attr('transform', d => `translate(${d.x}, ${d.y})`);
    
    circle.transition()
        .ease(d3.easeExpInOut)
        .duration(1000)
        .attr('r', d => d.r);
    
    label.transition()
        .delay(700)
        .ease(d3.easeExpInOut)
        .duration(1000)
        .style('opacity', 1)
};

(async () => {
    data = await d3.json(file).then(data => data);
    generateChart(data);
});
// ();