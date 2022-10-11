<template>
  <div class="card shadow-xl">
    <div
      class="overflow-hidden position-relative border-radius-xl"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="card-body position-relative z-index-1 p-3">
        <i class="fas fa-wifi text-white p-2" aria-hidden="true"></i>
        <h5
          class="text-white mt-4 mb-5 pb-2"
        >****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h5>
        <div class="d-flex">
          <div class="d-flex">
            <div class="me-4">
              <p class="text-white text-sm opacity-8 mb-0">{{ cardHolderText }}</p>
              <h6 class="text-white mb-0">{{ name }}</h6>
            </div>
            <div>
              <!-- <p class="text-white text-sm opacity-8 mb-0">{{ cardExpirationText }}</p>
              <h6 class="text-white mb-0">11/22</h6> -->
            </div>
          </div>
          <div class="w-20 d-flex align-items-end justify-content-end ms-auto">
            <argon-avatar class="w-60 mt-2" :img="img1" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import img from "../../assets/img/card-visa.jpg";
import img1 from "../../assets/img/logos/mastercard.png";

export default {
  name: "credit-card",
  components: {
    ArgonAvatar,
  },
  props: {
    cardHolderText: {
      type: String,
      default: "Card Name",
    },
    name: {
      type: String,
      default: "C6",
    },
    cardExpirationText: {
      type: String,
      default: "Expires",
    },
  },
  data() {
    return {
      img,
      img1,
    };
  },
};
</script>
