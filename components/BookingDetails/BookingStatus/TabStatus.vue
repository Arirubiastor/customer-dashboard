<template>
  <div>
    <div class="status__container d-inline">
      <!------- Hide card on screens smaller than md / Horizontal version  ------->
      <b-card class="status__container text-center pt-lg-5 pb-1 pb-md-5 d-none d-md-block">
        <div v-for="(stage, index) in workflow" :key="index" class="d-inline">
          <!-- Dotted-line left -->
          <div class="d-inline ml-1 mr-1" v-if="index != 0">
            <b-icon
              v-if="
                stage.accomplishedDate == '' || stage.accomplishedDate == null
              "
              icon="reception-0"
              style="width: 40px; height: 70px; color: #6c757d"
            ></b-icon>
            <b-icon
              v-else
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
          </div>

          <div class="d-inline">
            <div class="d-inline" v-if="workflow.length === 1">
              <p class="stage__title">{{ stage.stageVerbose }}</p>
            </div>
            <div class="d-inline position-absolute" v-else>
              <p class="stage__title">{{ stage.stageVerbose }}</p>
            </div>
            <div class="d-inline" :id="'popover-target-' + index">
              <b-icon
                v-if="
                  stage.accomplishedDate == '' || stage.accomplishedDate == null
                "
                icon="clock"
                style="width: 40px; height: 40px; color: #6c757d"
                class="d-inline"
                focusable="false"
              ></b-icon>
              <b-icon
                v-else
                icon="check-circle"
                variant="primary"
                style="width: 40px; height: 40px"
                class="d-inline"
              ></b-icon>
            </div>
            <b-popover
              v-if="stage.accomplishedDate == '' || stage.accomplishedDate == null"
              :target="'popover-target-' + index"
              triggers="hover"
              placement="bottom"
              class="pb-4"
            >
            <template #title>{{ popoverTitle }}</template>
              Planned Date:<br />
              <b v-if="stage.alarmDate == ''">----</b>
              <b v-else>{{ stage.alarmDate }}</b>
              <br>
              Actual Date:<br />
              <b v-if="stage.accomplishedDate == ''">----</b>
              <b v-else>{{ stage.accomplishedDate }}</b>
            </b-popover>
            <b-popover
              v-else
              :target="'popover-target-' + index"
              triggers="hover"
              placement="bottom"
              class="pb-4"
              :show="show"
            >
              <template #title>{{ popoverTitle }}</template>
              Planned Date:<br />
              <b class="color-completed__popover" v-if="stage.alarmDate == ''">----</b>
              <b>{{ stage.alarmDate }}<br />
              </b> Actual Date:<br />
              <b class="color-completed__popover" v-if="stage.accomplishedDate == ''">----</b>
              <b v-else>{{ stage.accomplishedDate }}</b>
              
            </b-popover>
          </div>

          <!-- Dotted-line right -->
          <div class="d-inline ml-2 mr-2" v-if="index != lastOfArray">
            <!-- <b-icon
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon> -->
            <b-icon
              v-if="
                stage.accomplishedDate == '' || stage.accomplishedDate == null
              "
              icon="reception-0"
              style="width: 40px; height: 70px; color: #6c757d"
            ></b-icon>
            <b-icon
              v-else
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
          </div>
        </div>
        <b-progress
          :value="100"
          variant="primary"
          :animated="animate"
          class="status__progress"
        ></b-progress>
        <!-- <p>{{ guidePopover }}</p> -->
      </b-card>

      <!-------  Hide card on screens wider than md / Vertical version  ------->
      <b-card no-body class="status__container text-center pt-4 pt-lg-5 d-md-none">
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="pl-0">
              <div v-for="(stage, index) in workflow" :key="index">
                <!-- Dotted-line top -->
                <div v-if="index != 0">
                  <b-icon
                    v-if="
                      stage.accomplishedDate == '' ||
                      stage.accomplishedDate == null
                    "
                    icon="three-dots-vertical"
                    style="width: 40px; height: 70px; color: #6c757d"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="three-dots-vertical"
                    variant="primary"
                    style="width: 40px; height: 70px"
                  ></b-icon>
                </div>

                <!-- Icon -->
                <div>
                  <div class="d-inline" :id="'popover-target-' + index">
                    <b-icon
                      v-if="
                        stage.accomplishedDate == '' ||
                        stage.accomplishedDate == null
                      "
                      icon="clock"
                      style="width: 40px; height: 40px; color: #6c757d"
                      class="d-inline"
                    ></b-icon>
                    <b-icon
                      v-else
                      icon="check-circle"
                      variant="primary"
                      style="width: 40px; height: 40px"
                      class="d-inline"
                    ></b-icon>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col cols="8" class="pr-0 pl-0 text-left">
              <div v-for="(stage, index) in workflow" :key="index" class="workflow_text pb-3">
                <p class="stage__title">{{ stage.stageVerbose }}</p>
                <p v-if="stage.accomplishedDate != ''">Actual Date:<br>{{ stage.accomplishedDate }}</p>
                <p v-else>Actual Date:<br>----</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workflow: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mainProps: {
        blank: true,
        width: 30,
        height: 30,
        blankColor: "transparent",
      },
      show: true,
      noAlarmDate: "No alarm date yet",
      animate: true,
      popoverTitle: "Schedule"
    };
  },
  computed: {
    lastOfArray() {
      return this.workflow.length - 1;
    },
  },
  methods: {
    onDisable() {
      this.popover("disable");
    },
  },
};
</script>

<style lang="scss">
.status__container {
  padding-top: 5rem;
  // padding-bottom: 3.2rem;
}

.stage__title {
  top: 15rem;
  right: 2rem;
  font-size: 1.2rem;
  font-family: 'Abel', sans-serif;
  margin-bottom: 2px;
}

.status__progress {
  margin-top: 4rem;
}

.workflow_text {
  height: 118px;
}

// .color-completed__popover {
//   color:  #cc092f; // has to be $primary
// }
</style>