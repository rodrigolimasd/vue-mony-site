<template>
  <div class="card shadow-xl">
    <div
      class="overflow-hidden position-relative border-radius-xl"
    >
      <span class="mask bg-gradient-secondary"></span>
      <div class="card-body position-relative z-index-1 p-3">
        <i class="fas fa-wifi text-white p-2" aria-hidden="true"></i>
        <h5
          class="text-white mt-4 mb-5 pb-2"
        >****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;{{ finalNumberCard }}</h5>
        <div class="d-flex">
          <div class="d-flex">
            <div class="me-4">
              <p class="text-white text-sm opacity-8 mb-0">Card Name</p>
              <h6 class="text-white mb-0">{{ nameCard }}</h6>
            </div>
            <div>
              <!-- <p class="text-white text-sm opacity-8 mb-0">{{ cardExpirationText }}</p>
              <h6 class="text-white mb-0">11/22</h6> -->
            </div>
          </div>
          <div class="w-20 d-flex align-items-end justify-content-end ms-auto">
            <argon-avatar class="w-60 mt-2" :img="getcardFlag()" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import mastercad from "@/assets/img/logos/mastercard.png";
import visa from "@/assets/img/logos/visa.png";

export default {
  name: "credit-card",
  components: {
    ArgonAvatar,
  },
  //props: ['finalNumberCard','nameCard'],
  props: {
    finalNumberCard: {
      type: String,
      default: "0000"
    },
    nameCard: {
      type: String
    },
    cardFlag: {
      type: String,
      default: "mastercard"
    }
  },
  data() {
    return {
      visa,
      mastercad
    }
  },
  methods: {
    getcardFlag(){
      return this.cardFlag === 'mastercard' ? mastercad : visa
    }
  }
};
</script>
