main();

function main () {  //Function to initialize the initial data (4) and call sorting (6)
    const array = [4,2,7,5,2,7,3,11,22,5,1,7,9,0,2];
    console.log(array);
    merge_sort(array);
    console.log(merge_sort(array));
}

function merge_sort (array) {   //Function to implement merge sort
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let arrayLeft = array.slice(0, middle);
    let arrayRight = array.slice(middle);

    let arrayLeftSort = merge_sort(arrayLeft);
    let arrayRightSort =  merge_sort(arrayRight);

    let result = merge_elements(arrayLeftSort, arrayRightSort);

    return result;
}

function merge_elements (arrayLeftSort, arrayRightSort) {   //Helper function for comparing elements according to a given algorithm
    let i = 0;
    let j = 0;
    let newArray = [];

    while (i < arrayLeftSort.length || j < arrayRightSort.length) {
        if (i === arrayLeftSort.length) {
            newArray.push(arrayRightSort[j]);
            j++;
        } else if (j === arrayRightSort.length || arrayLeftSort[i] < arrayRightSort[j]) {
            newArray.push(arrayLeftSort[i]);
            i++;
        } else {
            newArray.push(arrayRightSort[j]);
            j++;
        }
    }
    return newArray;
}