const calcBalance = (state, payload) => {
  let index = state.schedules.indexOf(payload)
  let lastBalance = 0
  let lastSchedule = state.schedules[index-1]
  if(lastSchedule) {
    lastBalance = lastSchedule.balanceValue
  }

  payload.balanceValue = (Number(lastBalance) + payload.income) - payload.expense
  payload.balanceValue = Number(payload.balanceValue).toFixed(2)
}

export default {
    //namespaced: false,
    state: {
        schedules: [],
    },
    mutations: {
        addSchedule(state, payload) {
          state.schedules.push({
            date: new Date(),
            income: 0,
            expense: 0,
            balanceValue: 0
          })
        },
        addBeforeSchedule(state, payload) {

          let newDate = new Date(payload.date)
          newDate.setDate(newDate.getDate() - 1)

          let newSchedule = {
            date: newDate,
            income: 0,
            expense: 0,
            balanceValue: 0
          }
          
          state.schedules.splice(state.schedules.indexOf(payload), 0, newSchedule)

          calcBalance(state, newSchedule)

        },
        addAfterSchdule(state, payload) {

            let newDate = new Date(payload.date)
            newDate.setDate(newDate.getDate() + 1)

            let newSchedule = {
              date: newDate,
              income: 0,
              expense: 0,
              balanceValue: 0
            }

            state.schedules.splice(state.schedules.indexOf(payload) + 1, 0, newSchedule)

            calcBalance(state, newSchedule)
        },
        removeSchedule(state, payload){
            const indexSchdule = state.schedules.indexOf(payload)
            state.schedules.splice(indexSchdule, 1)
        },
        updateSchedule(state, payload) {


          let index = state.schedules.indexOf(payload)

          //update belows
          state.schedules.slice(index, state.schedules.length).forEach(i => {
            calcBalance(state, i)
          })
          
        }
    }
}