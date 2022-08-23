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
          <div v-if="schedules.length === 0" class="card-body pt1 p1">
              <button class="btn btn-primary" @click="addSchedule">Add Schedule</button>
          </div>
          <div v-else class="card-body pt-1 p1">
            
              <slot v-for="y in schedulesByYear" :key="y.year">
                <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                    <h6 class="card-title text-uppercase p-0 text-secondary">
                      <strong>{{ y.year }}</strong> - {{ getMonthName(m.month) }}
                    </h6>

                    <!-- PlanItem -->
                    <div class="row" v-for="e in m.schedules" :key="e.note">
                      <div class="col-2 col-sm-1">
                         <datepicker v-model="e.date" :value="e.date" format="" ></datepicker>

                         <span class="text-nowrap text-bold text-secondary text-flex">{{getDay(e.date)}}</span>
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                          <CurrencyInput class="form-control form-control-sm text-success text-bold currency-input" 
                            v-model="e.income" placeholder="Income" :options="currencyOptions" />
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                          <CurrencyInput class="form-control form-control-sm text-danger text-bold currency-input"
                              v-model.lazy="e.expense" placeholder="Expense" :options="currencyOptions" v-on:blur="updateSchedule(e)" />
                      </div>
                      <div class="col-4 col-sm-2 p-1">
                          <CurrencyInput class="form-control form-control-sm currency-input text-bold" 
                            v-model.lazy="e.balanceValue" placeholder="Balance Value" :options="currencyOptions" />
                      </div>
                      <div class="col-10 col-sm-4 p-1">
                                 <input class="form-control text-primary text-md form-control-sm text-end text-bold" type="text" 
                              placeholder="Note" v-model.lazy="e.note">
                      </div>
                      <div class="col-2 col-sm-1 p-1">
                          <div class="dropdown float-end">
                              <button class="btn btn-outline-info btn-xs dropdown-toggle" type="button" 
                                      id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li>
                                  <button class="dropdown-item" type="button" @click="addBeforeSchedule(e)">
                                      <i class="fa fa-arrow-up"></i> <span> New Line Above </span>
                                  </button>
                                </li>
                                <li>
                                  <button class="dropdown-item" type="button" @click="addAfterSchdule(e)">
                                    <i class="fa fa-arrow-down"></i> <span> New Line Below </span>
                                    </button>
                                </li>
                                <li><button class="dropdown-item" type="button" @click="removeSchedule(e)">
                                  <i class="fa fa-trash"></i> <span> Remove</span> </button></li>
                              </ul>
                          </div>
                      </div>
                      <hr>
                    </div>
                    <!-- PlanItem END -->

                </slot>
              </slot>


          </div>
        </div>
        <!-- PlanCard END -->


      </div>
    </div>
  </div>
</template>

<script>
import CurrencyInput from '../../components/CurrencyInput.vue'
import { mapMutations } from 'vuex'
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
    };
  },
  computed: {
    schedules() {
      return this.$store.state.plan.schedules
    },
    schedulesByYear() {
      return this.groupSchedules(this.$store.state.plan.schedules)
    }
  },
  methods: {
    ...mapMutations(['addSchedule','addBeforeSchedule','addAfterSchdule','removeSchedule','updateSchedule']),
    getDay: (date) => {
        return date.getDate()
    },
    getMonthName: (month) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month]
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
    }
  }
};
</script>

<style scoped>
.currency-input {
  padding-left: 3px
}

.vue-datepicker {
   min-width: 20px !important;
   border: none !important;
   padding: 2px !important;
}

</style>