<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header pb-0 p-3">
                            <div class="row">
                            <div class="col-6 d-flex align-items-center">
                                <h6 class="mb-0">Credit Cards</h6>
                            </div>
                            <div class="col-6 text-end">
                                <argon-button color="dark" variant="gradient" @click="add">
                                <i class="fas fa-plus me-2"></i>
                                Add New Card
                                </argon-button>
                            </div>
                            </div>
                        </div>
                        <div class="card-body p-3">
                            <div class="row">
                                <div class="col-md-6 mb-2" v-for="i in items" :key="i.finalNumbercard">
                                    <ItemRow :item="i" 
                                        @edit="edit(i)"
                                        @delete="remove(i)" 
                                        @invoice="invoice(i)"/>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div class="col-12 mt-2">
                    <consumption-room-chart />
                </div>
              </div>
            </div>
            <div class="col-4">
                <orders-card />
            </div>
        </div>
        <div class="row">
            <div class="col-8">
            </div>
        </div>
    </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import OrdersCard from "@/components/cards/OrdersCard.vue";
import ConsumptionRoomChart from '@/components/charts/ConsumptionRoomChart.vue';
import ItemRow from "./ItemRow.vue"
import { mapMutations } from 'vuex'

export default {
    components: {
      ArgonButton,
      ItemRow,
      OrdersCard,
      ConsumptionRoomChart
    },
    computed: {
        items() {
            return this.$store.state.creditcard.creditCards
        }
    },
    methods: {
        ...mapMutations([
            'removeCreditCard'
        ]),
        add() {
            this.$router.push("/creditcard/new")
        },
        edit(card) {
            this.$router.push(`/creditcard/${card.id}`)
        },
        remove(card) {
           this.removeCreditCard(card)
        },
        invoice(card) {
            this.$router.push(`/creditcard/${card.id}/invoice`)
        }
    }
}
</script>