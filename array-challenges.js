//1. Always Hungry
function alwaysHungry(arr) {
    var food = false;
    arr.forEach(e => {
        if (e === "food")
        {
            console.log("1. yummy");
            food = true;
        }
    });

    if (!food)
    {
        console.log("1. I'm hungry");
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(e => {
        if (e > cutoff)
        {
            filteredArr.push(e);
        }
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("\n2. " + result); // we expect back [6, 8, 10, 9]


//3. Better than average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    arr.forEach(e => {
        sum += e;
    });
    var count = 0
    // count how many values are greated than the average
    arr.forEach(e => {
        if (e > sum / arr.length)
        {
            count++;
        }
    });
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log("\n3. " + result); // we expect back 4


//4. Array Reverse
function reverse(arr) {
    var left;
    for (var i = 0; i < arr.length/2; i++)
    {
        left = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = left;
    }

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e", "f"]);
console.log("\n4. " + result); // we expect back ["f", "e", "d", "c", "b", "a"]


//5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++)
    {
        fibArr.push(fibArr[i-2] + fibArr[i-1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log("\n5. " + result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]