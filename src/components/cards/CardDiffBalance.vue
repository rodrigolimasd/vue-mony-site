<template>
        <argon-button
            :color="amountNumber > 0 ? 'success' : 'danger'"
            variant="outline"
            size="sm"
            class="btn-icon-only btn-rounded mb-0 me-3 align-items-center justify-content-center"
            >
            <i class="fas" :class="[amountNumber > 0 ? 'fa-arrow-up' : 'fa-arrow-down']" aria-hidden="true"></i>
        </argon-button>
        <small class="text-black opacity-8">{{ amountNumber }}</small>
        <div class="progress progress-xs my-2">
            <div class="progress-bar" :class="[amountNumber > 0 ? 'bg-success' : 'bg-warning']" style="width: 60%"></div>
        </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue"

export default {
    props: {
        amount: {
            required: true,
        }
    },
    components: {
        ArgonButton
    },
    computed: {
        amountNumber(){
            let _amount = Number(this.amount)
            return isNaN(_amount) ? 0 : _amount
        }
    }
}
</script>