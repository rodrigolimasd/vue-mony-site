const filters = {
    money(value) {
        //return `$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
        if (isNaN(value)) {
            return "-";
          }
          return '$' + value.toFixed(2); 
    }
}

export default filters;