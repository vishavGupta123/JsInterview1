// Q4. Implement a function sum() in the following way such that it gives the sum of two numbers

// console.log(sum(1)(2)); // should output 3
// console.log(sum(10)(2)); // should output 12


function sum (a){
    return function (b){
        return a+b;
    }
}


console.log(sum(10)(2));