'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 7 , 4, 5, 6, 8];

function containsSeven(x: number[]): string {
    let bool: boolean = false;

    for(let i = 0; i < x.length; i++ ) {
        let sev: number = 7;
        if(x[i] === sev){
        bool = true;
        };
    }
        if(bool === true) {
            return'Hoorray';
        }else{
            return'Noooooo';
        }
}

console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
//export = containsSeven;

















// 'use strict';

// // Write a function that checks if the array contains "7"
// // if it contains return "Hoorray" otherwise return "Noooooo"
// const numbers: number[] = [1, 2, 3,,7,4, 5, 6, 8];
// function containsSeven(numbers) {
//    if (numbers == 7){
//        console.log('Horray')
//    }else{console.log('Noooooo')};
// }
// let filteredNumber: number[]= numbers.filter(containsSeven);


// containsSeven(numbers);
// // The output should be: "Noooooo"
// // Do this again with a different solution using different list functions!
// //export = containsSeven;
