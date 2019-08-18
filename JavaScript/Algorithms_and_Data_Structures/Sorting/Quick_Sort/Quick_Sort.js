main();

function main() {
    const array = [3,6,7,3,2,5,1,55,33,25,67,34,62,51,43];
    console.log(array);
    quick_sort(array);
    //console.log(quick_sort(array));
}

function quick_sort(array) {
    let pivot = array[array.length-1];
    let j = -1;
    let tmp = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            j++;
            tmp = array[j];
            array[j] = array[i];
            array[i] = tmp;
        }
        console.log(array[j]);
    }
        j++;
        tmp = array[j];
        array[j] = pivot;
        pivot = tmp;
}