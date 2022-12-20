let map;

function initMap() {
  var mapTypeStylesArray = [
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: 100,
        },
      ],
    },
  ];

  const MapOptions = {
    center: { lat: 23.685, lng: 90.3563 },
    zoom: 15,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45,
    styles: mapTypeStylesArray,
    // mapTypeControlOptions: {
    //   mapTypeIds: ["roadmap", "hybrid"],
    // },
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
