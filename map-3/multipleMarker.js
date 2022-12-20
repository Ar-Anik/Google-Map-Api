let map;

function initMap() {
  const MapOptions = {
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 12,
  };

  let map = new google.maps.Map(document.getElementById("map"), MapOptions);

  let markerOptions = {
    position: new google.maps.LatLng(23.8103, 90.4125),
  };

  let marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);

  let markerOptions2 = {
    position: new google.maps.LatLng(23.4607, 91.1809),
  };

  let marker2 = new google.maps.Marker(markerOptions2);
  marker2.setMap(map);

  let markerOptions3 = {
    position: new google.maps.LatLng(23.2321, 90.6631),
  };

  let marker3 = new google.maps.Marker(markerOptions3);
  marker3.setMap(map);
}
