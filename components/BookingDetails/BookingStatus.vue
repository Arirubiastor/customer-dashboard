<template>
  <div>
    <b-container class="mt-4">
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Status" active>
          <TabStatus />
        </b-tab>
        <b-tab title="Map">
          <TabMap />
        </b-tab>
        <b-tab title="Details">
          <TabDetails />
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>