<template>
    <div class="col-1">
        <datepicker :wrapper-class="'wrapper-class-calendar mx-1'"
            :calendar-button-icon="'fa fa-calendar icon-calendar mx-3'" :value="purchase.date" format=""
            :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
        </datepicker>
    </div>
    <div class="col-2 text-nowrap overflow-hidden">
        <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">{{ purchase.product }}</h6>
            <p class="mb-0 text-sm font-weight-bold text-secondary">
                <span>{{ formateDate(purchase.date)}}</span>
            </p>
        </div>
    </div>
    <div class="col-2 text-nowrap overflow-hidden">
        <p class="text-center mb-0 text-sm font-weight-bold">
            {{purchase.category}}
        </p>
    </div>
    <div class="col-2 text-nowrap overflow-hidden">
        <p class="text-center mb-0 text-sm font-weight-bold">${{purchase.value}}</p>
    </div>
    <div class="col-2 align-middle text-nowrap overflow-hidden">
        <p class="text-center mb-0 text-sm font-weight-bold">{{purchase.establishment}}</p>
    </div>
    <div class="col-3 align-middle text-center text-nowrap overflow-hidden">
        <div class="d-flex align-items-center justify-content-center">
        <span class="me-2 text-xs font-weight-bold">{{purchase.installment}}/{{purchase.numberOfInstallments}}</span>
            <div>
                <div class="progress" style="width: 60px !important">
                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 50%;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs3-datepicker'

export default {
    props:['purchase'],
    components: {
        Datepicker
    },
    methods: {
        formateDate(date) {
            return date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear()
        }
    }

}
</script>