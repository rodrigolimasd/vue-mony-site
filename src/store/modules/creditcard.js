const saveStorageJson = (state) => {
    localStorage.setItem('mony-creditcards', JSON.stringify(state.creditCards))
}

const recoveryStorageJson = () => {
    let array = JSON.parse(localStorage.getItem('mony-creditcards'));
    if(Array.isArray(array)) {
      return array
    }
    return []
}

export default {
    state: {
        creditCards: recoveryStorageJson()
    },
    mutations: {
        addCreditCard(state, payload) {
            state.creditCards.push(payload)
            saveStorageJson(state)
        }
    }
}