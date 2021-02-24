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

// watchQuery: true,
// watch: {
//     '$route.query': '$fetch'
//   },

   async created() {
    // GET request using fetch with async/await
    
    let uuidBooking = this.$route.query.uuidBooking;
    let nombreCliente = this.$route.query.nombreCliente;

    // try {
      const response = await fetch(
      `https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?uuidBooking=${uuidBooking}&nombreCliente=${nombreCliente}`
    )

    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)));
    this.bookingData = JSON.parse(data.JsonBooking);

    // } catch (error) {
    //   context.error(error)
    // }

    
    
    if (response.uuidBooking === this.$route.query.uuidBooking && response.nombreCliente === this.$route.query.nombreCliente) {
      this.response = response
    } else {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.response.statusCode = 404
      }
      // use throw new Error()
      throw new Error('Booking not found')
      // this.$nuxt.error({ message: 'Error test'})
    }

  //   if(!response){
  //   return error({statusCode: 404, message: 'Not found'})
  // }


    // if (response.ok) {
    //   return response;
    // } else {
    //   throw Error(`Request rejected with status ${res.status}`);
    // }
  },

  // async validate({ params, query, store }) {
  //   // Throws a 500 internal server error with custom message
  //   throw new Error('Under Construction!')
  // }

  asyncData({ query }) {
    console.log('query' + query);
  }
}
</script>

<style>

</style>
