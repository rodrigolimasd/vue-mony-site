<template>
    <div class="col-md-1 col-sm-3">
        <div>
            <datepicker :wrapper-class="'wrapper-class-calendar mx-1'"
                :calendar-button-icon="'fa fa-calendar icon-calendar'" :value="purchase.date" format=""
                :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
            </datepicker>

            <span class="text-nowrap text-bold text-secondary text-flex">
                {{purchase.date.getDate()}}
            </span> 
        </div>
    </div>
    <div class="col-md-2 col-sm-2 p-1">
        <input type="text"
            class="form-control form-control-md text-md text-bold"
            :value="purchase.value" placeholder="Value" v-decimal />
    </div>
    <div class="col-md-3 col-sm-2 p-1">
        <input type="text"
            class="form-control form-control-md text-md text-bold"
            :value="purchase.establishment" placeholder="Establishment" />
    </div>
    <div class="col-md-2 col-sm-2 p-1">
        <input type="text"
            class="form-control form-control-md text-md text-bold"
            :value="purchase.description" placeholder="Description" />
    </div>
    <div class="col-md-1 col-sm-2 p-1">
        <input type="number"
            class="form-control form-control-md text-md text-bold"
            :value="purchase.installment" placeholder="Installment" />
    </div>
    <div class="col-md-1 col-sm-2 p-1">
        <input type="number"
            class="form-control form-control-md text-md text-bold"
            :value="purchase.numberOfInstallments" placeholder="Number Of Installments" />
    </div>
</template>

<script>
import Datepicker from 'vuejs3-datepicker'

export default {
    props:['purchase'],
    components: {
        Datepicker
    },
}
</script>