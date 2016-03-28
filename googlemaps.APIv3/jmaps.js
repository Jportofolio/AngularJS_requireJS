/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    function initialize() {
          var jmarker;
          var jaddress = new google.maps.LatLng(30.19835,-97.78923);
          var brtnolf = new google.maps.LatLng(30.369913,-98.222579);
          //map cordinates
          //var mapcord = { lat: 30.23384, lng: -97.73093};
         //mapStyle Array
         var mapstyle = [
                            {
                             "stylers": [
                              { "hue": "#0055ff" },
                             { "lightness": 35 }
                            ]
                                 },{
                                "featureType": "road.local",
                                "elementType": "labels.icon",
                                "stylers": [
                                 { "hue": "#0055ff" },
                            { "saturation": -48 }
                                ]
                                },{
                                }
                            ];
                            
    //Creating the style goes here
    var StyleMap = new google.maps.StyledMapType(mapstyle,{name : "Mystyled Maped"});
    //Creating the map Object                        
         var mapOptions = {
          center:brtnolf,
          zoom: 15,
          disableDefaultUI: true,
          
          mapTypeControlOptions :{
              mapTypeIds: [google.maps.MapTypeId.ROADMAP,'map_Style'] 
          }
        };
        var map = new google.maps.Map(document.getElementById('cWrapper'),
            mapOptions);
       //Setting the marker for
       var image ='../wImages/jlocation1.png';
       jmarker = new google.maps.Marker({
           map:map,
           draggable: false,
           title: 'New address..',
           animation: google.maps.Animation.DROP,
           position: jaddress,
           icon : image
       });
       //google.maps.event.addListener(jmarker,'click',toggleBounce)
       //Associting the stype map with the mapTypeId
       map.mapTypes.set('map_Style',StyleMap);
       map.setMapTypeId('map_Style');
      }
      google.maps.event.addDomListener(window, 'load', initialize);

})();    


