<template>
     <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="row mt-4">
                    <div class="col-12">
                        <card-invoice></card-invoice>
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

export default {
    props:['id'],
    components: {
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