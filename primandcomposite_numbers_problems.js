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

//flags
class solution(N){
  // find peaks
  function findPeaks(N){  
    let peaks = [];
    for(let i = 1; i< N.length; i++){
      if (N[i]>N[i-1] && N[i+1]<N[i]){
        peaks.push(i);
      }
    }
  }

  // check if we can place k flags
  function canPlaceKFlags(peaks,k){
    let flagNumber = 1;
    let lastFlags = peaks[0];
    for(let i = 1; i < peaks.length; i++){
      if(peaks[i] - lastFlags >= k){
        flagNumber++;
        lastFlags = peaks[i];
        if(flagNumber === k){
          return true;
        }
      }
    }
    return false;
  }
// 二分搜索法寻找最大k
  function findMaxFlags(A){
    let peaks = findPeaks(A);
    if(peaks.length = 0){
      return 0;
    }
    let minFlags = 1;
    let maxFlags =  peaks.length;
    let result = 0;
    while( minFlags <= maxFlags){
      let mid  = Math.floor((minFlags + maxFlags)/2);
      if(canPlaceKFlags(peaks,mid)){
        result = mid;
        low = mid + 1;
      }else{
        high = mid -1;
      }
  }
  return result;

}