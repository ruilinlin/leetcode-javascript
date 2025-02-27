// countfactors
function solution(N){
  let count = 0;
  for(let i =  1; i * i <= N; i++){
    if(N%i === 0){
      count += 2;
      if(i * i === N){
        count --;
      }
    }
  }
  return count;
}