'use strict'

//Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit(number1: number): number{

    if(number1 < 1){
        return 0;
    }else{
        return (number1 % 10) + sumDigit((number1 - number1 % 10) / 10);
      
    }
}

console.log(sumDigit(2345));