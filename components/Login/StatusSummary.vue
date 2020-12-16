<template>
  <div>
    <b-container>
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