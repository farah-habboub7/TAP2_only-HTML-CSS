
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return [i, j];
          }
      }
  }
  return [];
}

/////
// Input: nums = [2,7,11,15], target = 9
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); //  Output: [0,1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
document.writeln(
    `
    <div>
      <h3 class="sColor result">[ ${result} ]</h3>
    </div>
    
    `
); 


