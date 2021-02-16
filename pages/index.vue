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
    }
  },
  asyncData ({ params }) {
    // console.log(data)
    return {bookingData:data}
  },

 mounted() {
    console.log(this.$route.query.identityBooking);
  },

   async created() {
    // GET request using fetch with async/await
    console.log(this.$route.query.identityBooking);
    let identityBooking = '126110';
    // let identityBooking = this.$route.query.identityBooking;
    let nombreCliente = 'Schryver';
    const response = await fetch(
      `https://e7pmpg7z85.execute-api.us-west-2.amazonaws.com/prod/obtienedatosbooking?identityBooking=${identityBooking}&nombreCliente=${nombreCliente}` // anterior 120193
    );
    const data = await response.json();
    console.log((JSON.parse(data.JsonBooking)))
    this.bookingData = JSON.parse(data.JsonBooking);
  },

  // async asyncData () {
  //   const {data} = await axios.get('jsonObject')
  //   console.log('Data:' + data)
  //   return {data}

  // },


  // async asyncData({ params, $http }) {
  //     const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  //     return { post }
  //   },
}
</script>

<style>

</style>
