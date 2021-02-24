<template>
  <div>
    <b-list-group class="details-table">
      <!-- <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Route Type</b-col>
          <b-col v-if="statusData.type != null && statusData.type != ''">{{ statusData.type }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item> -->
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Main Transport</b-col>
          <b-col v-if="statusData.movement != null && statusData.movement != ''">{{ statusData.movement }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.salesRepOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Sales Representative Origin</b-col
          >
          <b-col>{{ statusData.salesRepOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.opsExecOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Origin</b-col>
          <b-col>{{ statusData.opsExecOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.salesRepDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative Destination</b-col>
          <b-col>{{ statusData.salesRepDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.opsExecDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Destination</b-col>
          <b-col>{{ statusData.opsExecDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.salesRep != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative</b-col>
          <b-col>{{ statusData.salesRep }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="statusData.opsExec != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service</b-col>
          <b-col>{{ statusData.opsExec }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Description of Goods</b-col
          >
          <b-col v-if="statusData.descriptionGoodsBkg != null && statusData.descriptionGoodsBkg != ''">{{ statusData.descriptionGoodsBkg }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Incoterm</b-col>
          <b-col v-if="statusData.incoterm != null && statusData.incoterm != ''">{{ statusData.incoterm }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item class="p-0">
        <b-row>
          <b-col>
            <b-button
              block
              class="show-details__button py-1 px-3 font-weight-bold text-left table-fields"
              :class="visibleTramoBkg ? null : 'collapsed'"
              :aria-expanded="visibleTramoBkg ? 'true' : 'false'"
              aria-controls="collapse-tramoBkg"
              @click="visibleTramoBkg = !visibleTramoBkg"
              >Route Details
              <div>
                <b-icon
                v-if="!visibleTramoBkg"
                icon="plus-square"
                aria-label="Show Details"
                class="ml-0"
              ></b-icon>
              <b-icon
                v-else
                icon="dash-square"
                aria-label="Hide Details"
              ></b-icon>
              </div>
              
            </b-button>
            <b-collapse id="collapse-tramoBkg" v-model="visibleTramoBkg">
              <div v-for="itemTramoBkg in tramoBkg" :key="itemTramoBkg">
                <b-list-group>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >Transport Mode</b-col
                      >
                      <b-col v-if="itemTramoBkg.routeType != null && itemTramoBkg.routeType != ''">{{ itemTramoBkg.routeType }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        ><span v-if="itemTramoBkg.routeType === 'Truck'">Place</span>
                        <span v-else-if="itemTramoBkg.routeType === 'Air'">Airport</span>
                        <span v-else-if="itemTramoBkg.routeType === 'Sea'">Port</span>
                        of Loading</b-col
                      >
                      <b-col v-if="itemTramoBkg.loading != null && itemTramoBkg.loading != ''">{{ itemTramoBkg.loading }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        ><span v-if="itemTramoBkg.routeType === 'Truck'">Place</span>
                        <span v-else-if="itemTramoBkg.routeType === 'Air'">Airport</span>
                        <span v-else-if="itemTramoBkg.routeType === 'Sea'">Port</span>
                         of Discharge</b-col
                      >
                      <b-col v-if="itemTramoBkg.discharge != null && itemTramoBkg.discharge != ''">{{ itemTramoBkg.discharge }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item v-if="itemTramoBkg.vessel != null">
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">Vessel</b-col>
                      <b-col v-if="itemTramoBkg.vessel != null && itemTramoBkg.vessel != ''">{{ itemTramoBkg.vessel }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item v-if="itemTramoBkg.flight != null">
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">Flight</b-col>
                      <b-col v-if="itemTramoBkg.flight != null && itemTramoBkg.flight != ''">{{ itemTramoBkg.flight }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item v-if="itemTramoBkg.truckType != null">
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">Truck Type</b-col>
                      <b-col v-if="itemTramoBkg.truckType != null && itemTramoBkg.truckType != ''">{{ itemTramoBkg.truckType }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">ETD</b-col>
                      <b-col v-if="itemTramoBkg.etd != null && itemTramoBkg.etd != ''">{{ itemTramoBkg.etd }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">ETA</b-col>
                      <b-col v-if="itemTramoBkg.eta != null && itemTramoBkg.eta != ''">{{ itemTramoBkg.eta }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item v-if="itemTramoBkg.freeDaysOrigin != null">
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >Free Days at Origin</b-col
                      >
                      <b-col>{{ itemTramoBkg.freeDaysOrigin }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item v-if="itemTramoBkg.freeDaysDestination != null">
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >Free Days at Destination</b-col
                      >
                      <b-col>{{ itemTramoBkg.freeDaysDestination }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-button
                    v-b-toggle="'collapse-2'"
                    class="show-details__button m-0 py-1 px-3 font-weight-bold text-left table-fields"
                    @click="visibleBkgContenedor = !visibleBkgContenedor"
                    v-if="bkgContenedor == null"
                    >Container Details
                    <div>
                      <b-icon
                      v-if="!visibleBkgContenedor"
                      icon="plus-square"
                      aria-label="Show Details"
                      class="mr-0"
                    ></b-icon>
                    <b-icon
                      v-else
                      icon="dash-square"
                      aria-label="Hide Details"
                      class="mr-0"
                    ></b-icon>
                    </div>
                  </b-button>
                  <b-button
                    class="show-details__button m-0 p-3 font-weight-bold text-left"
                    v-else disabled
                    >Container Details (No details)
                    <b-icon
                      icon="plus-square"
                      aria-label="Show Details"
                      class="mr-0"
                    ></b-icon>
                  </b-button>
                  <b-collapse id="collapse-2">
                    <div
                      v-for="itemBkgContenedor in itemTramoBkg.bkgContenedor"
                      :key="itemBkgContenedor"
                    >
                      <b-list-group>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              >
                              <b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                            Quantity</b-col
                            >
                            <b-col v-if="itemBkgContenedor.qty != null && itemBkgContenedor.qty != ''">{{ itemBkgContenedor.qty }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              ><b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                              Type</b-col
                            >
                            <b-col v-if="itemBkgContenedor.type != null && itemBkgContenedor.type != ''">{{ itemBkgContenedor.type }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              ><b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                              Marks</b-col
                            >
                            <b-col v-if="itemBkgContenedor.marks != null && itemBkgContenedor.marks != ''">{{ itemBkgContenedor.marks }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              ><b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                              Gross Weight</b-col
                            >
                            <b-col v-if="itemBkgContenedor.grossWeight != null && itemBkgContenedor.grossWeight != ''">{{ itemBkgContenedor.grossWeight }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              ><b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                              Volume</b-col
                            >
                            <b-col v-if="itemBkgContenedor.volume != null && itemBkgContenedor.volume != ''">{{ itemBkgContenedor.volume }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold pl-1"
                              ><b-icon
                              icon="chevron-compact-right"
                              aria-label="Show Details"
                              class="mr-0 mr-md-0 ml-1 ml-md-1 mt-1"
                              name="icon"
                            ></b-icon>
                              Description of Goods</b-col
                            >
                            <b-col
                              v-if="itemBkgContenedor.descriptionGoodsCont != null && itemBkgContenedor.descriptionGoodsCont != ''">{{ itemBkgContenedor.descriptionGoodsCont }}
                            </b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </b-collapse>
                </b-list-group>
              </div>
            </b-collapse>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    statusData: {
      type: Object,
      required: true,
    },
    tramoBkg: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visibleTramoBkg: false,
      visibleBkgContenedor: false,
      emptyString: '---',
    };
  },

  created() {
    console.log(this.statusData);
  },
};
</script>

<style lang="scss">
.show-details__button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.details-table {
  .list-group-item {
  padding-top: .25rem;
  padding-bottom: .25rem;
  }
}
</style>