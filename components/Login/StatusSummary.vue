<template>
  <div>
    <b-container class="test mt-4 mt-md-5" align-v="center">
      <b-row class="">
        <b-col align-self="center mt-md-4">
          <!-- <b-card class="card__login border border-primary">
            <b-card-header align="center" class="font-weight-bold h5 mt-0 pt-0"
              >Current Status</b-card-header
            >
            <b-card-text class="mt-3" align="center">
              <div v-for="(stage, index) in workflow" :key="index">
                <div v-if="stage.accomplishedDate != null">
                  {{ index }} {{ stage.stageVerbose }} {{ stage.accomplishedDate }}
                </div>
                <hr />
              </div>
              This shipment has reached the milestone "steps verbose ultima
              fecha" on "ultima fecha" This shipment is on its way to the
              milestone "first milestone"
            </b-card-text>
          </b-card> -->
          
          <!-- <b-card class="card__login border border-primary mt-4">
            <b-card-header align="center" class="font-weight-bold h5 pt-0"
              >Next Milestone</b-card-header
            >
            <b-card-text align="center" class="mt-3">
              Our following step towards shipment delivery is "wotkstep con
              alarma menor de todas" planned for "fecha"
              <div v-for="stage in workflow" :key="stage">
                {{ workflow.alarmDate }}
              </div>
            </b-card-text>
          </b-card> -->
          
          <b-list-group class="mb-3 mb-md-4">
              <!-- <h5>El título de esta tabla</h5> -->
              <b-list-group-item>
                <b-row>
              <b-col cols="md-4" class="font-weight-bold">Route Type</b-col>
              <b-col v-if="bookingData.type != null && bookingData.type != ''">{{ bookingData.type }}</b-col>
              <b-col v-else>{{ emptyString }}</b-col>
            </b-row>
              </b-list-group-item>
          <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Main Transport</b-col>
          <b-col v-if="bookingData.movement != null && bookingData.movement != ''">{{ bookingData.movement }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRepOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Sales Representative Origin</b-col
          >
          <b-col>{{ bookingData.salesRepOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExecOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Origin</b-col>
          <b-col>{{ bookingData.opsExecOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRepDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative Destination</b-col>
          <b-col>{{ bookingData.salesRepDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExecDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Destination</b-col>
          <b-col>{{ bookingData.opsExecDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRep != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative</b-col>
          <b-col>{{ bookingData.salesRep }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExec != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service</b-col>
          <b-col>{{ bookingData.opsExec }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Description of Goods</b-col
          >
          <b-col v-if="bookingData.descriptionGoodsBkg != null && bookingData.descriptionGoodsBkg != ''">{{ bookingData.descriptionGoodsBkg }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Incoterm</b-col>
          <b-col v-if="bookingData.incoterm != null && bookingData.incoterm != ''">{{ bookingData.incoterm }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
            </b-list-group>

          <TabStatus :workflow="bookingData.workflow" />
          
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
            <!-- <b-button 
              to="/booking-details"
              tag="nuxt-link"
              variant="outline-primary"
              class="mt-4 mb-4 ml-md-4 mt-md-0"
              @click.native="checkBooking()"
              >Validate</b-button> -->
              <b-button 
              :to="`/booking-details/?uuidBooking=${this.$route.query.uuidBooking}&nombreCliente=SchryverPruebas`"
              tag="nuxt-link"
              variant="outline-primary"
              class="mt-4 mb-4 ml-md-4 mt-md-0"
              @click.native="checkBooking()"
              >Validate</b-button>
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