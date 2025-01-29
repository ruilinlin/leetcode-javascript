// distinct
function solution(A){
  let removeRepeat = new Set(A);
  return removeRepeat.size;
}

// max product of three
function solution(A){
  let sortedArr = A.sort((a,b) => a -b);
  const length = sortedArr.length;
  let maxProduct = sortedArr[length -1] * sortedArr[length -2] * sortedArr[length -3];
  let maxProduct2 = sortedArr[0] * sortedArr[1] * sortedArr[length -1];
  return Math.max(maxProduct,maxProduct2);
}

// triangle
function solution(A){
  let sortedArr =  A.sort((a,b) => b -a).filter(item => item > 0);
  for(let i = 0; i < sortedArr.length -2; i++){
    let cur = sortedArr[i];
    if (cur < sortedArr[i+1] +sortedArr[i+2]){
      return 1;
    }
  }
  return 0;
}
