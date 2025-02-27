// maxprofit
function solution(A){
  let currenSum = 0;
  let maxSum = 0;
  // let profit = new Array(A.length).fill(0);
  for(let i = 1; i < A.length; i++){
    preSum = Math.max(0, preSum + (A[i] - A[i - 1]));
    maxSum = Math.max(maxSum,preSum);
  }
}


// maxslice
function solution(A){
  let maxSum = A[0];
  let currentSum = A[0];
  for(let i = 1; i < A.length; i++){
    currentSum = Math.max(A[i], currentSum + A[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// madouble slice sum
function solution(A){
  let maxSum = A[0];
  let maxSencondSum = A[0];
  for(let i = 1; i < A.length; i++){
    currentSum = Math.max(0, currentSum + A[i]);
  }
}