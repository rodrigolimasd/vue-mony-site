<template>
    <td>
        <div class="px-1 py-1 d-flex">
            <div class="me-2">
                <datepicker :wrapper-class="'wrapper-class-calendar mx-1'"
                    :calendar-button-icon="'fa fa-calendar icon-calendar'" :value="purchase.date" format=""
                    :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
                </datepicker>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{{ purchase.product }}</h6>
                <p class="mb-0 text-sm font-weight-bold text-secondary">
                    <span>{{ formateDate(purchase.date)}}</span>
                </p>
            </div>
        </div>
    </td>
    <td>
        <p class="text-center mb-0 text-sm font-weight-bold">
            {{purchase.category}}
        </p>
    </td>
    <td>
        <p class="text-center mb-0 text-sm font-weight-bold">${{purchase.value}}</p>
    </td>
    <td class="text-sm align-middle">
        <p class="text-center mb-0 text-sm font-weight-bold">{{purchase.establishment}}</p>
    </td>
    <td class="align-middle text-center">
        <div class="d-flex align-items-center justify-content-center">
            <span class="me-2 text-xs font-weight-bold">{{purchase.installment}}/{{purchase.numberOfInstallments}}</span>
            <div>
                <div class="progress" style="width: 60px !important">
                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 50%;"></div>
                </div>
            </div>
        </div>
    </td>

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