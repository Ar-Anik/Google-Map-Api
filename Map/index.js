let map;
// Map API : AIzaSyCdJcCRHLyqqT6zS9KYlAffSHCIWmlJaIo
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.685, lng: 90.3563 },
    zoom: 12,
    // mapTypeId: "terrain",
  });

  const marker = new google.maps.Marker({
    position: { lat: 23.685, lng: 90.3563 },
    map: map,
    label: "B",
    title: "Bangladesh",
    draggable: false,
    animation: google.maps.Animation.DROP,
    icon: "icon.png",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<p>Bangladesh</p>",
  });

  infoWindow.open(map, marker);

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

// This example uses the Google Maps JavaScript API's Data layer
// to create a rectangular polygon with 2 holes in it.
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 6,
//     center: { lat: -33.872, lng: 151.252 },
//   });
//   // Define the LatLng coordinates for the outer path.
//   const outerCoords = [
//     { lat: -32.364, lng: 153.207 },
//     { lat: -35.364, lng: 153.207 },
//     { lat: -35.364, lng: 158.207 },
//     { lat: -32.364, lng: 158.207 }, // north east
//   ];
//   // Define the LatLng coordinates for an inner path.
//   const innerCoords1 = [
//     { lat: -33.364, lng: 154.207 },
//     { lat: -34.364, lng: 154.207 },
//     { lat: -34.364, lng: 155.207 },
//     { lat: -33.364, lng: 155.207 },
//   ];
//   // Define the LatLng coordinates for another inner path.
//   const innerCoords2 = [
//     { lat: -33.364, lng: 156.207 },
//     { lat: -34.364, lng: 156.207 },
//     { lat: -34.364, lng: 157.207 },
//     { lat: -33.364, lng: 157.207 },
//   ];

//   map.data.add({
//     geometry: new google.maps.Data.Polygon([
//       outerCoords,
//       innerCoords1,
//       innerCoords2,
//     ]),
//   });
// // }

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 5,
//     center: { lat: -28, lng: 137 },
//   });
//   // NOTE: This uses cross-domain XHR, and may not work on older browsers.
//   map.data.loadGeoJson(
//     "https://storage.googleapis.com/mapsdevsite/json/google.json"
//   );
// }

// window.initMap = initMap;
