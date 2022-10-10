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
            <RowItem :item="i" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ArgonButton from "@/components/ArgonButton.vue";
  import RowItem from "./RowItem.vue";
  
  export default {
    name: "credit-cards",
    components: {
      ArgonButton,
      RowItem
    },
    data() {
      return {
          items: [
           {
                    name: "C6 Invoice",
                    type: "creditcard",
                    cardFlag: "mastercard",
                    finalNumberCard: "1234",
                    expirationDay: 15,
                    closingDay: 6,
                    limit: 35000.00,
                    pointsPerValue: 0.47,
                    invoices: [
                        {
                            month: 9,
                            year: 2022,
                            purchases: [
                                {
                                    value: 535.99,
                                    totalValue: 535.99,
                                    establishment: "new store eletronics",
                                    description: "headphone",
                                    category: "eletronic",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 10)
                                },
                                {
                                    value: 117.99,
                                    totalValue: 235.99,
                                    establishment: "fine fashion",
                                    description: "shirts",
                                    category: "clothes",
                                    numberOfInstallments: 2,
                                    installment: 1,
                                    date: new Date(2022, 8, 12)
                                },
                                {
                                    value: 83.32,
                                    totalvalue: 83.32,
                                    establishment: "food delivery",
                                    description: "lunch",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 15)
                                },
                                {
                                    value: 95.25,
                                    totalValue: 95.25,
                                    establishment: "food delivery",
                                    description: "dinner",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 18)
                                },
                                {
                                    value: 103.35,
                                    totalValue: 103.35,
                                    establishment: "food delivery",
                                    description: "dinner",
                                    category: "food",
                                    numberOfInstallments: 1,
                                    installment: 1,
                                    date: new Date(2022, 8, 20)
                                },
                                {
                                    value: 325.08,
                                    totalValue: 1300.35,
                                    establishment: "lollapaloza event",
                                    description: "entertainment",
                                    category: "entertainment",
                                    numberOfInstallments: 4,
                                    installment: 1,
                                    date: new Date(2022, 8, 22)
                                }
                            ]
                        }
                    ]
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
        //this.items.push({cardFlag: "mastercard", finalNumberCard : "7890"})
       // this.$router.push({ name: "newOrEditCardRoute" })
       this.$router.push("/creditcard/new")
      }
    }
  };
  </script>
  