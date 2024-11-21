/**
 * single pointer + outer storage
 * time complex: O(0) space complex: O(0)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

var maximumSubarraySum = function(num, k){

  let maxSum = 0;
  let currentSum = 0;

  // notice the difference between set and array(https://dev.to/0shuvo0/array-vs-set-in-javascript-4h50)
 //use set。length as a certification of the maxmum summary
  let set = new Set();
  let leftIndex = 0;

  for(let i = 0; i < num.length; i++){
    currentSum += num[i];
    set.add(num[i]);

    if (i-leftIndex + 1 == k){
      // remove the left element from the current sum
      currentSum -= num[leftIndex];
      set.delete(num[leftIndex]);
      leftIndex++;
    }

    if(i-leftIndex + 1 == k && set.length == k){
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

  }


}