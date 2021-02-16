<template>
  <div>
    <div style="height: 350px">
      <div class="info" style="height: 15%">
        <span>Center: {{ center }}</span>
        <span>Zoom: {{ zoom }}</span>
        <span>Bounds: {{ bounds }}</span>
        <span v-for="coordsItem in coordsList" :key="coordsItem"
          >Coords: {{ coordsItem }}</span
        >
      </div>
      <!-- <b-modal
        size="lg"
        :visible="visible"
        @hidden="$emit('clear')"
        title="Event details"
        @shown="modalShown"
      > -->
        <l-map
          style="height: 80%; width: 100%"
          :zoom="zoom"
          :center="center"
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
      <!-- </b-modal> -->
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"

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
    // modalShown() {
    //   setTimeout(() => {
    //     this.$refs.mymap.mapObject.invalidateSize();
    //   }, 100);
    // },
  },
  // computed: {
  //   simpleCoords() {
  //     return [this.coordsItem.lat, this.coordsItem.lng]
  //   }
  // },
  mounted() {
    // this.coords.forEach((singleCoords) => {
    //   console.log(singleCoords);
    // })
    // for(var i = 0; i < this.coords.length; i++) {
    //   conosle.log(this.coords[i]);
    // }
    // var mymap = L.map('mapContainer').setView([-40.9006, 174.8860], 5);
    setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 100);
  },
};
</script>

<style>
</style>