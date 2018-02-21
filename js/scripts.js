var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieWl4aW5oaGgiLCJhIjoiY2pkb3ljNWptMGZzNDMzcGc4cmQ5ZHJuZSJ9.xqROR4lqYS1FfIIA07yPeQ'
}).addTo(map);

var London = L.marker([51.510025, -0.12428]).bindPopup ('Center of London'). addTo(map);
var Paris = L.marker([48.856358, 2.354851]).bindPopup ('Center of Paris').addTo(map);
var Bern = L.marker([46.944637, 7.473450]).bindPopup ('Center of Bern'). addTo(map);
var cities = L.layerGroup([London, Paris, Bern]);

var circleLondon = L.circle([51.510025, -0.12428], {
            color: 'red',
            fillColor: 'none',
            fillOpacity: 0,
            radius: 28000
        }).addTo(map);

var circleParis = L.circle([48.856358, 2.354851], {
            color: 'red',
            fillColor: 'none',
            fillOpacity: 0,
            radius: 7000
        }).addTo(map);

var circleBern = L.circle([46.944637, 7.473450], {
                  color: 'red',
                  fillColor: 'none',
                  fillOpacity: 0,
                  radius: 5000
              }).addTo(map);

//
// var grayscale = L.tileLayer(mapboxUrl, {id: 'map', attribution: mapboxAttribution}),
//     streets   = L.tileLayer(mapboxUrl, {id: 'map', attribution: mapboxAttribution});
//
// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [grayscale, cities]
// });
//
// var baseMaps = {
//     "Grayscale": grayscale,
//     "Streets": streets
// };
//
// var overlayMaps = {
//     "Cities": cities
// };
//
// L.control.layers(baseMaps, overlayMaps).addTo(map);
//
// var baseMaps = {
//     "<span style='color: gray'>Grayscale</span>": grayscale,
//     "Streets": streets
// };
