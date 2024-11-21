/**
 * single pointer + outer storage
 * time complex: O(n) space complex: O(k)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

var maximumSubarraySum = function(nums, k){

  let maxSum = 0;
  let currentSum = 0;
  let leftIndex = 0;


// notice the difference between set and array(https://dev.to/0shuvo0/array-vs-set-in-javascript-4h50)
//use set。length as a certification of the maxmum summary
 let set = new Set();

  for (let i = 0; i < nums.length; i++){
    currentSum += nums[i];
    set.add(nums[i]);

    if ( i - leftIndex + 1 > k){
        // remove the leftest num in nums
        set.delete(nums[leftIndex]);
        currentSum -= nums[leftIndex];
        leftIndex ++;
    }

    if (i - leftIndex + 1 == k && set.size == k){
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

  }


}
