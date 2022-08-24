<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10">
        
                <!-- PlanCard -->
                <div class="card h-100 mb-4">
                    <div class="card-header pb-0 px-3">
                        <div class="row">
                            <div class="col-md-6">
                                <h6 class="mb-0">Schedule</h6>
                            </div>
                        </div>
                    </div>

                      <div class="card-body">
                            <slot v-for="y in schedulesByYear" :key="y.year">
                                <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                                    <h6 class="card-title text-uppercase p-0 text-secondary">
                                    <strong>{{ y.year }}</strong> - {{ m.month }}
                                    </h6>

                                    <div class="row" v-for="e in m.schedules" :key="e.date">
                                        <div class="col-2 col-sm-1">
                                            <datepicker v-model="e.date" :value="e.date" format="" ></datepicker>
                                            <span class="text-nowrap text-bold text-secondary text-flex">{{getDay(e.date)}}</span>
                                        </div>
                                        <div class="col-2">
                                            <CurrencyInput class="form-control" @change="updateBalance(e)"
                                                v-model="e.income" placeholder="Income" :options="currencyOptions" />
                                        </div>
                                        <div class="col-2">
                                            <input type="text" class="form-control" v-model="e.expense" @change="updateBalance(e)">
                                        </div>
                                        <div class="col-2">
                                            <input type="text" class="form-control" v-model="e.balanceValue">
                                        </div>
                                    </div>
                                </slot>
                            </slot>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import CurrencyInput from '../../components/CurrencyInput.vue'
import Datepicker from 'vuejs3-datepicker';

export default {
    components: {
        CurrencyInput,
        Datepicker
    },
    data() {
        return {
            currencyOptions: {
                    currency: 'USD', 
                    autoDecimalDigits: true
            }
        }
    },
    computed: {
         schedulesByYear() {
            return this.groupSchedules(this.$store.state.plan.schedules)
        }
    },
    methods: {
        getDay: (date) => {
            return date.getDate()
        },
        updateBalance(item){
            item.balanceValue = item.income - item.expense
        },
        groupSchedules(schedules) {
            let groupsByYear = schedules.reduce((g, sc) => {
            const _year = sc.date.getFullYear()
            if(!g[_year]) {
                g[_year] = []
            }
            g[_year].push(sc)
            return g
            }, {})

            return Object.keys(groupsByYear).map((year) => {
            return {
                year,
                months: this.groupByMonth(groupsByYear[year])
            }
            })
        },
        groupByMonth(list) {
            let groups = list.reduce((g, sc) => {
            const _month = sc.date.getMonth()
                if(!g[_month]) {
                g[_month] = []
                }
                g[_month].push(sc)
                return g
            }, {})

            return Object.keys(groups).map((month) => {
                return {
                month,
                schedules: groups[month]
                }
            })
        },
    }
}
</script>