export default {
    //namespaced: false,
    state: {
        schedules: [],
    },
    mutations: {
        addSchedule(state, payload) {
          state.schedules.push({date: new Date()})
        },
        addBeforeSchedule(state, payload) {
            let newSchedule = {...payload}
            const indexSchdule = state.schedules.indexOf(payload)
            let newDateBefore = new Date(newSchedule.date)
            newDateBefore.setDate(newDateBefore.getDate()-1)
            newSchedule.date = newDateBefore
            newSchedule.note = ""
            newSchedule.income = null
            newSchedule.expense = null
            newSchedule.balanceValue = null
            state.schedules.splice(indexSchdule,0,newSchedule)
        },
        addAfterSchdule(state, payload){
            let newSchedule = {...payload}
            const indexSchdule = state.schedules.indexOf(payload)
            let newDateBefore = new Date(newSchedule.date)
            newDateBefore.setDate(newDateBefore.getDate()+1)
            newSchedule.date = newDateBefore
            newSchedule.note = ""
            newSchedule.income = null
            newSchedule.expense = null
            newSchedule.balanceValue = null
            state.schedules.splice(indexSchdule+1,0,newSchedule)
        },
        removeSchedule(state, payload){
            const indexSchdule = state.schedules.indexOf(payload)
            state.schedules.splice(indexSchdule, 1)
        },
        updateSchedule(state, payload) {
          
          let index = state.schedules.indexOf(payload)
          let lastBalance = 0
          let lastSchedule = state.schedules[index-1]
          if(lastSchedule) {
            lastBalance = lastSchedule.balanceValue
          }

          payload.balanceValue = (Number(lastBalance) + payload.income) - payload.expense
          payload.balanceValue = Number(payload.balanceValue).toFixed(2)
        }
    }
}