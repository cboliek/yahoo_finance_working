$(document).ready(function () {
       var jsonData = [{
         "Category": "tech",
         "Freq": 9
       }, {
         "Category": "finance",
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
         "Category": "defense",
         "Freq": 2
       },{
         "Category": "transpo",
         "Freq": 2
       },{
         "Category": "clothes",
         "Freq": 1
       }];

       var svgWidth = 400;
       var svgHeight = 200;

       var heightPad = 50;
       var widthPad = 50;

       var svg = d3.select("#test_bar")
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
           .attr("fill", "#fa8072");

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
           .text("Number of Top Companies in NC ");

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
