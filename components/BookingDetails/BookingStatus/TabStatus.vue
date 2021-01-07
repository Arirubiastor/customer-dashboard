<template>
  <div>
    <div class="status__container d-inline">
      <b-card class="status__container text-center pt-lg-5">
        <div v-for="(stage, index) in workflow" :key="index" class="d-inline">

          <div class="d-inline ml-1 mr-1" v-if="index != 0">
            <b-icon
              v-if="stage.accomplishedDate == '' || stage.accomplishedDate == null"
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
            <div class="d-inline position-absolute">
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
              v-if="index != lastOfArray"
              :target="'popover-target-' + index"
              triggers="click"
              placement="bottom"
              class="pb-4"
              :show="show"
            >
              <template #title>Details</template>
              Accomplished Date:<br /><b>{{ stage.accomplishedDate }}</b> Alarm
              Date:<br /><b>{{ stage.alarmDate }}</b>
            </b-popover>
            <b-popover
              v-else
              :target="'popover-target-' + index"
              triggers="click"
              placement="bottom"
              class="pb-4"
              :show="show"
            >
              <template #title>Details</template>
              On its way!<br />
              <p v-if="stage.alarmDate != null && stage.alarmDate != ''">
                Alarm Date:<br /><b>{{ stage.alarmDate }}</b>
              </p>
              <p v-else>
                <br /><b>{{ noAlarmDate }}</b>
              </p>
            </b-popover>
          </div>

          <!-- <div class="d-inline" v-if="index != 3"> -->
          <!-- <div class="d-inline" v-if="index != workflow.lenght - 1"> -->
          <div class="d-inline ml-2 mr-2" v-if="index != lastOfArray">
            <b-icon
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
          </div>
        </div>
        <!-- <b-skeleton class="status__skeleton" width="100%" variant="primary"></b-skeleton> -->
       <b-progress :value="100" variant="primary" :animated="animate" class="status__progress"></b-progress>
       <p>{{ guidePopover }}</p>
      </b-card>

      <!-- <b-icon
        icon="check-circle"
        variant="primary"
        style="width: 50px; height: 50px"
      ></b-icon>
      <b-icon
        icon="three-dots"
        variant="primary"
        style="width: 30px; height: 50px"
      ></b-icon>
      <b-icon
        icon="three-dots"
        variant="primary"
        style="width: 30px; height: 50px"
      ></b-icon>
      <b-icon
        icon="dash"
        variant="primary"
        style="width: 50px; height: 50px;"
      ></b-icon>
      <b-icon
        icon="arrow-right-circle"
        variant="primary"
        style="width: 50px; height: 50px"
      ></b-icon>
      <b-icon
        icon="dash-circle"
        variant="primary"
        style="width: 50px; height: 50px"
      ></b-icon>
      <b-icon
        icon="clock"
        variant="primary"
        style="width: 50px; height: 50px"
      ></b-icon>
      <b-icon
        icon="circle"
        variant="primary"
        style="width: 50px; height: 50px"
      ></b-icon> -->
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
      guidePopover: 'Click icon to see details'
    };
  },
  computed: {
    lastOfArray() {
      return this.workflow.length - 1;
    },
  },
  methods: {
    onDisable() {
        this.popover('disable')
      }
  }
};
</script>

<style lang="scss">
.status__container {
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.stage__title {
  top: 15rem;
}

.status__progress {
  margin-top: 4rem;
}
</style>