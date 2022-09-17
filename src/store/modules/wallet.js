const saveStorageJson = (state) => {
    localStorage.setItem('mony-accounts', JSON.stringify(state.accounts))
}

const recoveryStorageJson = () => {
    let array = JSON.parse(localStorage.getItem('mony-accounts'));
    if(Array.isArray(array)) {
      return array
    }
    return []
}

export default {
    //namespaced: false,
    state: {
        accounts: recoveryStorageJson(),
    },
    mutations: {
        addAccount(state, payload) {
            state.accounts.splice(0, 0, {
                classIcon: "fa-landmark",
                title: "",
                desc: "",
                amount: "0",
                editable: true
            })
        },
        saveStorage(state) {
            saveStorageJson(state)
            alert('Saved successfully!!!')
        }
    }

}