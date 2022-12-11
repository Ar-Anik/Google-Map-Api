let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.685, lng: 90.3563 },
    zoom: 5,
    mapTypeId: "terrain",
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
