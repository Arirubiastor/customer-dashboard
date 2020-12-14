<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <b-row>
          <b-col cols="4" class="font-weight-bold">Type</b-col>
          <b-col>{{ statusData.type }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Movement</b-col>
          <b-col>{{ statusData.movement }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Sales Executive Responsable</b-col
          >
          <b-col>{{ statusData.salesExecRes }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Operatons Executive Responsable</b-col
          >
          <b-col>{{ statusData.opsExecRes }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales ExecCor</b-col>
          <b-col>{{ statusData.salesExecCor }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Ops ExecCor</b-col>
          <b-col>{{ statusData.opsExecCor }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >DescriptionGoodsBkg</b-col
          >
          <b-col>{{ statusData.descriptionGoodsBkg }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Incoterm </b-col>
          <b-col>{{ statusData.incoterm }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item class="p-0">
        <b-row>
          <b-col>
            <b-button
              block
              class="p-3 font-weight-bold text-left"
              :class="visibleTramoBkg ? null : 'collapsed'"
              :aria-expanded="visibleTramoBkg ? 'true' : 'false'"
              aria-controls="collapse-tramoBkg"
              @click="visibleTramoBkg = !visibleTramoBkg"
              >TramoBkg
              <b-icon
                v-if="!visibleTramoBkg"
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
            </b-button>
            <b-collapse id="collapse-tramoBkg" v-model="visibleTramoBkg">
              <div v-for="itemTramoBkg in tramoBkg" :key="itemTramoBkg">
                <b-list-group>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >RouteType</b-col
                      >
                      <b-col>{{ itemTramoBkg.routeType }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >PortLoading</b-col
                      >
                      <b-col>{{ itemTramoBkg.portLoading }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >PortDischarge</b-col
                      >
                      <b-col>{{ itemTramoBkg.portDischarge }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">Vessel</b-col>
                      <b-col>{{ itemTramoBkg.vessel }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">etd</b-col>
                      <b-col>{{ itemTramoBkg.etd }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">eta</b-col>
                      <b-col>{{ itemTramoBkg.eta }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >FreeDaysOrigin</b-col
                      >
                      <b-col>{{ itemTramoBkg.freeDaysOrigin }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >freeDaysDestination</b-col
                      >
                      <b-col>{{ itemTramoBkg.freeDaysDestination }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-button
                    v-b-toggle="'collapse-2'"
                    class="m-0 p-3 font-weight-bold text-left"
                    @click="visibleBkgContenedor = !visibleBkgContenedor"
                    >bkgContenedor
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
                  </b-button>
                  <b-collapse id="collapse-2">
                    <div
                      v-for="itemBkgContenedor in itemTramoBkg.bkgContenedor"
                      :key="itemBkgContenedor"
                    >
                      <b-list-group>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Qty</b-col
                            >
                            <b-col>{{ itemBkgContenedor.qty }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Type</b-col
                            >
                            <b-col>{{ itemBkgContenedor.type }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Marks</b-col
                            >
                            <b-col>{{ itemBkgContenedor.marks }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >GrossWeight</b-col
                            >
                            <b-col>{{ itemBkgContenedor.grossWeight }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Volume</b-col
                            >
                            <b-col>{{ itemBkgContenedor.volume }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >DescriptionGoodsCont</b-col
                            >
                            <b-col>{{
                              itemBkgContenedor.descriptionGoodsCont
                            }}</b-col>
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
    };
  },

  created() {
    console.log(this.statusData);
  },
};
</script>

<style>
</style>