// brackets
function solution(A){
  let stack = new Array();
  for(let i = 0; i < A.length; i++){
    if(A[i] ==='(' || A[i] ==="{" || A[i] === "["){
      stack.push(A[i]);
    }else{
      if(stack.length === 0){
        return 0;
      }
      let top = stack.pop();
      if(A[i] ===')' && top !=='('|| (A[i] ==='}' && top !=='{') || (A[i] ===']' && top !=='['))
      {
        return 0;
      }
    }
  }
  return stack.length ===0 ? 1 : 0;
}


// fish
function solution(A, B){
  let stack = new Array();
  let alive = 0;

  for(let i = o; i < A.length; i++){
    if(B[i] === 1)[
      stack.push(A[i]);
    ]else{
      while(stack.length >0){
        if(stack[stack.length -1] > A[i]){
          break;
        }else{
          stack.pop();
        }
      }
      if(stack.length === 0){
        alive++;
      }
    }
  }
  return alive + stack.length;
}