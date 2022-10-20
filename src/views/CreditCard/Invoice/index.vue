<template>
     <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-lg-8">
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="card pb-4">
                            <div class="card-header pb-0 p-3">
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
                                            @click="addAccount"
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
                            <div class="card-body p3 pb-0 mb-0">
                                <slot v-for="y in invoicesByYear" :key="y.year">
                                    <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                                        <div class="row">
                                        <hr>
                                        <invoice-month :yearGroup="y" :monthGroup="m" />
                                        </div>
                                        
                                        <!-- <div v-for="(e, index) in m.schedules" :key="index"
                                                class="row" :class="[index % 2 == 0 ? 'bg-light': '']">
                                        <plan-item v-model="m.schedules[index]" :index="index"
                                        @update-schedule="updateSchedule"
                                        @add-before-schedule="addBeforeSchedule"
                                        @add-after-schdule="addAfterSchdule"
                                        @remove-schedule="removeSchedule" />
                                        </div> -->

                                    </slot>
                                </slot>
                            </div>
                            <div class="card-footer pt-4">
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

import ArgonButton from "@/components/ArgonButton.vue"
import CreditCard from "@/components/cards/CreditCard.vue"
import InvoiceMonth from './InvoiceMonth.vue'

export default {
    props:['id'],
    components: {
        ArgonButton,
        CreditCard,
        InvoiceMonth
    },
    data() {
        return {
            creditCard: {
            },
            invoicesByYear: [
                {
                    year: "2022",
                    months: [
                        {
                            month: 9,
                            invoices: [

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