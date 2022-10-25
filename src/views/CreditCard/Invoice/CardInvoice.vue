<template>
    <div class="row">
        <div class="col-12">
            <div class="card-title text-uppercase text-center">
                <h5 class="mb-0">{{getMonthName(invoice.month)}} - {{invoice.year}}</h5>
                <hr class="my-1">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-1 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Date</h6>
        </div>
        <div class="col-2 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xs font-weight-bolder opacity-8">Product</h6>
        </div>
        <div class="col-2 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xs font-weight-bolder opacity-8">Category</h6>
        </div>
        <div class="col-2 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xs font-weight-bolder opacity-8">Value</h6>
        </div>
        <div class="col-2 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xs font-weight-bolder opacity-8">Establishment</h6>
        </div>
        <div class="col-3 text-nowrap overflow-hidden">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xs font-weight-bolder opacity-8">Installment/Qtd</h6>
        </div>
    </div>
    <hr>

    <div class="row mb-1" v-for="i in invoice.purchases" :key="i.description">
        <card-purchase  :purchase="i"></card-purchase>
    </div>

    <hr>
    <div class="row">
        <div class="col-12 text-end">
            <div class="numbers mx-3">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">Total</p>
                <h5 class="font-weight-bolder text-end text-success my-0 opacity-8">${{total}}</h5>
            </div>
        </div>
    </div>
    <hr>
                    
</template>

<script>
import CardPurchase from './CardPurchase.vue'

export default {
    props:['invoice'],
    components: {
        CardPurchase
    },
    computed: {
        total() {
            return this.invoice.purchases.map(a=> a.value).reduce((a,b) => a + b, 0)
        }
    },
    methods: {
        getMonthName(month) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
            return monthNames[month]
        }
    }
}
</script>