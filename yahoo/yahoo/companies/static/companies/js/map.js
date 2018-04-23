// we're gonna make a map for all the companies we have in our json file. This will show where they are located in NC

//first we need to initialize the map, aka make it
function initMap() {
//and next we will create a variable called map, which will appear in the div id 'map' on our home.html page
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 35.7796, lng: -79.0193},
    mapTypeId: 'roadmap'


  });



//now we need to locate where our markers will be, which is where the companies are located. So we input the lat lng inputs for each company
var locations = [
     ['Apple', 35.587248, -81.257050 ],
     ['BB&T', 35.914979, -79.054663 ],
     ['Biogen', 35.860354, -78.868608 ],
     ['Campbell Soup Company', 34.773949, -79.324353 ],
     ['Cisco', 35.854621, -78.872049 ],
     ['Citrix', 35.778989, -78.646523 ],
     ['Duke Energy', 36.034902, -78.971984 ],
     ['Ethan Allen Interiors', 35.755648, -78.744875 ],
     ['AB Electrolux', 36.095692, -79.437799 ],
     ['General Electric', 36.081375, -79.234101 ],
     ['HoneyWell', 35.773143, -78.553008 ],
     ['IBM', 35.903449, -78.857440],
     ['IBM', 35.903449, -78.857440],
     ['LabCorp', 35.965231, -79.057957],
     ['Lowes', 35.947845, -79.012768],
     ['MetLife', 35.759570, -78.784720],
     ['Merck', 35.754906, -77.999996],
     ['Microsoft', 35.129056, -80.953948],
     ['Nucor', 35.158720, -80.834881],
     ['ODFL', 35.839053, -78.826510],
     ['Oracle', 35.902314, -78.780037],
     ['PNC', 35.776525, -78.638765],
     ['Quorvo', 36.038110, -79.959213],
     ['Red Hat', 35.773801, -78.643087],
     ['Sanderson Farms', 35.258489, -77.669540],
     ['Sonic Automotive', 35.176705, -80.796985],
     ['Sealed Air', 35.198570, -80.918613],
     ['Sealy', 35.907597, -79.992387],
     ['TransUnion', 35.149998, -80.837555],
     ['Tyson', 35.459694, -79.139507],
     ['VF Corp', 36.122155, -79.798901],
     ['Verizon', 35.927587, -79.026718],
     ['Wells Fargo Bank', 35.778737, -78.639674]




   ];

  //now in the pop up that will appear when you click on the marker, we need to put something so the user knows which company is being located
  var content = [
    "Apple Data Center - 5977 Startown Rd, Maiden, NC 28650",
    "BB&T - 143 E Rosemary St, Chapel Hill, NC 27514",
    "Biogen - 5000 Davis Dr, Durham, NC 27709",
    "Campbell Soup Company - 2120 NC-71, Maxton, NC 28364",
    "CISCO - 27709, 7025-5 Kit Creek Rd, Morrisville, NC 27560",
    "Citrix - 120 S West St, Raleigh, NC 27603",
    "Duke Energy - 4412 Hillsborough Rd, Durham, NC 27705",
    "Ethan Allen Interiors - 5717 Dillard Dr, Cary, NC 27518",
    "AB ELectrolux - Burlington, NC 27215",
    "General Electric - 6801 Industrial Dr, Mebane, NC 27302",
    "HoneyWell -  416 Rogers View Ct, Raleigh, NC 27610",
    "IBM - 3039 E Cornwallis Rd, Research Triangle Park, NC 27709",
    "LabCorp of America - 100 Timberhill Pl, Chapel Hill, NC 27514",
    "Lowe's Home Improvement - 1801 Fordham Blvd, Chapel Hill, NC 27514",
    "MetLife - 201 Shannon Oaks Cir #200, Cary, NC 27511",
    "Merck & Co. - 4633 Merck Rd, Wilson, NC 27893",
    "Microsoft - Charlotte, NC 28273",
    "Nucor Corporation- 1915 Rexford Rd, Charlotte, NC 28211",
    "Old Dominion Freight Line - 213 International Dr, Morrisville, NC 27560",
    "Oracle - 8081 Arco Corporate Dr #200, Raleigh, NC 27617",
    "PNC Bank - 301 Fayetteville St, Raleigh, NC 27601",
    "Quorvo Inc. - 4050 Premier Dr, High Point, NC 27265",
    "Red Hat - 500 S McDowell St, Raleigh, NC 27601",
    "Sanderson Farms - 4985 US-70, Kinston, NC 28504",
    "Sonic Automotive - 4401 Colwick Rd, Charlotte, NC 28211",
    "Sealed Air Corporation - 2415 Cascade Pointe Boulevard, Charlotte, NC 28208",
    "Tempur Sealy - 239 Sealy Dr, Trinity, NC 27370",
    "TransUnion - 6100 Fairview Rd #1200, Charlotte, NC 28210",
    "Tyson Foods - 800 E Main St, Sanford, NC 27332",
    "VF Corporation - 105 Corporate Center Blvd, Greensboro, NC 27408",
    "Verizon - 201 S Estes Dr, Chapel Hill, NC 27514",
    "Wells Fargo Bank - 150 Fayetteville St, Raleigh, NC 27601"


  ]

  //we need to make the info window, which we do here
   var infowindow = new google.maps.InfoWindow();

   //and we need to make a marker which will show us where the locations are
   var marker, i;

   //and this shows the code where to place the markers
   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });

     //this tells the code to create an info marker when you click on the markers
     google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
         infowindow.setContent(content[i]);
         infowindow.open(map, marker);
       }
     })(marker, i));
   }
 }




   //
   //
  //      // Create an array of alphabetical characters used to label the markers.
       var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
