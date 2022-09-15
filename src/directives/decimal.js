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

const number = {

    mounted: (el) => {
        el = el instanceof HTMLInputElement ? el : el.querySelector('input')

        el.onkeydown = (e) => {
            if(!/^\d+/g.test(e.key) && !keyPermited.includes(e.key)){
                e.preventDefault()
            }
          }

    }

}

export default number