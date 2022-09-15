<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <card
                :title="stats.money.title"
                :value="stats.money.value"
                :percentage="stats.money.percentage"
                :iconClass="stats.money.iconClass"
                :iconBackground="stats.money.iconBackground"
                :detail="stats.money.detail"
                directionReverse
              ></card>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <card
                :title="stats.users.title"
                :value="stats.users.value"
                :percentage="stats.users.percentage"
                :iconClass="stats.users.iconClass"
                :iconBackground="stats.users.iconBackground"
                :detail="stats.users.detail"
                directionReverse
              ></card>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <card
                :title="stats.clients.title"
                :value="stats.clients.value"
                :percentage="stats.clients.percentage"
                :iconClass="stats.clients.iconClass"
                :iconBackground="stats.clients.iconBackground"
                :percentageColor="stats.clients.percentageColor"
                :detail="stats.clients.detail"
                directionReverse
              ></card>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <card
                :title="stats.sales.title"
                :value="stats.sales.value"
                :percentage="stats.sales.percentage"
                :iconClass="stats.sales.iconClass"
                :iconBackground="stats.sales.iconBackground"
                :detail="stats.sales.detail"
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
                  <table class="table align-items-center">
                    <tbody>
                      <tr v-for="t in schedules" :key="t.description">
                        <td class="w-30">
                          <div class="px-2 py-1 d-flex align-items-center">
                            <div class="ms-4">
                              <p class="mb-0 text-xs font-weight-bold text-warning">Note:</p>
                              <h6 class="mb-0 text-sm text-warning">{{ t.note }}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="mb-0 text-xs font-weight-bold text-primary">Date:</p>
                            <h6 class="mb-0 text-sm text-primary">{{ t.date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }}</h6>
                          </div>
                        </td>
                        <td>
                          <div class="text-center">
                            <p class="mb-0 text-xs font-weight-bold text-danger">Expense:</p>
                            <h6 class="mb-0 text-sm text-danger">{{ t.expense }}</h6>
                          </div>
                        </td>
                        <td class="text-sm align-middle">
                          <div class="text-center col">
                            <p class="mb-0 text-xs font-weight-bold text-success">Income:</p>
                            <h6 class="mb-0 text-sm text-success">{{ t.income }}</h6>
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
  import CategoriesCard from "@/components/CategoriesCard.vue";
  
  export default {
    name: "dashboard-default",
    data() {
      return {
        stats: {
          money: {
            title: "Expenses",
            value: "-$"+ this.expenseCurrentMonth(),
            //percentage: "+55%",
            iconClass: "ni ni-cart",
            detail: "current month",
            iconBackground: "bg-gradient-danger",
          },
          users: {
            title: "Accumulated Balance",
            value: "=$"+ this.accumulatedBalanceUtilCurrentMonth(),
            //percentage: "+55%",
            iconClass: "fas fa-landmark",
            //iconBackground: "bg-gradient-danger",
            iconBackground: "bg-gradient-primary",
            detail: "current month",
          },
          clients: {
            title: "Initial Balance",
            value: "$" + this.initialBalanceUtilCurrentMonth()+"+",
           // percentage: "+35%",
            iconClass: "fas fa-landmark",
            // percentageColor: "text-danger",
            iconBackground: "bg-gradient-warning",
            detail: "current month",
          },
          sales: {
            title: "Incomes",
            value: "+$" + this.incomeCurrentMonth(),
            //percentage: "+5%",
            iconClass: "ni ni-money-coins",
            iconBackground: "bg-gradient-success",
            detail: "than last month",
          },
        },
      };
    },
    computed: {
      schedules() {
        return (this.$store.state.plan.schedules).slice(1).slice(-5)
      }
    },
    methods: {
      expenseCurrentMonth(){
        let expensesByMonth = this.getSchedulesByCurrentMonth()
        .map(a=> a.expense);
        let total = 0
        if(expensesByMonth.length > 0 ) {
          total = expensesByMonth.reduce((a, b) => Number(a) + Number(b))
        }
        return total
      },
      incomeCurrentMonth(){
        let incomesByMonth = this.getSchedulesByCurrentMonth()
        .map(a=> a.income);
        let total = 0
        if(incomesByMonth.length > 0 ) {
          total = incomesByMonth.reduce((a, b) => Number(a) + Number(b))
        }
        return total
      },
      accumulatedBalanceUtilCurrentMonth(){
        let balancesByMonth = this.getSchedulesByCurrentMonth()
              .map(a=> a.balanceValue);
          return balancesByMonth.length > 0 ? 
              balancesByMonth[balancesByMonth.length - 1] : 0
  
      },
      initialBalanceUtilCurrentMonth(){
        let balancesByMonth = this.getSchedulesByCurrentMonth()
              .map(a=> a.balanceValue);
          return balancesByMonth.length > 0 ? 
              balancesByMonth[0] : 0
  
      },
      getSchedulesByCurrentMonth(){
        return this.$store.state.plan.schedules
            .filter(a=> a.date.getMonth() === (new Date()).getMonth())
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
  