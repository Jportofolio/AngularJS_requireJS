/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){function e(){var e,t=new google.maps.LatLng(30.23384,-97.73093),n=new google.maps.LatLng(30.23157,-97.7335),r=[{stylers:[{hue:"#0055ff"},{lightness:35}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{hue:"#0055ff"},{saturation:-48}]},{}],i=new google.maps.StyledMapType(r,{name:"Mystyled Maped"}),s={center:n,zoom:15,disableDefaultUI:!0,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_Style"]}},o=new google.maps.Map(document.getElementById("cWrapper"),s),u="../wImages/jlocation1.png";e=new google.maps.Marker({map:o,draggable:!1,title:"I am here",animation:google.maps.Animation.DROP,position:t,icon:u}),o.mapTypes.set("map_Style",i),o.setMapTypeId("map_Style")}google.maps.event.addDomListener(window,"load",e)})();