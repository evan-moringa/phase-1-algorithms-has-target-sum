function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();
  for (const num of array) {
   const diff = target - num;

     if (seen.has(diff)) {
        return true;
    }

    seen.add(num);
}


return false;
}

// Test the function
const array = [3, 8, 12, 4, 11, 7];
const target = 10;
console.log(hasTargetSum(array, target));



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
//1. Start
// 2. Input a number and store it in a variable, let's call it 'hasTargetSum'.
// 3. If 'hasTargetSum' array  is  [3, 8, 12, 4, 11, 7] 
//     a. return output as '10' 
// 4. Else:
//     return as 'False'
// 5. End

//
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
