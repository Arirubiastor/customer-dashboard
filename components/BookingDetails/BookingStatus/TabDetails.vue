<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <b-row>
          <b-col cols="4" class="font-weight-bold">Type</b-col>
          <b-col v-if="statusData.type != null && statusData.type != ''">{{ statusData.type }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Movement</b-col>
          <b-col v-if="statusData.movement != null && statusData.movement != ''">{{ statusData.movement }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Sales Executive Responsable</b-col
          >
          <b-col v-if="statusData.salesExecRes != null && statusData.salesExecRes != ''">{{ statusData.salesExecRes }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Operatons Executive Responsable</b-col>
          <b-col v-if="statusData.opsExecRes != null && statusData.opsExecRes != ''">{{ statusData.opsExecRes }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales ExecCor</b-col>
          <b-col v-if="statusData.salesExecCor != null && statusData.salesExecCor != ''">{{ statusData.salesExecCor }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Ops ExecCor</b-col>
          <b-col v-if="statusData.opsExecCor != null && statusData.opsExecCor != ''">{{ statusData.opsExecCor }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">DescriptionGoodsBkg</b-col
          >
          <b-col v-if="statusData.descriptionGoodsBkg != null && statusData.descriptionGoodsBkg != ''">{{ statusData.descriptionGoodsBkg }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Incoterm </b-col>
          <b-col v-if="statusData.incoterm != null && statusData.incoterm != ''">{{ statusData.incoterm }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
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
                      <b-col v-if="itemTramoBkg.routeType != null && itemTramoBkg.routeType != ''">{{ itemTramoBkg.routeType }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >PortLoading</b-col
                      >
                      <b-col v-if="itemTramoBkg.portLoading != null && itemTramoBkg.portLoading != ''">{{ itemTramoBkg.portLoading }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >PortDischarge</b-col
                      >
                      <b-col v-if="itemTramoBkg.portDischarge != null && itemTramoBkg.portDischarge != ''">{{ itemTramoBkg.portDischarge }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">Vessel</b-col>
                      <b-col v-if="itemTramoBkg.vessel != null && itemTramoBkg.vessel != ''">{{ itemTramoBkg.vessel }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">etd</b-col>
                      <b-col v-if="itemTramoBkg.etd != null && itemTramoBkg.etd != ''">{{ itemTramoBkg.etd }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold">eta</b-col>
                      <b-col v-if="itemTramoBkg.eta != null && itemTramoBkg.eta != ''">{{ itemTramoBkg.eta }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >FreeDaysOrigin</b-col
                      >
                      <b-col v-if="itemTramoBkg.freeDaysOrigin != null && itemTramoBkg.freeDaysOrigin != ''">{{ itemTramoBkg.freeDaysOrigin }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="md-4" class="font-weight-bold"
                        >freeDaysDestination</b-col
                      >
                      <b-col v-if="itemTramoBkg.freeDaysDestination != null && itemTramoBkg.freeDaysDestination != ''">{{ itemTramoBkg.freeDaysDestination }}</b-col>
                      <b-col v-else>{{ emptyString }}</b-col>
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
                            <b-col v-if="itemBkgContenedor.qty != null && itemBkgContenedor.qty != ''">{{ itemBkgContenedor.qty }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Type</b-col
                            >
                            <b-col v-if="itemBkgContenedor.type != null && itemBkgContenedor.type != ''">{{ itemBkgContenedor.type }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Marks</b-col
                            >
                            <b-col v-if="itemBkgContenedor.marks != null && itemBkgContenedor.marks != ''">{{ itemBkgContenedor.marks }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >GrossWeight</b-col
                            >
                            <b-col v-if="itemBkgContenedor.grossWeight != null && itemBkgContenedor.grossWeight != ''">{{ itemBkgContenedor.grossWeight }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >Volume</b-col
                            >
                            <b-col v-if="itemBkgContenedor.volume != null && itemBkgContenedor.volume != ''">{{ itemBkgContenedor.volume }}</b-col>
                            <b-col v-else>{{ emptyString }}</b-col>
                          </b-row>
                        </b-list-group-item>
                        <b-list-group-item>
                          <b-row>
                            <b-col cols="md-4" class="font-weight-bold"
                              >DescriptionGoodsCont</b-col
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

<style>
</style>