<template>
    <div class="card mt-4">
      <div class="card-header pb-0 p-3">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <h6 class="mb-0">Credit Cards</h6>
          </div>
          <div class="col-6 text-end">
            <argon-button color="dark" variant="gradient" @click="addCard">
              <i class="fas fa-plus me-2"></i>
              Add New Card
            </argon-button>
          </div>
        </div>
      </div>
      <div class="card-body p-3">
        <div class="row">
          <div class="col-md-6 mb-2" v-for="i in items" :key="i.finalNumbercard">
            <CreditCardRowItem :item="i" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ArgonButton from "@/components/ArgonButton.vue";
  import CreditCardRowItem from "./CreditCardRowItem.vue";
  
  export default {
    name: "credit-cards",
    components: {
      ArgonButton,
      CreditCardRowItem
    },
    data() {
      return {
          items: [
            {
                  cardFlag: "mastercard",
                  finalNumberCard: "1234"
            },
            {
                  cardFlag: "visa",
                  finalNumberCard: "4567"
            }
          ]
      }
    },
    methods: {
      addCard() {
        this.items.push({cardFlag: "mastercard", finalNumberCard : "7890"})
      }
    }
  };
  </script>
  