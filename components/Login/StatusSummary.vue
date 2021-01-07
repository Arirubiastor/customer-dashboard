<template>
  <div>
    <b-container>
    <h1 class="text-center">Login page</h1>
      <b-card>
        <h3>Current Status</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad facilis
          voluptatem blanditiis deleniti temporibus, cumque recusandae.
        </p>
      </b-card>
      <b-card>
        <h3>Expected delivery time</h3>
        <h3>{{ bookingData.booking }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad facilis
          voluptatem blanditiis deleniti temporibus, cumque recusandae.
        </p>
      </b-card>
    <b-button tag="nuxt-link" to="/booking-details" variant="outline-primary" class="mt-4">Booking Details</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>