// dominator
function solution(A){
  let stack = [];
  for(let i =  0; i < A.length; i++){
    if(stack.length === 0 || stack[stack.length -1] === A[i]){
      stack.push(A[i]);
    }else{
      stack.pop();
    }
  }
  if(stack.length === 0)
    return -1;

  const candidate = stack[0];
  let count = 0;
  for(let nums of A){
    if (nums === candidate)
      count++;

  }
  if(count > A.length / 2)
    return A.indexOf(candidate);
  return -1;
}