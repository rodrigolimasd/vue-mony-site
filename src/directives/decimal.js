const keyPermited = [
    ".",
    "Delete",
    "Backspace",
    "Tab",
    "Esc",
    "Escape",
    "Enter",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "Del",
    "Delete",
    "Left",
    "ArrowLeft",
    "Right",
    "ArrowRight",
    "Insert",
    "Up",
    "ArrowUp",
    "Down",
    "ArrowDown",
  ]

function isNumbers(key){
    return /^\d+/g.test(key);
}

function isValidKey(key){
    return /^\d+/g.test(key) || keyPermited.includes(key)
}

function validDecimal(value){
    return /^$|^\d+(\.\d{0,1})?$/.test(value)
}

const number = {

    mounted: (el) => {
        el = el instanceof HTMLInputElement ? el : el.querySelector('input')

        el.onkeydown = (e) => {
            if(!isValidKey(e.key)){
                console.log('key', e.target.value)
                e.preventDefault()
            }
            if((isNumbers(e.key) || e.key === '.') && !validDecimal(e.target.value)){
                console.log('valid', e.target.value)
                e.preventDefault()
            }
          }

    }

}

export default number