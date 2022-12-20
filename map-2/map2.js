let map;

function initMap() {
  const MapOptions = {
    center: { lat: 23.685, lng: 90.3563 },
    zoom: 15,
    mapId: "ff65b0c17558f247",
  };

  map = new google.maps.Map(document.getElementById("map"), MapOptions);

  document.getElementById("rotate").addEventListener("click", autoRotate);
}

function rotate90() {
  const heading = map.getHeading() || 0;

  map.setHeading(heading + 90);
}

function autoRotate() {
  if (map.getTilt !== 0) {
    window.setInterval(rotate90, 3000);
  }
}
