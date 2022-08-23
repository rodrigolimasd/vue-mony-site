export default {
    //namespaced: false,
    state: {
        schedules: JSON.parse(window.localStorage.getItem('mony-store') || '[]')
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
          console.log(payload)
        }
    }
}