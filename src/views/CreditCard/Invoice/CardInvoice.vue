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
        <div class="col-12">
            <table class="table mb-0 align-items-center">
                <thead>
                    <tr>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">
                            Product</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">
                            Category</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">
                            Value</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">
                            Establishment</th>
                        <th
                            class="text-center ps-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-8">
                            Installment/Qtd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in purchases" :key="i.description">
                        <card-purchase :purchase="i"></card-purchase>
                    </tr>
                </tbody>
                <tfoot style="border-color: #e9ecef;">
                    <tr>
                        <td colspan="5" class="text-end" style="border-bottom: none">
                            <div class="numbers mx-3">
                                <p class="mb-0 text-sm text-uppercase font-weight-bold">Total</p>
                                <h5 class="font-weight-bolder text-end text-success my-0">$1234.00</h5>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>


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
    }
}
</script>