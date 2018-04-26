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
    "<br><h4 style='font-size: 18px;'>Apple Data Center <br> <br> <a href='business/1' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>Click Here to View Apple Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>BB&T <br> <a href='business/2' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View BB&T Details</a></h4>" ,
    "<br><h4 style='font-size: 18px;'>Biogen <br> <a href='business/3' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Biogen Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Campbell Soup Company <br> <a href='business/4' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Campbell Soup Company Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>CISCO <br> <a href='business/5' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Cisco Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Citrix <br> <a href='business/6' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Citrix Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Duke Energy <br> <a href='business/7' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Duke Energy Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Ethan Allen Interiors <br> <a href='business/8' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Ethan Allen Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>AB ELectrolux <br> <a href='business/9' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View AB Electrolux Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>General Electric <br> <a href='business/10' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View GE Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>HoneyWell <br> <a href='business/11' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View HoneyWell Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>IBM <br> <a href='business/12' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View IBM Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>LabCorp of America <br> <a href='business/13' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View LabCorp Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Lowe's Home Improvement <br> <a href='business/14' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Lowes Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>MetLife <br> <a href='business/15' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View MetLife Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Merck & Co. <br> <a href='business/16' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Merck and Co. Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Microsoft <br> <a href='business/17' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Microsoft Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Nucor Corporation <br> <a href='business/18' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Nucor Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Old Dominion Freight Line <br> <a href='business/19' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Old Dominion Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Oracle <br> <a href='business/20' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Oracle Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>PNC Bank <br> <a href='business/21' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View PNC Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Quorvo Inc. <br> <a href='business/22' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Quorvo Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Red Hat <br> <a href='business/23' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Red Hat Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Sanderson Farms <br> <a href='business/24' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Sanderson Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Sonic Automotive <br> <a href='business/25' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Sonic Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Sealed Air Corporation <br> <a href='business/26' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Sealed Air Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Tempur Sealy <br> <a href='business/27' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Tempur Sealy Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>TransUnion <br> <a href='business/28' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View TransUnion Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Tyson Foods <br> <a href='business/29' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Tyson Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>VF Corporation <br> <a href='business/30' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View VF Corp Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Verizon <br> <a href='business/31' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Verizon Details</a></h4>",
    "<br><h4 style='font-size: 18px;'>Wells Fargo Bank <br> <a href='business/32' style='color: #99badd; font-size: 14px; text-transform: lowercase; text-decoration: underline;'>View Wells Fargo Details</a></h4>"


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
