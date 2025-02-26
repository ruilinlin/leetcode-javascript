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
  return stack[0];
}