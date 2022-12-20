let map;

function initMap() {
  const MapOptions = {
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 12,
  };

  let map = new google.maps.Map(document.getElementById("map"), MapOptions);

  let markerOptions = {
    position: new google.maps.LatLng(23.8103, 90.4125),
    optimized: true,

    icon: "icon.png",
    label: "D",
    title: "Dhaka-Bangladesh",
    draggable: true,
    animation: google.maps.Animation.DROP,
  };

  let marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);

  let icon = {
    url: "./icon2.png",
    scaledSize: new google.maps.Size(50, 50),
  };

  let markerOptions2 = {
    position: new google.maps.LatLng(23.2321, 90.6631),
    optimized: true,
    // icon: icon,
    animation: google.maps.Animation.BOUNCE,
  };

  let marker2 = new google.maps.Marker(markerOptions2);
  marker2.setIcon(icon);
  marker2.setLabel("C");
  marker2.setTitle("Chandpur-Bangladesh");
  marker2.setMap(map);
  marker2.setDraggable(true);

  marker.addListener("click", (googleMapsEvent) => {
    document.getElementById("info").innerHTML =
      "Latetude : " +
      googleMapsEvent.latLng.lat() +
      " longitude: " +
      googleMapsEvent.latLng.lng();
  });

  marker2.addListener("click", (googleMapsEvent) => {
    document.getElementById("info").innerHTML =
      "Latetude : " +
      googleMapsEvent.latLng.lat() +
      " longitude: " +
      googleMapsEvent.latLng.lng();
  });

  setTimeout(() => {
    marker2.setAnimation(null);
  }, 10000);
}
