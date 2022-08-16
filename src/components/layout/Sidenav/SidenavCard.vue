<template>
  <div
    v-show="this.$store.state.layout !== 'landing'"
    class="card card-plain shadow-none"
    id="sidenavCard"
  >
    <div class="p-3 card-body text-center w-100 pt-0 version-app">
      <p class="text-xs font-weight-bold">Mony 0.0.1</p>
    </div>
  </div>
</template>
<script>
import img from "../../../assets/img/illustrations/icon-documentation.svg";

export default {
  name: "sidenav-card",
  props: ["textPrimary", "textSecondary", "iconClass"],
  data() {
    return {
      img
    };
  }
};
</script>

<style scoped>
 .version-app {
  color: gray;
 }
</style>