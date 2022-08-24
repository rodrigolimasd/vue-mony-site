export default {
    //namespaced: false,
    state: {
        schedules: [
            {
              date: new Date(2021, 4, 12),
              income: 103430.0,
              expense: 16800.0,
              balanceValue: 150230.0,
              note: "House Rent/Sales",
            },
            {
              date: new Date(2022, 4, 12),
              income: 103430.0,
              expense: 16800.0,
              balanceValue: 150230.0,
              note: "House Rent/Sales",
            },
            {
              date: new Date(2022, 4, 15),
              income: 0.0,
              expense: 20200.0,
              balanceValue: 113230.0,
              note: "Credit Card",
            },
            {
              date: new Date(2022, 4, 20),
              income: 0.0,
              expense: 8274.4,
              balanceValue: 104955.6,
              note: "Taxes",
            },
            {
              date: new Date(2022, 4, 30),
              income: 0.0,
              expense: 7725.6,
              balanceValue: 97230.0,
              note: "Others",
            },
            {
              date: new Date(2022, 5, 12),
              income: 0.0,
              expense: 7725.6,
              balanceValue: 97230.0,
              note: "Teste month 5",
            },
        ],
        items: [
            {
                product: 'product 1',
                productValue: 10.00,
                quantity: 1,
                total: 10.00
            },
             {
                product: 'product 2',
                productValue: 10.00,
                quantity: 1,
                total: 10.00
            }
        ]
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