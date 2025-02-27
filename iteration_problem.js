//BinaryGap
// using for loop as iteration method

function solution(N){
  let binary = N.toString(2);
  let curGap = 0;
  let maxGap = 0;

  for (let i = 0; i < binary.length; i++){
    if (binary[i] === '0'){
      curGap ++;
    } else if (binary[i] ==='1'){
      maxGap = Math.max(maxGap,curGap);
      curGap = 0;
    }

  }
  return maxGap;

}