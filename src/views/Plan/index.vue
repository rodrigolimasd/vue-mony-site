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
                      <plan-month :yearGroup="y" :monthGroup="m"
                        @add-after-month="addAfterMonth"
                        @delete-month="deleteMonth" />
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
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import { mapMutations } from 'vuex'
import PlanItem from './PlanItem.vue'
import PlanMonth from './PlanMonth.vue'

export default {
  components: {
    PlanItem,
    PlanMonth
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
