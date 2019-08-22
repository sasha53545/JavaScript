main();

function main() {   //Function to initialize the initial data (4) and call sorting (6)
    const array = [3,6,7,3,2,5,1,55,33,25,67,34,62,51,43];
    console.log(array);
    quick_sort(array);
    console.log(quick_sort(array, start, end));
}

function quick_sort (array) {   //Function to implement quick sort   
    start = 0;
    end = array.length;
    sort(array, start, end);
    return array;
}

function sort(array, start, end) {  //Helper function to imlementing recursion
    if (end - start <= 1) {
        return ;
    }
    let pivot = array[end-1];
    let j = start - 1;
    let tmp = 0;
    for (let i = start; i < end - 1; i++) {
        if (array[i] < pivot) {
            j++;
            tmp = array[j];
            array[j] = array[i];
            array[i] = tmp;
        }
    }
    j++;
    tmp = array[end - 1];
    array[end - 1] = array[j];
    array[j] = tmp;

    sort(array, start, j);
    sort(array, j+1, end);
}