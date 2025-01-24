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

//permCheck
function solution(A){
  const setCheck = new Set(A);
  // const expectedSum = (A.length + 1) *(A.length + 2) / 2;
  // const actualSum = A.reduce((sum,num) =>{sum + num}, 0);
  // if ( setCheck.size !== A.length || expectedSum !== actualSum){
  //   return 0;
  // }
  const n = A.length;

  for(let i =0; i< n; i++){
    if(!setCheck.has(i)){
      return 0;
    }
  }
  return 1;
}