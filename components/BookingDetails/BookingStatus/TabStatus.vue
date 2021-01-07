<template>
  <div>
    <div class="status__container d-inline">
      <b-card class="text-center">
        <div v-for="(stage, index) in workflow" :key="index" class="d-inline">
          <div class="d-inline">
            <!-- <p class="d-inline">{{ index }}: {{ stage.stageVerbose }}</p> -->
            <p class="d-inline">{{ index }}{{ workflow.lenght }}</p>
            <b-icon
            v-if="stage.accomplishedDate == '' || stage.accomplishedDate == null"
            icon="clock"
            variant="primary"
            style="width: 40px; height: 40px"
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

          <div class="d-inline" v-if="index != 3">
          <!-- <div class="d-inline" v-if="index != workflow.lenght - 1"> -->
            <b-icon
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
            <b-icon
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
            <b-icon
              class="mr-1"
              icon="reception-0"
              variant="primary"
              style="width: 40px; height: 70px"
            ></b-icon>
          </div>
        </div>
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

      

      <!-- <b-icon
        icon="check2"
        variant="primary"
        style="width: 80px; height: 80px"
        class="border border-primary rounded-circle icon-circle"
      ></b-icon>
      <b-icon
        icon="minecart-loaded"
        variant="primary"
        style="width: 80px; height: 80px"
        class="border border-primary rounded-circle icon-circle"
      ></b-icon> -->
      <!-- <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon> -->
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
    };
  },
};
</script>

<style lang="scss">
.numberCircle {
  width: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  border: 2px solid #666;
}

// .icon-circle {
//   border: 5px solid red;
// }
</style>