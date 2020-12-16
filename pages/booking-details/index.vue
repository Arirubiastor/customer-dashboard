<template>
  <div>
    <h1 class="text-center">Booking Details</h1>
    <BookingHeader :bookingData="bookingData" />
    <BookingStatus :bookingData="bookingData" />
    <BookingWorkflow :workflow="bookingData.workflow" />
    <b-button tag="nuxt-link" to="/" variant="outline-primary"
      >Back to login</b-button
    >
  </div>
</template>

<script>
// import data from '~/static/bookingData.json'
import axios from "axios";

export default {
  data() {
    return {
      bookingData: [],
    };
  },

  async created() {
    // GET request using fetch with async/await
    const response = await fetch(
      "https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?identityBooking=46940&nombreCliente=Schryver"
    );
    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)))
    this.bookingData = JSON.parse(data.JsonBooking);
  },
};
</script>