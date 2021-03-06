require(["esri/config","esri/Map", "esri/views/MapView", "esri/widgets/Search"], function (esriConfig, Map, MapView, Search) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

const map = new Map({
          basemap: "arcgis-navigation" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-122.3321,47.6062],
      zoom: 12,
          container: "viewDiv" // Div element
        });

  const search = new Search({  //Add Search widget
      view: view
    });
  
  view.ui.add(search, "top-right"); //Add to the map
  
 });
