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
            <p class="mb-0 text-xs ms-1 font-weight-bold text-secondary">
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
        <div class="d-flex flex-column justify-content-center">
            <h6 class="mb-0 text-sm">${{purchase.value}}</h6>
            <p class="mb-0 mx-2 text-xs font-weight-bold text-secondary" v-if="purchase.numberOfInstallments > 1">
                <span>Total ${{purchase.totalValue}}</span>
            </p>
        </div>
    </div>
    <div class="col-2 align-middle text-nowrap overflow-hidden">
        <p class="text-center mb-0 text-sm font-weight-bold">{{purchase.establishment}}</p>
    </div>
    <div class="col-3 align-middle text-center text-nowrap overflow-hidden">
        <div class="d-flex align-items-center justify-content-center">
            <span class="me-2 text-xs font-weight-bold">{{purchase.installment}}/{{purchase.numberOfInstallments}}</span>
            <div style="width: 50px !important">
                <div class="progress" v-if="purchase.numberOfInstallments > 1">
                    <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" :style="`width: ${calcPercent(purchase.installment, purchase.numberOfInstallments)}%;`"></div>
                </div>
            </div>

            <button class="btn btn-xs dropdown-toggle m-0 ms-2 px-2 py-1 bg-gradient-success opacity-7" type="button" 
                  data-bs-toggle="dropdown" aria-expanded="false">
           </button>

            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                    <i class="fa fa-edit"></i> <span> Edit </span>
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  <i class="fa fa-trash"></i> <span> Remove </span>
                  </button>
              </li>
            </ul>
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
            let month = date.getMonth()+1;
            return date.getDate()+"/"+month+"/"+date.getFullYear()
        },
        calcPercent(installment, numberOfInstallments){
            return installment / numberOfInstallments * 100
        }
    }

}
</script>