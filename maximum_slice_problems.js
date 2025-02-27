// maxprofit
function solution(A){
  let currenSum = 0;
  let maxSum = 0;
  // let profit = new Array(A.length).fill(0);
  for(let i = 1; i < A.length; i++){
    currenSum = Math.max(0, currenSum + (A[i] - A[i - 1]));
    maxSum = Math.max(maxSum,currenSum);
  }
}