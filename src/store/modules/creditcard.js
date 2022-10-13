
export default {
    state: {
        creditCards: []
    },
    mutations: {
        addCreditCard(state, payload) {
            state.creditCards.push(payload)
        }
    }
}