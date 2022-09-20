<template>
    <div class="col-2 col-sm-1">
        <div>
            <datepicker :wrapper-class="'wrapper-class-calendar mx-1'" v-model="value.date"
                :calendar-button-icon="'fa fa-calendar icon-calendar'" :value="value.date" format=""
                :calendar-button="true" data-bs-toggle="tooltip" title="Click To Change Date">
            </datepicker>

            <span class="text-nowrap text-bold text-secondary text-flex">
                {{getDay(value.date)}}
            </span>
        </div>
    </div>
    <div class="col-3 col-sm-2 p-1">
        <input type="text"
            class="form-control form-control-md text-success text-md text-bold text-end currency-input input-plan"
            v-model="value.income" placeholder="Income" @keydown.enter="focusNext" v-decimal
            @change="$emit('update-schedule', value)" />
    </div>
    <div class="col-3 col-sm-2 p-1">
        <input type="text"
            class="form-control form-control-md text-danger text-md text-end text-bold currency-input input-plan"
            v-model="value.expense" placeholder="Expense" @keydown.enter="focusNext" v-decimal
            @change="$emit('update-schedule', value)" />
    </div>
    <div class="col-4 col-sm-2 p-1">
        <input type="text" class="form-control form-control-md text-md currency-input text-end text-bold"
            :class="value.balanceValue < 0 ? 'text-danger' : 'text-success'" :value="value.balanceValue" disabled
            placeholder="Balance Value">
    </div>
    <div class="col-10 col-sm-4 p-1">
        <input type="text" class="form-control text-primary text-md form-control-md text-end text-bold input-plan"
            placeholder="Note" v-model.lazy="value.note" @keydown.enter="focusNext">
    </div>
    <div class="col-2 col-sm-1 py-2 px-3">
        <div class="dropdown float-end">
            <button class="btn btn-xs dropdown-toggle m-0 px-2 py-1 bg-gradient-success" type="button" 
                  data-bs-toggle="dropdown" aria-expanded="false" :id="index+'_drpOpt'">
           </button>
            <ul class="dropdown-menu" :aria-labelledby="index+'_drpOpt'">
                <li>
                    <button class="dropdown-item" type="button" @click="$emit('add-before-schedule', value)">
                        <i class="fa fa-arrow-up"></i> <span> Add To Previous Day </span>
                    </button>
                </li>
                <li>
                    <button class="dropdown-item" type="button" @click="$emit('add-after-schdule', value)">
                        <i class="fa fa-arrow-down"></i> <span> Add To Next Day </span>
                    </button>
                </li>
                <li><button class="dropdown-item" type="button" @click="$emit('remove-schedule', value)">
                        <i class="fa fa-trash"></i> <span> Remove Day </span> </button></li>
            </ul>
        </div>
    </div>
    <hr>
</template>

<script>
import Datepicker from 'vuejs3-datepicker'

export default {
    inheritAttrs:false,
    props: ['modelValue','index'],
    emits: ['update:modelValue', 'add-before-schedule', 'add-after-schdule', 'remove-schedule','update-schedule'],
    components: {
        Datepicker
    },
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        focusNext(item) {
            const inputs = Array.from(document.querySelectorAll('.input-plan'))
            const index = inputs.indexOf(item.target)

            if (index < inputs.length && ((index + 1) < inputs.length)) {
                inputs[index + 1].focus()
                inputs[index + 1].select()
            }
        },
        getDay: (date) => {
            return date.getDate()
        }
    }
}
</script>