<template>
    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
           <img class="w-10 me-3 mb-0" :src="getLogoCard(item.cardFlag)" alt="logo" />
           <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;{{item.finalNumberCard}}</h6>
           <router-link
               tag="a"
               :to="'/creditcard/'+item.id"
               class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
               data-bs-toggle="tooltip"
               data-bs-placement="top"
               title="Edit">
           </router-link>
           <!-- <router-link tag="li" to="/user/1" class="item-lista">User 1</router-link> -->
           <span class="sr-only">Edit</span>
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