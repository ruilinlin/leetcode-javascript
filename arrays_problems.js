//cyclic rotation
function solution(A,K){
  let AL = A.length;
  if(AL ===0 || K ===o){
    return A;
  }
  let K = K % AL;
  for (let i =0; i < AL; i++){
    let newIndex = (i+k) %AL;
    rotatedArray[newIndex] = A[i];
  }
  return rotatedArray;
}

//odd occurences in array
function solution(A){
  let AL = A.length;
  for(let i = 0; i < AL; i++){
    result ^= A[i];
  }
  return result;
}

// odd occurences in array solution2
function solution2(A){
  let AL = A.length;
  //creat a map to store the count of each element
  const countMap = {};
  
  // iterate this array and count the occurences of each element
  for (let i= 0; i< AL; i++){
    countNum =  A[i];
    if (countMap[countNum] =  undefined){
      countMap[countNum] = 1;
    }else{
      countMap[countNum]++;
    }
  }
  // iteratethe whole map and find the elemnt with odd count
  for (const num in countMap){
    if (countMap[key] % 2!==0){
      return parseInt(key);
    }
  }
  //if no odd occurences number, return -1
  return -1;
}