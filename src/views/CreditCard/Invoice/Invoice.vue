<template>
    <div>
        <slot v-for="y in invoicesByYear" :key="y.year">
            <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                <div class="row">
                <hr>
                <span class="card-title text-uppercase p-0 text-primary">
                    <strong>{{ y.year }} - {{ getMonthName(m.month) }} </strong>
                </span>
                </div>
                
                <div v-for="(e, index) in m.purchases" :key="index"
                        class="row" :class="[index % 2 == 0 ? 'bg-light': '']">
                    <purchase-item :purchase="m.purchases[index]" />
                </div> 

                <div class="row">
                    <span class="card-title text-uppercase p-0 text-warning text-end">
                        <strong>Total $12345.00</strong>
                    </span>
                    <hr>
                </div>

            </slot>
        </slot>
    </div>
</template>

<script>
import PurchaseItem from './PurchaseItem.vue'

export default {
    props:['invoicesByYear'],
    components: {
        PurchaseItem
    },
    methods: {
        getMonthName: (month) => {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ]
            return monthNames[month]
        }
    }
}
</script>