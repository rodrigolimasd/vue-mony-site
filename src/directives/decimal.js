const config = {
    decimal : '.'
}

const keyPermited = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
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

const number = {

    mounted: (el) => {
        el = el instanceof HTMLInputElement ? el : el.querySelector('input')

        el.onkeydown = (e) => {
            //let isN = 
            if(!keyPermited.includes(e.key)){
                e.preventDefault()
            }
          }

    }

}

export default number