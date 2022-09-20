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

                    
                    <div class="row" v-for="(e, index) in m.schedules" :key="index">
                      <plan-item v-model="m.schedules[index]" :index="index"
                       @update-schedule="updateSchedule"
                       @add-before-schedule="addBeforeSchedule"
                       @add-after-schdule="addAfterSchdule"
                       @remove-schedule="removeSchedule" />
                    </div>

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

import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import PlanItem from './PlanItem.vue'

export default {
  components: {
    PlanItem
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