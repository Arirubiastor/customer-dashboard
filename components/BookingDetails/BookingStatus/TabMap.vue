<template>
  <div>
    <div style="height: 500px; width: 100%;">
      <!-- <div class="info" style="height: 15%">
        <span>Center: {{ center }}</span>
        <span>Zoom: {{ zoom }}</span>
        <span>maxZoom: {{ maxZoom }}</span>
        <span>Bounds: {{ bounds }}</span>
        <span v-for="coordsItem in coordsList" :key="coordsItem"
          >Coords: {{ coordsItem }}</span
        >
      </div> -->
      
        <l-map
          :zoom="zoom"
          :center="center"
          :minZoom="minZoom"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
          ref="mymap"
        >
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker
            v-for="coordsItem in coordsList"
            :key="coordsItem"
            :lat-lng="[coordsItem.lat, coordsItem.lng]"
            :name="[coordsItem.lat, coordsItem.lng]"
          >
            <l-tooltip
              >Booking: {{ bookingNum }}<br />Latitud: {{ coordsItem.lat }}<br />Longitud: {{ coordsItem.lng }}
            </l-tooltip>
          </l-marker>
        </l-map>
    </div>
  </div>


	<!-- <div id="map-wrap"></div> -->
</template>

<script>
import "leaflet/dist/leaflet.css"

// ------------------------ TEST MAP

// ----------------------------------

export default {
  name: "TabMap",
  props: {
    coordsList: {
      type: Array,
      required: true,
    },
    bookingNum: {
      type: String,
      required: true,
    },
  },


  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 3,
      minZoom: 1,
      center: [37.44, -40.21],
      bounds: null,
      // markerLatLng: [47.313220, -1.319482],
      coords: this.coordsList,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },




  //   // modalShown() {
  //   //   setTimeout(() => {
  //   //     this.$refs.mymap.mapObject.invalidateSize();
  //   //   }, 100);
  //   // },
  },


  // mounted() {
  //   setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
  // },

// --------------------TEST MAP
//   mounted() {
// 			var mymap = L.map('map-wrap').setView([51.505, -0.09], 13)
// 			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);
// 		}
};
</script>

<style>
@import "leaflet/dist/leaflet.css";
</style>