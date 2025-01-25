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
//   const n = A.length;

//   // 计算预期的等差数列和（从 1 到 n）
//   const expectedSum = (n * (Math.min(...A) + Math.max(...A))) / 2;
//   const actualSum = A.reduce((sum,num) =>{sum + num}, 0);
//   if ( setCheck.size === A.length && expectedSum === actualSum &&Math.max(...A) === n && Math.min(...A) === 1){
//     return 1;
//   }
  const n = A.length;

  if (setCheck.size === n && Math.max(...A) === n && Math.min(...A) === 1) {
    return 1;
  } else {
    return 0;
  }
return 0;
}

//maxCounters
function solution(N,A){
  let result = new Array(N).fill(0);
  let maxCounter =0;
  for(let i =0; i < A.length; i++){
    if(A[i] === N +1){
      // result = result.map(() => maxCounter);
      result = result.fill(maxCounter);
    } else{
      result[A[i]] +=1;
      maxCounter ++;
      }
    }
    return result;
  }
