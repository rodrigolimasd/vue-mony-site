<template>
     <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-12">
                        
                        <div class="card mb-4">
                            <div class="card-header pb-4 p-3">
                                <div class="row">
                                    <div class="col-4 d-flex align-items-center">
                                        <h4 class="mb-0">Invoices</h4>
                                    </div>
                                    <div class="col-8 text-end">
                                        <argon-button color="default"
                                                @click="back"
                                                variant="gradient" class="me-2">
                                            <i class="fas fa-arrow-left me-2"></i>
                                            Back
                                        </argon-button>
                                        <argon-button
                                            color="dark" variant="gradient">
                                            <i class="fas fa-plus me-2"></i>
                                            Add New Invoice
                                        </argon-button>
                                        <argon-button class="mx-2"
                                            color="success" variant="gradient">
                                            <i class="fas fa-check"></i>
                                            Save
                                        </argon-button>
                                    </div>
                                </div>
                            </div>
                            <div class="px-0 pt-3 pb-2 card-body">
                                <card-invoice></card-invoice>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-6">
                        <div class="row">

                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <credit-card :nameCard="creditCard.name"
                        :finalNumberCard="creditCard.finalNumberCard"
                        :cardFlag="creditCard.cardFlag" />
            </div>
        </div>

    </div>
</template>

<script>

import CreditCard from "@/components/cards/CreditCard.vue"
import CardInvoice from './CardInvoice.vue'
import ArgonButton from "@/components/layout/form/ArgonButton.vue"

export default {
    props:['id'],
    components: {
        ArgonButton,
        CreditCard,
        CardInvoice
    },
    data() {
        return {
            creditCard: {
            },
            invoicesByYear: [
                {
                    year: 2022,
                    months: [
                        {
                            month: 9,
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
                }
            ]
        }
    },
    methods: {
        back() {
            this.$router.push("/creditcard")
        }
    },
    mounted() {
        if(this.id) {
          this.creditCard = this.$store.state.creditcard.creditCards
                .find(a=> a.id === Number(this.id))
        }
    }
}
</script>