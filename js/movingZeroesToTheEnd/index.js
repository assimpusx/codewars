function moveZeros(arr) {
    const sortArr= [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            sortArr.push(arr[i]);
        } else {
            counter++;
        }
    }
    for(let i = 0; i < counter; i++) {
        sortArr.push(0);
    }

    return sortArr;
}