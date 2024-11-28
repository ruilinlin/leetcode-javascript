/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let curSum = 0;
  let maxSum = - Infinity;

  for (let rightIndex = 0; rightIndex < k; rightIndex ++){
      curSum += nums[rightIndex];
  }
  maxSum = curSum;

  for ( rightIndex = k; rightIndex < nums.length; rightIndex ++){
          curSum += nums[rightIndex] - nums[rightIndex - k] ;
          maxSum = Math.max(curSum, maxSum);
      }

  maxSum = Math.max(curSum, maxSum);
  const maxAverage = maxSum / k;
  
  
  return maxAverage;
};