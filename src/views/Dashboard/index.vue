<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12" v-for="s in summaries" :key="s.title">
              <card
                :title="s.title"
                :value="s.value"
                :valueColor="s.valueColor"
                :percentage="s.percentage"
                :iconClass="s.iconClass"
                :iconBackground="s.iconBackground"
                :detail="s.detail"
                directionReverse
              ></card>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2">
                <gradient-line-chart />
              </div>
            </div>
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="card">
                <div class="p-3 pb-0 card-header">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-2">Last Transactions</h6>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-striped">
                    <thead>
                      <th>Date</th>
                      <th>Expense</th>
                      <th>Income</th>
                      <th>Balance</th>
                      <th>Note</th>
                    </thead>
                    <tbody>
                      <tr v-for="t in lastTransactionActualMonth" :key="t.description">
                        <td>
                          <div class="text-center">
                            <h6 class="mb-0 text-sm text-primary">{{ t.date.getDate() }}/{{ t.date.getMonth() + 1 }}/{{ t.date.getFullYear() }}</h6>
                           </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <h6 class="mb-0 text-sm text-danger"> ${{ t.expense }}</h6>
                          </div>
                        </td>
                        <td class="text-sm align-middle">
                          <div class="text-center col">
                            <h6 class="mb-0 text-sm text-success"> ${{ t.income }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center col">
                            <h6 class="mb-0 text-sm text-primary"> ${{ t.balanceValue }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <h6 class="mb-0 text-sm text-warning">{{ t.note }}</h6>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-7">
              <carousel />
            </div>
            <div class="col-lg-5">
              <categories-card />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Card from "@/components/cards/Card.vue";
  import GradientLineChart from "@/components/charts/GradientLineChart.vue";
  import Carousel from "@/components/Carousel.vue";
  import CategoriesCard from "@/components/cards/CategoriesCard.vue";
  import { mapGetters } from 'vuex'
  
  export default {
    name: "dashboard-default",
    data() {
      return {
        summaries: [
          {
            title: "Expenses",
            value: "$"+ this.expenseCurrentMonth(),
            //percentage: "+55%",
            valueColor:"text-danger",
            iconClass: "ni ni-cart",
            detail: this.getMonthCard(),
            iconBackground: "bg-gradient-danger",
          },
          {
            title: "Accumulated Balance",
            value: "$"+ this.accumulatedBalanceUtilCurrentMonth(),
            //percentage: "+55%",
            valueColor:"text-primary",
            iconClass: "fas fa-landmark",
            //iconBackground: "bg-gradient-danger",
            iconBackground: "bg-gradient-primary",
            detail: this.getMonthCard(),
          },
          {
            title: "Initial Balance",
            value: "$" + this.initialBalanceUtilCurrentMonth(),
           // percentage: "+35%",
            valueColor:"text-warning",
            iconClass: "fas fa-landmark",
            // percentageColor: "text-danger",
            iconBackground: "bg-gradient-warning",
            detail: this.getMonthCard(),
          },
          {
            title: "Incomes",
            value: "$" + this.incomeCurrentMonth(),
            //percentage: "+5%",
            valueColor:"text-success",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-success",
            detail: this.getMonthCard(),
          }
        ]
      };
    },
    computed: {
      ...mapGetters({
         lastTransactionActualMonth: 'lastTransactionActualMonth',
      })
    },
    methods: {
      getMonthCard(){
        let today = new Date()
        return `${today.getMonth()+1}/${today.getFullYear()}`
      },  
      expenseCurrentMonth(){
        let expensesByMonth = this.getSchedulesByCurrentMonth()
        .map(a=> a.expense);
        let total = 0
        if(expensesByMonth.length > 0 ) {
          total = expensesByMonth.reduce((a, b) => Number(a) + Number(b))
        }
        return total.toFixed(2)
      },
      incomeCurrentMonth(){
        let incomesByMonth = this.getSchedulesByCurrentMonth()
        .map(a=> a.income);
        let total = 0
        if(incomesByMonth.length > 0 ) {
          total = incomesByMonth.reduce((a, b) => Number(a) + Number(b))
        }
        return total.toFixed(2)
      },
      accumulatedBalanceUtilCurrentMonth(){
        let balancesByMonth = this.getSchedulesByCurrentMonth()
              .map(a=> a.balanceValue);
          let value = balancesByMonth.length > 0 ? 
              balancesByMonth[balancesByMonth.length - 1] : 0
          let _value  = Number(value)
          return isNaN(_value) ? 0.00 : _value.toFixed(2)
      },
      initialBalanceUtilCurrentMonth(){
        let balancesByMonth = this.getSchedulesByCurrentMonth()
              .map(a=> a.balanceValue);
          let value = balancesByMonth.length > 0 ? 
              balancesByMonth[0] : 0
          let _value = Number(value)
          return isNaN(_value) ? 0.00 : _value.toFixed(2)
      },
      getSchedulesByCurrentMonth(){
        let today = new Date()
        return this.$store.state.plan.schedules
            .filter(a=> a.date.getMonth() === today.getMonth() && a.date.getFullYear() === today.getFullYear())
      }
    },
    components: {
      Card,
      GradientLineChart,
      Carousel,
      CategoriesCard,
    },
  };
  </script>
  