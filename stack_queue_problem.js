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
  // 向上存活鱼的个数
  let alive = 0;

  for(let i = o; i < A.length; i++){
    if(B[i] === 1){      
      stack.push(A[i]);
    }else{
      // stack.length代表向下存活鱼的个数
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

// nesting

function solution(S) {
  const stack = [];
  for(const char of S){
      if (char === '('){
          stack.push('(');
      }else{
          if (stack.length === 0) return 0;
          stack.pop();
      }
  }
  return stack.length ===0 ? 1 : 0;
}


//stone wall
function solution(H){
  const stack = [];
  let counter =0;
  for( const height of H){
    while (stack.length > 0 && stack[stack.length -1] <= height){
      stack.pop();
      counter++;
    }
    if(stack.length ===0 || stack[stack.length -1] > height){
      stack.push(height);
    }
  }
  return counter + stack.length;
}