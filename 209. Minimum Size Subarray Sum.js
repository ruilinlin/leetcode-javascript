/**
 * sliding window => solve subarray problem
 * time complex: O(n) space complex: O(1)
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let leftInx = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for ( let rightInx  = 0 ; rightInx  < nums.length; rightInx ++){
      currentSum += nums[rightInx];

      while(currentSum >= target ){
          const currentLength = rightInx - leftInx + 1;
          minLength = Math.min(currentLength, minLength);
          currentSum -= nums[leftInx];
          leftInx ++;
      }
  }
  return minLength === Infinity ? 0 : minLength;
};