<template>
  <div>
    <div v-if="bookingData.booking != null && bookingData.booking != ''">
      <TheHeader :bookingData="bookingData" />
      <StatusSummary :bookingData="bookingData" :workflow="bookingData.workflow" />
    </div>
      <ErrorBookingInfo v-else :bookingData="bookingData" />
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
      response: '',
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

      const response = await fetch(
      `https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?uuidBooking=${uuidBooking}&nombreCliente=${nombreCliente}`
    )
    
    // .then(data => {
    //   if (response === undefined) {
    //     console.log('response: indefinida')
    //     // return error({statusCode: 404, message: 'Not found'})
    //   }
    //   console.log('RESPONSE: ' + response)
    //   })
    // .catch(reason => {
    //   console.log(reason.message)
    //   // response.statusCode == 404

    //   // if (response === undefined) {
    //   //   return error({statusCode: 404, message: 'Not found'})
    //   // }
    // })
    
    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)));
    this.bookingData = JSON.parse(data.JsonBooking);
    // console.log('query: ' + uuidBooking)

    if (uuidBooking === null) {
      console.log('RESPONSE:UUI IS UNDEFINED')
    }

    // if(response === undefined) {
    //   console.log('a huevo')
    //   return error({statusCode: 404, message: 'Not found'})
    // }

    // .then(response => response.json())
    // .catch((error) => {
    //   console.log('error catch: ' + error)
    //   response.statusCode === 404
    // })

    // if (!response) {
    //   response.statusCode === 404
    //   console.log('TEST')
    // }

    
    // if (response.uuidBooking === this.$route.query.uuidBooking && response.nombreCliente === this.$route.query.nombreCliente) {
    //   this.response = response
    // } else {
    //   // set status code on server and
    //   if (process.server) {
    //     this.$nuxt.context.response.statusCode = 404
    //     console.log('error 404')
    //   }
    //   // use throw new Error()
    //   throw new Error('Booking not found')
    //   // this.$nuxt.error({ message: 'Error test'})
    // }


  //   if(!response){
  //   return error({statusCode: 404, message: 'Not found'})
  // }


    // if (response.ok) {
    //   return response;
    // } else {
    //   throw Error(`Request rejected with status ${res.status}`);
    // }
  },

  asyncData({ query }) {
    // console.log('query' + query);
  }
}
</script>

<style>

</style>
