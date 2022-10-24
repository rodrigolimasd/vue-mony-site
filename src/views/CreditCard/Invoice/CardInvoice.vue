<template>
    <div class="row">
        <div class="col-12">
            <div class="card-title text-uppercase text-center">
                <h5 class="mb-0">October - 2022</h5>
                <hr class="my-1">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-1">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Date</h6>
        </div>
        <div class="col-2">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Product</h6>
        </div>
        <div class="col-2">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Category</h6>
        </div>
        <div class="col-2">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Value</h6>
        </div>
        <div class="col-2">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Establishment</h6>
        </div>
        <div class="col-3">
            <h6 class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">Installment/Qtd</h6>
        </div>
    </div>
    <hr>

    <div class="row" v-for="i in purchases" :key="i.description">
        <card-purchase  :purchase="i"></card-purchase>
    </div>

    <hr>
    <div class="row">
        <div class="col-12 text-end">
            <div class="numbers mx-3">
                <p class="mb-0 text-sm text-uppercase font-weight-bold">Total</p>
                <h5 class="font-weight-bolder text-end text-success my-0">$1234.00</h5>
            </div>
        </div>
    </div>
    <hr>
                    
</template>

<script>
import CardPurchase from './CardPurchase.vue'

export default {
    components: {
        CardPurchase
    },
    data() {
        return {
            purchases: [
                        {
                            value: 535.99,
                            totalValue: 535.99,
                            establishment: "new store eletronics",
                            product: "AirPods Pro",
                            category: "eletronic",
                            numberOfInstallments: 1,
                            installment: 1,
                            date: new Date(2022, 8, 10)
                        },
                        {
                            value: 117.99,
                            totalValue: 235.99,
                            establishment: "fine fashion",
                            product: "2 T-Shirts",
                            category: "clothes",
                            numberOfInstallments: 2,
                            installment: 1,
                            date: new Date(2022, 8, 12)
                        },
                        {
                            value: 83.32,
                            totalvalue: 83.32,
                            establishment: "food delivery",
                            product: "Lunch Ifood",
                            category: "food",
                            numberOfInstallments: 1,
                            installment: 1,
                            date: new Date(2022, 8, 15)
                        },
                        {
                            value: 95.25,
                            totalValue: 95.25,
                            establishment: "food delivery",
                            product: "Dinner Ifood",
                            category: "food",
                            numberOfInstallments: 1,
                            installment: 1,
                            date: new Date(2022, 8, 18)
                        },
                        {
                            value: 103.35,
                            totalValue: 103.35,
                            establishment: "Outback",
                            product: "Dinner Outback",
                            category: "food",
                            numberOfInstallments: 1,
                            installment: 1,
                            date: new Date(2022, 8, 20)
                        },
                        {
                            value: 325.08,
                            totalValue: 1300.35,
                            establishment: "Gp Week",
                            product: "Tickets TwOnePilots",
                            category: "entertainment",
                            numberOfInstallments: 4,
                            installment: 1,
                            date: new Date(2022, 8, 22)
                        }
                    ]
        }
    }
}
</script>