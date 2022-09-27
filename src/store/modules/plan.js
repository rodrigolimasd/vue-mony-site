const calcBalance = (state, payload) => {
  let index = state.schedules.indexOf(payload)
  let lastBalance = 0
  let lastSchedule = state.schedules[index-1]
  if(lastSchedule) {
    lastBalance = lastSchedule.balanceValue
  }
  lastBalance = isNaN(Number(lastBalance)) ? 0 : Number(lastBalance)
  let income = isNaN(Number(payload.income)) ? 0 : Number(payload.income)
  let expense = isNaN(Number(payload.expense)) ? 0 : Number(payload.expense)
  let balance = (lastBalance + income) - expense

  payload.balanceValue = balance.toFixed(2)
}

const saveStorageJson = (state) => {
  state.schedules.forEach(i=> {
    i._date = JSON.stringify(i.date.toISOString())
  })
  localStorage.setItem('mony-schedules', JSON.stringify(state.schedules))
}

const recoveryStorageJson = () => {
  let array = JSON.parse(localStorage.getItem('mony-schedules'));
  if(Array.isArray(array)){
    array.forEach(i=> {
      i.date = new Date(JSON.parse(i._date))
    })
    return array
  }
  return []
}

function getNearestSchedules(schedules, currentDate) {
  let minDiff = -1
  let minDate = null;
  let _currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
  schedules.forEach(item => {
  	let _date = new Date(item.date.getFullYear(), item.date.getMonth(), item.date.getDate())
    let diff = Math.ceil(Math.abs(_currentDate - _date) / (1000 * 60 * 60 * 24))
    if ((minDiff == -1) || (diff < minDiff)) {
      minDiff = diff;
      minDate = item;
    }
  })
  return minDate;
}

function compareMonthAndYear(p, today){
  return p.date.getMonth() == today.getMonth() && p.date.getFullYear() == today.getFullYear()
}

function getLast(schedules, today){
  return getNearestSchedules(schedules
    .filter(p=> compareMonthAndYear(p, today)), today)
}
export default {
    //namespaced: false,
    state: {
        schedules: recoveryStorageJson(),
    },
    getters: {
     lastBalance(state, getters, rootState){
        let today = new Date()
        let last = getLast(state.schedules, today)
        return last ? last.balanceValue : 0
      },
      lastTransactionActualMonth(state, getters, rootState){
        let today = new Date()
        let index = state.schedules.indexOf(getLast(state.schedules, today))
        return state.schedules.slice(index, index + 7)
      }
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

            state.schedules.slice(indexSchdule, state.schedules.length).forEach(i => {
              calcBalance(state, i)
            })
        },
        addAfterMonth(state, item) {
          //TODO
          const {year, month} = item
          let monthToCopy = state.schedules.filter(i=> i.date.getFullYear() === Number(year) 
                                             && i.date.getMonth() === Number(month))
          let lastIndex = state.schedules.indexOf(monthToCopy[monthToCopy.length-1]) + 1

          monthToCopy.forEach(a=> {

            let newDate = new Date(a.date)
            newDate.setMonth(newDate.getMonth() + 1)

            let newSchedule = {
              date: newDate,
              income: a.income,
              expense: a.expense,
              balanceValue: a.balanceValue,
              note: a.note
            }

            state.schedules.splice(lastIndex, 0, newSchedule)

            calcBalance(state, newSchedule)
            lastIndex++
          })

        },
        deleteMonth(state, item) {
          //TODO
          const {year, month} = item

          //check if exist index 0 on exclusion
          let isZeroIndex = state.schedules
                                 .filter(i=> i.date.getFullYear() === Number(year) 
                                             && i.date.getMonth() === Number(month))
                                 .map(a=> state.schedules.indexOf(a)).find(a=> a === 0)

          state.schedules = state.schedules.filter(i=> !(i.date.getFullYear() === Number(year) 
                && i.date.getMonth() === Number(month)))
          
          if(isZeroIndex === 0) {
            state.schedules.forEach(i => {
              calcBalance(state, i)
            })
          }
        },
        updateSchedule(state, payload) {
          let index = state.schedules.indexOf(payload)
          //update belows
          state.schedules.slice(index, state.schedules.length).forEach(i => {
            calcBalance(state, i)
          })
          
        },
        saveStorage(state) {
          saveStorageJson(state)
          alert('Saved successfully!!!')
        }
    }
}