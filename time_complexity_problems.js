//FROGJMP
function solution(A,B,K){
 const distance = B-A; 
 const jumps = Math.ceil(distance/K);
 return jumps;
}

//PermMissingElem
function solution(A){
  const actualSum = A.reduce((sum, num) => sum + num, 0);
  const expectedSum = (A.length+1)*(A.length+2)/2
  const missNum = expectedSum - actualSum;
  return missNum;
}