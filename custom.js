// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9vc3RidXJnZXJzIiwiYSI6ImNsMXdiZWczdzBjN28zcG10MmJ0b3diem8ifQ.v5WXemHZmLCM2vEEZ6866g';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/joostburgers/cl1w8a046000q14rrrewcwdem', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });

//};


map.on('load', () => {
  map.addSource('location_count_by_temporality', {
    type: 'geojson',
    // Use a URL for the value for the `data` property.
    data: './layers/location_count_by_temporality.geojson'
  });

  map.addLayer({
    'id': 'temporality-layer',
    'type': 'circle',
    'source': 'location_count_by_temporality',
    'paint': {
      'circle-radius': 50,
      'circle-stroke-width': 2,
      'circle-color': 'red',
      'circle-stroke-color': 'white'
    }
  });
});
