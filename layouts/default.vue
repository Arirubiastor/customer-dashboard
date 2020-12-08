<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader/TheHeader";
import TheFooter from "~/components/TheFooter/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
html {
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

