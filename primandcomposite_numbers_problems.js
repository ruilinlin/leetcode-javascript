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

// minperimeterrectangle
function solution(N){
  // find the factors of N
  let factors = [];
  for(let i = 1; i * i <= N; i++){
    if (N%i === 0){
      factors.push(i);
    }
  }
  // find the largest factor
  let largestFactor = factors[factors.length -1];
  let anotherFactor = N/largestFactor;
  return 2*(largestFactor + anotherFactor);
}