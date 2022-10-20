<template>
    <div>
        <slot v-for="y in invoicesByYear" :key="y.year">
            <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                <div class="row">
                <hr>
                <span class="card-title text-uppercase p-0 text-secondary">
                    <strong>{{ y.year }}</strong> - {{ getMonthName(m.month) }}
                </span>
                </div>
                
                <!-- <div v-for="(e, index) in m.invoices" :key="index"
                        class="row" :class="[index % 2 == 0 ? 'bg-light': '']">
                <plan-item v-model="m.invoices[index]" :index="index" />
                </div>  -->

            </slot>
        </slot>
    </div>
</template>

<script>
export default {
    props:['invoicesByYear'],
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