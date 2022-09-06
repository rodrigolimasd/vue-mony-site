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
              <div class="col-md-6">
                <button class="btn btn-outline-success float-end" @click="saveStorage">Save</button>
              </div>
            </div>
          </div>
          <div v-if="schedules.length === 0" class="card-body pt1 p1">
              <button class="btn btn-primary" @click="addSchedule">Add Schedule</button>
          </div>
          <div v-else class="card-body pt-1 p1">
            
              <slot v-for="y in schedulesByYear" :key="y.year">
                <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                    <div class="row">
                      <span class="card-title text-uppercase p-0 text-secondary">
                        <strong>{{ y.year }}</strong> - {{ getMonthName(m.month) }}

                       <div class="dropdown d-inline" v-if="isFirstOrLast({year: y.year, month: m.month})">
                          <button class="btn btn-outline-info btn-xs dropdown-toggle mb-0 ms-2" 
                                  style="padding: 0.275rem 1rem"
                                  type="button" 
                                  :id="y.year+getMonthName(m.month)+'_drpOpt'" data-bs-toggle="dropdown" aria-expanded="false">
                          </button>
                          <ul class="dropdown-menu" :aria-labelledby="y.year+getMonthName(m.month)+'_drpOpt'">
                            <li>
                              <button class="dropdown-item" type="button" @click="addAfterMonth({year: y.year, month: m.month})">
                                <i class="fa fa-arrow-down"></i> <span> Copy To Next Month (Beta) </span>
                                </button>
                            </li>
                            <li>
                              <button class="dropdown-item" type="button" 
                                  @click="deleteMonth({year: y.year, month: m.month})">
                                <i class="fa fa-trash"></i> 
                                  <span> 
                                    Remove This Month ({{getMonthName(m.month) }} - {{y.year}}) 
                                  </span> 
                                </button>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>

                    <!-- PlanItem -->
                    <div class="row" v-for="(e, index) in m.schedules" :key="index">
                      <div class="col-2 col-sm-1">
                         <div>
                          <datepicker :wrapper-class="'wrapper-class-calendar mx-1'" v-model="e.date" 
                                  :calendar-button-icon="'fa fa-calendar icon-calendar'"
                                  :value="e.date" format="" :calendar-button="true"
                                  data-bs-toggle="tooltip" title="Click To Change Date">
                          </datepicker>

                         <span class="text-nowrap text-bold text-secondary text-flex">
                              {{getDay(e.date)}}
                          </span>
                         </div>
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                          <input class="form-control form-control-md text-success text-md text-bold currency-input" 
                            v-model="e.income" placeholder="Income" v-decimal @change="updateSchedule(e)" 
                            :id="index+'inc'"
                            :name="index+'inc'" />
                      </div>
                      <div class="col-3 col-sm-2 p-1">
                          <input class="form-control form-control-md text-danger text-md text-bold currency-input"
                              v-model="e.expense" placeholder="Expense" v-decimal @change="updateSchedule(e)"
                              :id="index+'exp'"
                              :name="index+'exp'" />
                      </div>
                      <div class="col-4 col-sm-2 p-1">
                            <input type="text" class="form-control form-control-md text-md currency-input text-bold"
                                :value="e.balanceValue" disabled placeholder="Balance Value"
                                :id="index+'bal'"
                                :name="index+'bal'"> 
                      </div>
                      <div class="col-10 col-sm-4 p-1">
                              <input type="text" class="form-control text-primary text-md form-control-md text-end text-bold"
                              placeholder="Note" v-model.lazy="e.note"
                              :id="index+'not'"
                              :name="index+'not'">
                      </div>
                      <div class="col-2 col-sm-1 p-1">
                          <div class="dropdown float-end">
                              <button class="btn btn-outline-info btn-xs dropdown-toggle mb-0" type="button" 
                                      :id="index+'_drpOpt'" data-bs-toggle="dropdown" aria-expanded="false">
                              </button>
                              <ul class="dropdown-menu" :aria-labelledby="index+'_drpOpt'">
                                <li>
                                  <button class="dropdown-item" type="button" @click="addBeforeSchedule(e)">
                                      <i class="fa fa-arrow-up"></i> <span> Copy To Previous Day </span>
                                  </button>
                                </li>
                                <li>
                                  <button class="dropdown-item" type="button" @click="addAfterSchdule(e)">
                                    <i class="fa fa-arrow-down"></i> <span> Copy To Next Day </span>
                                    </button>
                                </li>
                                <li><button class="dropdown-item" type="button" @click="removeSchedule(e)">
                                  <i class="fa fa-trash"></i> <span> Remove Day </span> </button></li>
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
import { mapMutations } from 'vuex'
import Datepicker from 'vuejs3-datepicker'

import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  components: {
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
    schedules() {
      return this.$store.state.plan.schedules
    },
    schedulesByYear() {
      return this.groupSchedules(this.$store.state.plan.schedules)
    }
  },
   mounted() {
     //inti tooltip
     Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
          .forEach(tooltipNode => new Tooltip(tooltipNode))
  },
  methods: {
    ...mapMutations([
        'addSchedule',
        'addBeforeSchedule',
        'addAfterSchdule',
        'removeSchedule',
        'updateSchedule',
        'saveStorage',
        'addAfterMonth',
        'deleteMonth'
      ]),
    getDay: (date) => {
        return date.getDate()
    },
    getMonthName: (month) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ]
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
    },
    isFirstOrLast(item) {
      const {year, month} = item
      const size = this.$store.state.plan.schedules.length
      if(size > 0 ) {
        let first = this.$store.state.plan.schedules[0]
        let last = this.$store.state.plan.schedules[size-1]
        return first.date.getFullYear() === Number(year) && first.date.getMonth() === Number(month) ||
               last.date.getFullYear() === Number(year) && last.date.getMonth() === Number(month)
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.currency-input {
  padding-left: 3px
}

.wrapper-class-calendar {
  font-size: 16pt;
} 

.wrapper-class-calendar #calendar-div{
  display: none;
}

.icon-calendar {
    color: #11cdef !important;
}

.icon-calendar:hover {
    color: #0a7bb4 !important;
}

</style>