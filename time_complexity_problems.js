//FROGJMP
// time complexity O(1)
function solution(A,B,K){
 const distance = B-A; 
 const jumps = Math.ceil(distance/K);
 return jumps;
}

//PermMissingElem
// time complexity O(N) or O(N*logN)
function solution(A){
  const actualSum = A.reduce((sum, num) => sum + num, 0);
  const expectedSum = (A.length+1)*(A.length+2)/2
  const missNum = expectedSum - actualSum;
  return missNum;
}

//tape equalibrium
function solution(A){
   let leftSum = 0;
   const totalSum = A.reduce((sum, num) => sum + num, 0);
   let minDiff = Infinity;
   for ( i = 0; i < A.length -1; i ++){
    leftSum += A[i];
    rightSum =  totalSum - leftSum;
    const diff = Math.abs(leftSum - rightSum);
    minDiff = Math.min(minDiff, diff);
   }
   return minDiff;
}