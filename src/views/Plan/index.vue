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
          <div class="card-body pt-1 p1">


              <slot v-for="y in schedulesByYear" :key="y.year">
                <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                    <h6 class="card-title text-uppercase p-0 text-secondary">
                      <strong>{{ y.year }}</strong> - {{ getMonthName(m.month) }}
                    </h6>

                    <!-- PlanItem -->
                    <div class="row" v-for="e in m.schedules" :key="e.note">
                      <div class="col-2 col-sm-1">
                         <h4 class="text-nowrap text-md text-secondary">{{getDay(e.date)}}</h4>
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                        <!-- <576px -->
                          <CurrencyInput class="form-control form-control-sm text-danger currency-input"
                              v-model="e.expense" placeholder="Expense" :options="currencyOptions" />
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                          <CurrencyInput class="form-control form-control-sm text-success currency-input" 
                            v-model="e.income" placeholder="Income" :options="currencyOptions" />
                      </div>
                      <div class="col-4 col-sm-2 p-1">
                          <CurrencyInput class="form-control form-control-sm currency-input" 
                            v-model="e.balanceValue" placeholder="Balance Value" :options="currencyOptions" />
                      </div>
                      <div class="col-10 col-sm-4 p-1">
                                 <input class="form-control text-primary text-md form-control-sm text-end" type="text" 
                              placeholder="Note" v-model="e.note">
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

export default {
  components: {
    CurrencyInput
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
    ...mapMutations(['addBeforeSchedule','addAfterSchdule','removeSchedule']),
    getDateFormated: (date) => {
        return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    },
    getDay: (date) => {
        return date.getDate()
    },
    getMonthName: (month) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month]
    },
    addBefore: (next) => {
        console.log(next)
        // let schedulesWithBefore = [...next]
        // this.schedules = [schedulesWithBefore, ...this.schedules]
    },
    addAfter(last) {
       console.log(last)
       console.log(this.schedules)
    //    let schedulesNew = [...this.schedules]
    //    schedulesNew.push(last)
    //    console.log(schedulesNew)
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
/* .dropdown-toggle::after {
    display: none;
} */
.currency-input {
  padding-left: 3px
}
</style>