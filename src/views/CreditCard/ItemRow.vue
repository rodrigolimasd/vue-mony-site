<template>
    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
        <img class="w-15 me-3 mb-0" :src="getLogoCard(item.cardFlag)" alt="logo" />
                 <!-- <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;{{item.finalNumberCard}}</h6> -->
                 <h6 class="mb-0 d-inline">{{item.name}}</h6>
                <div class="ms-auto">
                    <router-link
                    tag="a"
                    :to="'/creditcard/'+item.id"
                    class="fas fa-pencil-alt mx-1 text-dark cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit">
                </router-link>
                <a
                    tag="a"
                    class="fas fa-file mx-1 text-dark cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    @click="$emit('credit-card-invoice', value)"
                    title="Invoice">
                </a>
                <a
                    tag="a"
                    :to="'/creditcard/'+item.id"
                    class="fas fa-trash mx-1 text-dark cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    @click="$emit('credit-card-delete', value)"
                    title="Remove">
                </a>    
                </div>
     </div>
</template>

<script>

import mastercard from "@/assets/img/logos/mastercard.png";
import visa from "@/assets/img/logos/visa.png";

export default {
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