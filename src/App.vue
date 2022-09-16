<template>
  <div v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100">
  </div>
  <sidenav :custom_class="this.$store.state.mcolor"
    :class="[ this.$store.state.isTransparent, 'fixed-start']"
    v-if="this.$store.state.showSidenav"/>
    
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->
    <navbar v-if="this.$store.state.showNavbar"
      :class="[navClasses]"
      :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'"
      :minNav="navbarMinimize"
    />
    <router-view />
    <app-footer v-show="this.$store.state.showFooter" />
    <configurator :toggle="toggleConfigurator"
      :class="[
        this.$store.state.showConfig ? 'show' : '',
        this.$store.state.hideConfigButton ? 'd-none' : ''
      ]"
    />
  </main>
</template>
<script>
import Sidenav from "@/components/layout/Sidenav";
import Configurator from "@/components/layout/Configurator.vue";
import Navbar from "@/components/layout/Navbars/Navbar.vue";
import AppFooter from "@/components/layout/Footer.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute
      };
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  }
};
</script>
