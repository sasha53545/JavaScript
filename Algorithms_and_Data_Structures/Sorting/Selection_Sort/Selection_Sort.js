main();

function main() {   //Function to initialize the initial data (4) and call sorting (6)
    const array = [3,5,2,7,2,6,44,12,77,3,11,33];
    console.log(array);
    selection_sort(array);
    console.log(array);
}

function selection_sort(array) {    //Function to implement selection sort
    let tmp = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                swap (array, j, min);
            }
        }
    }
}

function swap (array, j, min) {     //Helper function to swap elements in an array
    tmp = array[min];
    array[min] = array[j];
    array[j] = tmp;
}