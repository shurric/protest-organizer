/* global google */
// gmaps api key:  AIzaSyC4awPayhHVxrxXZI9fAGOaGVlrBJdRHkQ

function initMap () {
  var uluru = {lat: -25.363, lng: 131.044}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    fullscreenControl: false,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  })
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  })
}
