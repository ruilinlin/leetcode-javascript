// dominator
function solution(A){
  // 找到候选者
  let stack = [];
  for(let i =  0; i < A.length; i++){
    if(stack.length === 0 || stack[stack.length -1] === A[i]){
      stack.push(A[i]);
    }else{
      stack.pop();
    }
  }
  // 没有候选者
  if(stack.length === 0)
    return -1;

  // 验证候选者
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

// equileader
function solution(A){
  let stack = [];
  // 找到候选者
  for(let i = 0; i < A.length; i++){
    if(stack.length === 0 || stack[stack.length -1] === A[i]){
      stack.push(A[i]);
    }else{
      stack.pop();
    }
  }
  if(stack.length === 0)
    return 0;
//  验证候选者
  const candidate = stack[0];
  let count = 0;
  for(let nums of A){
    if(nums === candidate)
      count++;
  }
  if(count <= A.length / 2)
    return 0;
// 计算等分点
  let equileader = 0;
  let leftLeader = 0;
  for(let i = 0; i < A.length; i++){
    if(A[i] === candidate)
      leftLeader++;
    if(leftLeader > (i + 1) / 2 && count - leftLeader > (A.length - i - 1) / 2)
      equileader++;
  }
  return equileader;
}
