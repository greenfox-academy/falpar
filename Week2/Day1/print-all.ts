'use strict'
// -  Create a variable named `numList` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numList` to the console*
// *hint: use a loop, console.log(numList) won't cut it
// -  bonus for using the correct built in array method
  let numList = [4, 5, 6, 7];
//  for(let i = 0; i <numList.length; i++){
//      console.log(numList[i]);
//  }


    numList.forEach(function(elem) {
        return elem;
    });
    console.log(numList);