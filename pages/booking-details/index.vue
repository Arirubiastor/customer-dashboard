<template>
  <div>
    <TheHeader :bookingData="bookingData" />
    <!-- <h1 class="text-center">Booking Details</h1> -->
    <!-- <b-container>
      <b-button tag="nuxt-link" to="/" variant="outline-primary" class="mb-4">Back to login</b-button>
    </b-container> -->
    <BookingHeader :bookingData="bookingData" class="mt-4 mt-md-5" />
    <BookingStatus :bookingData="bookingData" />
    <BookingWorkflow :workflow="bookingData.workflow" />
  </div>
</template>

<script>
// import data from '~/static/bookingData.json'
import axios from "axios";
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  data() {
    return {
      bookingData: [],
    };
  },

  async created() {
    // GET request using fetch with async/await
    const response = await fetch(
      "https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?identityBooking=111334&nombreCliente=Schryver" // anterior 120193 111334
    );
    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)))
    this.bookingData = JSON.parse(data.JsonBooking);
  },
};
</script>