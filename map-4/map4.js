let map;

function initMap() {
  const MapOptions = {
    center: { lat: 23.685, lng: 90.3563 },
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), MapOptions);

  const infoWindowOptions = {
    content:
      "Bangladesh oBangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world",
    position: { lat: 23.685, lng: 90.3563 },
    pixelOffset: new google.maps.Size(60, 60),
    maxWidth: 200,
  };

  const infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  const markerOptions = {
    position: { lat: 23.685, lng: 90.3563 },
    map: map,
  };

  const marker = new google.maps.Marker(markerOptions);

  infoWindow.open(map, marker);

  const infoWindowOptions2 = {
    position: { lat: 23.2321, lng: 90.6631 },
    pixelOffset: new google.maps.Size(120, 120),
  };

  const infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);

  infoWindow2.setContent(`
    <h1>Chandpur</h1>
    <p>This is Chandpur</p>
    <img src="./icon.png" />
  `);

  const markerOptions2 = {
    position: { lat: 23.2321, lng: 90.6631 },
    map: map,
  };

  const marker2 = new google.maps.Marker(markerOptions2);

  const infoWindowOpenOptions2 = {
    map: map,
    anchor: marker2,
    shouldFocus: true,
  };

  infoWindow2.open(infoWindowOpenOptions2);

  const infoWindowOptions3 = {
    content: "Borisal",
    position: { lat: 22.701, lng: 90.3535 },
    pixelOffset: new google.maps.Size(150, 150),
  };

  const infoWindow3 = new google.maps.InfoWindow(infoWindowOptions3);

  const markerOptions3 = {
    position: { lat: 22.701, lng: 90.3535 },
    map: map,
  };

  const marker3 = new google.maps.Marker(markerOptions3);

  const infoWindowOpenOptions3 = {
    map: map,
    anchor: marker3,
    shoulFocus: false,
  };

  infoWindow3.open(infoWindowOpenOptions3);
}
