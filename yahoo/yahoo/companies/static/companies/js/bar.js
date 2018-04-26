//steven was here
$(document).ready(function () {
       var jsonData = [{
         "Category": "tech",
         "Freq": 9
       }, {
         "Category": "business",
         "Freq": 5
       },{
         "Category": "biotech",
         "Freq": 3
       },{
         "Category": "food",
         "Freq": 3
       },{
         "Category": "energy",
         "Freq": 1
       },{
         "Category": "home",
         "Freq": 6
       },{
         "Category": "aerospace",
         "Freq": 2
       },{
         "Category": "transpo",
         "Freq": 2
       },{
         "Category": "apparel",
         "Freq": 1
       }];

       var svgWidth = 960;
       var svgHeight = 350;

       var heightPad = 50;
       var widthPad = 50;

       var svg = d3.select("#bar")
           .append("svg")
           .attr("width", svgWidth + (widthPad * 2))
           .attr("height", svgHeight + (heightPad * 2))
           .append("g")
           .attr("transform", "translate(" + widthPad + "," + heightPad + ")");

       //Set up scales
       var xScale = d3.scale.ordinal()
           .domain(jsonData.map(function(d) { return d.Category; }))
           .rangeRoundBands([0, svgWidth], .1);

      var yScale = d3.scale.linear()
           .domain([0, 10])
           .range([svgHeight,0]);

      // Create bars
       svg.selectAll("rect")
           .data(jsonData)
           .enter().append("rect")
           .attr("x", function (d) { return xScale(d.Category) + widthPad; })
           .attr("y", function (d) { return yScale(d.Freq); })
           .attr("height", function (d) { return svgHeight - yScale(d.Freq); })
           .attr("width", xScale.rangeBand())
           .attr("fill", "#99badd");

       // Y axis
       var yAxis = d3.svg.axis()
           .scale(yScale)
           .orient("left");

       svg.append("g")
           .attr("class", "axis")
           .attr("transform", "translate(" + widthPad + ",0)")
           .call(yAxis)
        .append("text")
           .attr("transform", "rotate(-90)")
           .attr("y", -50)
           .style("text-anchor", "end")
           .text("Number of Companies");

       // X axis
       var xAxis = d3.svg.axis()
       .scale(xScale)
       .orient("bottom");

       svg.append("g")
           .attr("class", "axis")
           .attr("transform", "translate(" + widthPad + "," + svgHeight + ")")
           .call(xAxis)
        .append("text")
           .attr("x", svgWidth / 2 - widthPad)
           .attr("y", 50)
           .text("Category")
        .selectAll("text")
          .attr("y", 0)
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("transform", "rotate(-90)");


   });




//
// var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
//
// // set the ranges
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
//
// var y = d3.scale.linear().range([height, 0]);
//
// // define the axis
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);
//
//
// // add the SVG element
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
//
// // load the data
// d3.json("home.html/data.json", function(error, data) {
//
//
//
//   // scale the range of the data
//   x.domain(data.map(function(d) { return d.Category; }));
//   y.domain([0, d3.max(data, function(d) { return d.Freq; })]);
//
//   // add axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 5)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Frequency");
//
//
//   // Add bar chart
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.Category); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.Freq); })
//       .attr("height", function(d) { return height - y(d.Freq); });
//
// });
