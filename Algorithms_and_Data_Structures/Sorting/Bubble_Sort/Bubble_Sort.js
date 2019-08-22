main();

function main() {   //Function to initialize the initial data (4) and call sorting (6)
    const array = [1,5,6,3,7,3,7,4,6,9,2,1,5,55,22,56,22,65,21];
    console.log(array);
    bubble_sort(array);
    console.log(array);
}

function bubble_sort(array) {   //Function to implement bubble sort      
    let tmp = 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j+1] < array[j]) {
                swap(array, j);
            }
        }
    }
}   

function swap (array, j) {  //Helper function to swap elements in an array
    tmp = array[j];
    array[j] = array[j+1];
    array[j+1] = tmp; 
}
