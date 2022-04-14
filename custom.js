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

  map.setFilter('temporality-count-sequence-nu-631ei0', ['==', ['number', ['get', 'temporal_sequence']], 1]);
  document.getElementById('active-temporality').innerText = 'Pre-Partition (before 1947-08-14)' //+ ampm;

  document.getElementById('slider').addEventListener('input', function(e) {
    var step = parseInt(e.target.value, 10);
    var label = ['Pre-Partition (before 1947-08-14)', 'Partition (1947-08-15 - 1948-02-28)', 'Post-Partition (1948-03-01 - 1971-12-16)', 'Long Partition (after 1971-12-16)', 'Indeterminable']

    // update the map
    map.setFilter('temporality-count-sequence-nu-631ei0', ['==', ['number', ['get', 'temporal_sequence']], step]);
    document.getElementById('active-temporality').innerText = label[step - 1] //+ ampm;

  })
});
