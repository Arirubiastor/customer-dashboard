<template>
  <div>
    <b-container class="test mt-4 mt-md-5" align-v="center">
      <b-row class="">
        <b-col align-self="center mt-md-4">
          <b-card class="card__login border border-primary">
            <b-card-header align="center" class="font-weight-bold h5 mt-0 pt-0"
              >Current Status</b-card-header
            >
            <b-card-text class="mt-3" align="center">
              <div v-for="(stage, index) in workflow" :key="index">
                <div v-if="stage.accomplishedDate != null">
                  {{ index }} {{ stage.stageVerbose }} {{ stage.accomplishedDate }}
                </div>
                <!-- <div v-for="step in stage" :key="step">
                  <div v-if="step.accomplishedDate != null">{{ step.stepVerbose }} {{ step.accomplishedDate }}</div>
                </div> -->
                <hr />
                <!-- TEST: {{ test }} <br /> -->

                <!-- <div v-for="step in stage.steps[0].steps" :key="step" :arrayDates="[step.accomplishedDate]">
                  {{ step.stepVerbose }}--{{ step.accomplishedDate }}: LAST DATE: {{ lastDate }}
                  ARRAYDATES:{{ arrayDates }}
                </div> -->
              </div>
              This shipment has reached the milestone "steps verbose ultima
              fecha" on "ultima fecha" This shipment is on its way to the
              milestone "first milestone"
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
              <div v-for="stage in workflow" :key="stage">
                {{ workflow.alarmDate }}
              </div>
            </b-card-text>
          </b-card>
          <!-- <b-card class="border border-primary mt-4"> -->
          <p class="text__input mt-3 mt-md-4 p-2">
            To see more information about this shipment enter the last 5 digits
            of the booking number
          </p>
          <form class="d-md-inline-flex w-100 mb-5">
            <b-form-input
              class="d-inline border border-primary"
              v-model="bookingValidation"
              placeholder="Enter the last 5 digits of the booking number"
              type="text"
              max="5"
            ></b-form-input>
            <!-- to="/booking-details"
            tag="nuxt-link" -->
            <b-button 
              to="/booking-details"
              tag="nuxt-link"
              variant="outline-primary"
              class="mt-4 mb-4 ml-md-4 mt-md-0"
              @click.native="checkBooking()"
              >Validate</b-button
            >
          </form>
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
    workflow: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bookingValidation: "",
      workflow: this.workflow,
      arrayDates: [],
    };
  },
  computed: {
    lastDate() {
      // return new Date(Math.max(step.accomplishedDate.map(e => new Date(e.MeasureDate))));
    },
    test() {
      var data = this.workflow;
      var sorted = data.sort(function (a, b) {
        return Date.parse(b.accomplishedDate) - Date.parse(a.accomplishedDate);
      });
    },
  },
  methods: {
    checkBooking() {
      if (this.bookingValidation === this.bookingData.booking ) {
        alert('done!')
      }
    }

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