function pigIt(str){
    return str
        .split(' ')
        .map(el => {
            if((/[a-z]/gi).test(el)) {
               return el.slice(1, el.length) + el.slice(0, 1) + 'ay'
            } else {
                return el;
            }
        })
        .join(' ')
}
