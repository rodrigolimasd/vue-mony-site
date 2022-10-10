<template>
     <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <img class="w-10 me-3 mb-0" :src="getLogoCard(item.cardFlag)" alt="logo" />
              <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;{{item.finalNumberCard}}</h6>
              <i
                class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Edit">
            </i>
              <span class="sr-only">Edit</span>
            </div>
</template>

<script>

import mastercard from "@/assets/img/logos/mastercard.png";
import visa from "@/assets/img/logos/visa.png";

export default {
    name: "credit-cards-row-item",
    props:['item'],
    data() {
      return {
        mastercard,
        visa,
      }
    },
    methods: {
        getLogoCard(name) {
            if(name === 'visa') {
                return visa
            } else {
                return mastercard
            }
        }
    }
}

</script>