<template>
  <div>
    <b-container class="mt-4 mt-md-5">
      <b-row class="test" align-v="center">
        <b-col align-self="center mt-md-4">
          <b-card class="card__login border border-primary">
            <b-card-header align="center" class="font-weight-bold h5 mt-0 pt-0"
              >Current Status</b-card-header
            >
            <b-card-text class="mt-3" align="center">
              This shipment has reached the milestone "steps fecha más alta" on
              "fecha"
            </b-card-text>
          </b-card>
          <b-card class="card__login border border-primary mt-4">
            <b-card-header align="center" class="font-weight-bold h5 pt-0"
              >Next Milestone</b-card-header
            >
            <!-- <h3>{{ bookingData.booking }}</h3> -->
            <b-card-text align="center" class="mt-3">
              Our following step towards shipment delivery is "wotkstep con
              alarma menor de todas" planned for "fecha"
            </b-card-text>
          </b-card>
          <!-- <b-card class="border border-primary mt-4"> -->
          <p class="text__input mt-3 mt-md-4 p-2">
            To see more information about this shipment enter the last 5 digits
            of the booking number
          </p>
          <div class="d-md-inline-flex w-100 mb-5">
            <b-form-input class="d-inline border border-primary"
            v-model="bookingValidation"
            placeholder="Enter the last 5 digits of the booking number"
          ></b-form-input>
          <b-button
            tag="nuxt-link"
            to="/booking-details"
            variant="outline-primary"
            class="mt-4 mb-4 ml-md-4 mt-md-0"
            >Validate</b-button
          >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bookingValidation: "",
    };
  },
};
</script>

<style lang="scss">
// .test {
//   height: calc(100vh - 176px);
// }

.text__input {
  font-weight: 500;
}

.card__login {
  // max-width: 800px;
}
</style>