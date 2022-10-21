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
    <td class="align-middle text-center w-10">
        <div class="text-center px-3 py-1 d-flex justify-content-center align-items-center">
            <p class="mb-0 text-sm font-weight-bold">{{purchase.installment}}</p>
            <p class="mb-0 text-sm font-weight-bold">/</p>
            <p class="mb-0 text-sm font-weight-bold">{{purchase.numberOfInstallments}}</p>
            <button
                class="btn mb-0 btn-sm btn-outline-secondary btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit">
                <i class="fas fa-edit"></i>
            </button>
        </div>
        <div class="progress progress-xs my-1">
            <div class="progress-bar bg-success" :style="{width: '50%'}"></div>
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