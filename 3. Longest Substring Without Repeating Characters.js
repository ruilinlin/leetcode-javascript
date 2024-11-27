/**
 * @param {string} s
 * @return {number}
 * strategy one : sliding windows + set
 * time O(n) space O(k)
 */
var lengthOfLongestSubstring = function(s) {
  let curCounter = 0;
  let lefIndex = 0;
  let maxCounter = 0;
  let subChar = new Set ();

      
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++){
      
      while(subChar.has(s[rightIndex])){
          subChar.delete(s[lefIndex]);
          lefIndex ++;
      }

      subChar.add(s[rightIndex]);

      maxCounter = Math.max(rightIndex-lefIndex + 1, maxCounter);


/**
 * @param {string} s
 * @return {number}
 * slidingWindow + hashmap: delete() to operate the left char,increase time complexity decrease the space complexity
 */
var lengthOfLongestSubstring = function(s) {
  let lefIndex = 0;
  let maxCounter = 0;
  let subIndexMap = new Map ();

      
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++){
      
      while(subIndexMap.has(s[rightIndex])){
          subIndexMap.delete(s[lefIndex]);
          lefIndex ++;
      }

      subIndexMap.set(s[rightIndex], rightIndex);

      maxCounter = Math.max(rightIndex -lefIndex + 1, maxCounter);

  }

  return maxCounter;
};
      
/**
 * @param {string} s
 * @return {number}
 * slidingWindow + hashmap: shift the leftPointer, not delete, increase space cost decrease the time cost
 */
var lengthOfLongestSubstring = function(s) {
  let lefIndex = 0;
  let maxCounter = 0;
  let subIndexMap = new Map ();

      
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++){
      
      if(subIndexMap.has(s[rightIndex])){
          lefIndex =  Math.max(lefIndex, subIndexMap.get(s[rightIndex] + 1))
      }

      subIndexMap.set(s[rightIndex], rightIndex);

      maxCounter = Math.max(rightIndex -lefIndex + 1, maxCounter);

  }

  return maxCounter;
};
      

/**
 * @param {string} s
 * @return {number}
 * dynamic programming
 */
var lengthOfLongestSubstring = function(s) {
  let lefIndex = 0;
  let maxCounter = 0;
  let subIndexMap = new Map ();

      
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++){
      
      if(subIndexMap.has(s[rightIndex])){
          lefIndex =  Math.max(lefIndex, subIndexMap.get(s[rightIndex] + 1))
      }

      subIndexMap.set(s[rightIndex], rightIndex);

      maxCounter = Math.max(rightIndex -lefIndex + 1, maxCounter);

  }

  return maxCounter;
};
      