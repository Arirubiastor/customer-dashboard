<template>
  <div>
    <b-container>
      <b-card no-body>
        <h3>Booking</h3>
        <p>
          {{ bookingData.booking }}
        </p>
      </b-card>
      <b-card>
        <h3>Shipper</h3>
        <p>
          {{ bookingData.shipper }}
        </p>
      </b-card>
      <b-card>
        <h3>Consignee</h3>
        <p>
          {{ bookingData.consignee }}
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
};
</script>

<style>
</style>