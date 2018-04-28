var data;
var currentURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
var pathArray = window.location.pathname.split( '/' );
console.log(pathArray);
var theRecord = pathArray[2];
console.log(theRecord);
window.w = {
    params: {}
};

$(document).ready(function () {
  console.log("docReady()");
  fetchData()
});

function fetchData() {
    console.log("fetchData()");
    $.get("/api/" + theRecord)
        .done(function(data) {
            $('#comp_bar').text(JSON.stringify(data, null, '  '));
            initBar(data);
            // Re-render the bar chart
            // window.w.bar.render();
        })
        .fail(function(){
            console.log("Could not load data");
            alert("Could not load data");
        });
}

function initBar(data) {
  var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

// Create variable for the SVG
  var svg = d3.select("#comp_bar").append("svg")
            .attr("height","100%")
            .attr("width","100%");

  // Select, append to SVG, and add attributes to rectangles for bar chart
  svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
            .attr("class", "bar")
            .attr("height", function(d, i) {return (d * 10)})
            .attr("width","40")
            .attr("x", function(d, i) {return (i * 60) + 25})
            .attr("y", function(d, i) {return 400 - (d * 10)});

  // Select, append to SVG, and add attributes to text
  svg.selectAll("text")
      .data(dataArray)
      .enter().append("text")
      .text(function(d) {return d})
             .attr("class", "text")
             .attr("x", function(d, i) {return (i * 60) + 36})
             .attr("y", function(d, i) {return 415 - (d * 10)});

//
//     // Create an object to export our methods on the config
//     data.bar = {};
//
//     // Start building our svg bar chart
//     var svg = svgContainer.append("svg");
//     var chart = svg.append("g");
//
//     // Configure our SVG element to be the full width and 200px tall
//     svg.attr('width', '100%')
//         .attr('height', 200);
//
//     // Get the width and height of the element containing our svg element
//     var boundingRect = svgContainer.node().getBoundingClientRect();
//
//     // Add margins so there is room to draw our axis
//     var margin = {'left': 40, 'right': 0, 'top': 10, 'bottom': 40};
//
//     // Hang on to the width and height values to use when generating the graph
//     var width = boundingRect.width - (margin.left + margin.right);
//     var height = boundingRect.height - (margin.top + margin.bottom);
//
//     // Position the chart with the margin accounted for
//     chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
//
//     // Render re-renders the bar chart
//     data.bar.render = function () {
//         // Get the updated countries data sorted by the number of winners
//         var day_minimum = data;
//
//         // Create lists of country names and the winner counts so we can generate
//         // d3 scales from the data.
//         // We'll use the country names to create a band scale and the winner
//         // counts to create a linear band.
//         // https://github.com/d3/d3-scale
//         // https://github.com/d3/d3-scale#band-scales
//         // https://github.com/d3/d3-scale#linear-scales
//
//         // Create our country name scale
//         var nameScale = d3.scaleOrdinal() // band scale
//             .domain(day_minimum)            // of country names
//             .range([0, width])         // ranging from 0 to the width of our container
//             .paddingInner(0.1);        // with padding between the bands
//
//         // Get the highest value from the winners data
//         // var maxWinner = d3.max(winners);
//         //
//         // // Create our winner count scale
//         // var winnerScale = d3.scaleLinear() // linear scale
//         //     .domain([0, maxWinner])        // of a domain
//         //     .range([height, 0])            // ranging from the height down to 0
//         //     .nice();                       // rounding to a nice even number
//
//         // Get the width of the bands from the scale
//         var bandwidth = nameScale.bandwidth();
//
//         // Remove the graph if it exists
//         chart.selectAll("g").remove();
//
//         // Create a group to hold our graph
//         var graph = chart.append("g");
//
//         // Create a group for our bars
//         var bars = graph.append("g")
//             .classed("bars", true);
//
//         // Draw the bars
//         bars.selectAll('rect.bar')
//             .data(countries)
//             .enter()
//             .append('rect')
//             .classed('bar', true)
//             .attr('width', bandwidth)
//             .attr('height', function(d) {
//                 return height - winnerScale(data);
//             })
//             .attr('x', function(d) {
//                 return nameScale(data);
//             })
//             .attr('y', function(d) {
//                 return winnerScale(data);
//             });
//
//         // Create a Y axis on the left side from our winner scale
//         // If the largest value is greater than 10 only draw 10 tick marks
//         // but if the value is less than 10, e.g. 3, only draw 3 tick marks
//         var yAxis = d3.axisLeft(winnerScale)
//             .ticks(Math.min(10, maxWinner));
//
//         graph.append("g")
//             .classed("y axis", true)
//             .call(yAxis);
//
//         // Create an X axis on the bottom to show the country names
//         var xAxis = d3.axisBottom(nameScale)
//             .tickSizeOuter(0);
//
//         graph.append("g")
//             .classed("x axis", true)
//             .call(xAxis)
//             .attr('transform', 'translate(0,' + height + ')')
//             .selectAll("text")
//             .attr('transform', 'rotate(-65)')
//             .style('text-anchor', 'end')
//             .attr('dx', '-.8em')
//             .attr('dy', '.15em');
//     }
}
//
//
// function initBar(data){
//   console.log("initBar()")
//   console.log(data);
//   console.log(data["company"]["Day_Minimum"]);
//
//
//        var day_minimum = data["company"]["Day_Minimum"];
//
//
//        var day_maximum =  data["company"]["Day_Minimum"];
//        console.log(day_maximum);
//        var svgWidth = 400;
//        var svgHeight = 350;
//
//        var heightPad = 50;
//        var widthPad = 50;
//
//        var svg = d3.select("#comp_bar")
//            .append("svg")
//            .attr("width", svgWidth + (widthPad * 2))
//            .attr("height", svgHeight + (heightPad * 2))
//            .append("g")
//            .attr("transform", "translate(" + widthPad + "," + heightPad + ")");
//
//        //Set up scales
//        var xScale = d3.scaleOrdinal()
//            .domain(day_minimum)
//            .range([svgHeight,0]);
//
//       var yScale = d3.scaleLinear()
//            .domain([0, 300])
//            .range([svgHeight,0]);
//
//       // Create bars
//        svg.selectAll("rect")
//            .data(data)
//            .enter().append("rect")
//            .attr("x", function (d) { return xScale(data.day_minimum) + widthPad; })
//            .attr("y", function (d) { return yScale(data.day_maximum); })
//            //.attr("height", function (d) { return svgHeight - yScale(data.day_minimum); })
//            .attr("height", function (d) { return svgHeight - yScale(100); })
//
//            .attr("width", 50)
//            .attr("fill", "#99badd");
//
//        // Y axis
//        var yAxis = d3.axisLeft(yScale);
//
//
//        svg.append("g")
//            .attr("class", "axis")
//            .attr("transform", "translate(" + widthPad + ",0)")
//            .call(yAxis)
//         .append("text")
//            .attr("transform", "rotate(-90)")
//            .attr("y", -50)
//            .style("text-anchor", "end")
//            .text("Price");
//
//        // X axis
//        var xAxis = d3.axisBottom(xScale);
//
//
//        svg.append("g")
//            .attr("class", "axis")
//            .attr("transform", "translate(" + widthPad + "," + svgHeight + ")")
//            .call(xAxis)
//         .append("text")
//            .attr("x", svgWidth / 2 - widthPad)
//            .attr("y", 50)
//            .text("Day Range")
//         .selectAll("text")
//           .attr("y", 0)
//           .attr("x", 9)
//           .attr("dy", ".35em")
//           .attr("transform", "rotate(-90)");
//
//
//    };
