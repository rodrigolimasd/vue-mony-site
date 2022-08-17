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
          <div class="card-body pt-4 p3">
            <h6 class="text-uppercase text-body text-xs 
                    font-weight-bolder mb-3">
              August 2022
            </h6>

            <!-- PlanItem -->

            <div class="row" v-for="e in schedules" :key="e.note">
               <div class="col-1">
                    <h5 class="">{{getDay(e.date)}}</h5>
               </div>
               <div class="col-2">
                 <div class="d-flex flex-column">
                    <h6 class="mb-1 text-md text-danger text-end">{{$filters.money(e.expense)}}</h6>
                  </div>
               </div>
               <div class="col-2">
                  <div class="d-flex flex-column ">
                    <h6 class="mb-1 text-md text-end text-success">{{$filters.money(e.income)}}</h6>
                  </div>
               </div>
               <div class="col-2">
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-md text-success text-end">{{$filters.money(e.balanceValue)}}</h6>
                  </div>
               </div>
               <div class="col-3">
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-md text-primary text-end">{{e.note}}</h6>
                  </div>
               </div>
               <div class="col-1">
                  <argon-button color="success" variant="outline" size="xs" 
                        class="btn mb-2">
                    <i class="fas fa-arrow-up" @click="addBeforeSchedule(e)" aria-hidden="true"></i>
                  </argon-button>
                   <argon-button color="success" @click="addAfterSchdule(e)" variant="outline" size="xs"
                        class="btn mb-2">
                    <i class="fas fa-arrow-down" aria-hidden="true"></i>
                  </argon-button>
               </div>
               <hr>
            </div>

            <!-- PlanItem END -->

          </div>
        </div>
        <!-- PlanCard END -->

      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import { mapMutations } from 'vuex'

export default {
  components: {
    ArgonButton,
  },
  data() {
    return {
      
    };
  },
  computed: {
    schedules() {
      return this.$store.state.plan.schedules
    }
  },
  methods: {
    ...mapMutations(['addBeforeSchedule','addAfterSchdule']),
    getDateFormated: (date) => {
        return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    },
    getDay: (date) => {
        return date.getDate()
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
    }
  }
};
</script>

<style scoped>
</style>