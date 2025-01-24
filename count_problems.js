// frog river one
function solution(X,A){
  const AL = A.length;
  const positionSet = new Set();
  for (let i = 0; i < AL; i++){
    positionSet.add(A[i]);
    if(positionSet.size === X){
      return i;
    }
  }
  return -1;
}
