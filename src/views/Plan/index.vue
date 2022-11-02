<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">

        <div class="card mb-4">
          <div class="card-header pb-4 p3">
            <div class="row">
              <div class="col-4 d-flex align-items-center">
                <h4 class="mb-0">Schedules</h4>
              </div>
              <div class="col-8 text-end">
                  <argon-button class="mx-2"
                      @click="saveStorage"
                      color="success" variant="gradient">
                      <i class="fas fa-check me-2"></i>
                      Save
                  </argon-button>
              </div>
            </div>
          </div>
          <div class="pt-3 pb-2 card-body">

              <button v-if="schedules.length === 0" class="btn btn-primary" @click="addSchedule">Add Schedule</button>

              <slot v-else v-for="y in schedulesByYear" :key="y.year">
                <slot v-for="m in y.months" :key="y.year+'-'+m.month">

                    <div class="row">
                      <hr>
                      <plan-month :yearGroup="y" :monthGroup="m"
                        @add-after-month="addAfterMonth"
                        @delete-month="deleteMonth" />
                    </div>
                    
                    <div v-for="(e, index) in m.schedules" :key="index"
                            class="row" :class="[index % 2 == 0 ? 'bg-light': '']">
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

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import PlanItem from './PlanItem.vue'
import PlanMonth from './PlanMonth.vue'
import ArgonButton from "@/components/layout/form/ArgonButton.vue"

export default {
  components: {
    ArgonButton,
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
