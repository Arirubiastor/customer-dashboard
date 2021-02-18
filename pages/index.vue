<template>
  <div>
    <TheHeader :bookingData="bookingData" />
    <StatusSummary :bookingData="bookingData" :workflow="bookingData.workflow" />
  </div>
</template>

<script>
import data from '~/static/bookingData.json'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  data() {
    return {
      bookingData: [],
      uuidBooking: '',
    }
  },
  asyncData ({ params }) {
    // console.log(data)
    return {bookingData:data}
  },

//  beforeCreate() {
//     let identityBooking = this.$route.query.identityBooking
//     console.log('mounted' + identityBooking);
//   },

   async created() {
    // GET request using fetch with async/await
    
    let uuidBooking = this.$route.query.uuidBooking;
    // let identityBooking = this.$route.query.identityBooking;
    let nombreCliente = this.$route.query.nombreCliente;
    const response = await fetch(
      `https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?uuidBooking=${uuidBooking}&nombreCliente=${nombreCliente}`
    );
    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)))
    this.bookingData = JSON.parse(data.JsonBooking);

    // if (data.identityBooking === this.$route.query.identityBooking) {
    //   this.data = data
    // } else {
    //   // set status code on server and
    //   if (process.server) {
    //     this.$nuxt.context.response.statusCode = 404
    //   }
    //   // use throw new Error()
    //   throw new Error('Booking not found')
    // }

    if (response.ok) {
      return response;
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
    // .catch(console.error)
  },
}
</script>

<style>

</style>
