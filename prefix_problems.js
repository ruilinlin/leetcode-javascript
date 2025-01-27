// Passing Cars
function solution(A) {
  let eastCount = 0; // 记录向东行驶的车辆数量
  let passingCars = 0; // 记录经过的车辆对数量

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      // 遇到向东行驶的车，记录其数量
      eastCount++;
    } else if (A[i] === 1) {
      // 遇到向西行驶的车，与之前所有向东行驶的车配对
      passingCars += eastCount;

      // 如果经过的车辆对数量超过 1,000,000,000，则返回 -1
      if (passingCars > 1000000000) {
        return -1;
      }
    }
  }

  return passingCars;
}

// countdiv
function solution(A, B, K) {
  // 计算从 0 到 B 之间可以被 K 整除的数字个数
  const divisibleUpToB = Math.floor(B / K);
  // 计算从 0 到 A-1 之间可以被 K 整除的数字个数
  const divisibleUpToA = Math.floor((A - 1) / K);
  // 两者的差即为 [A, B] 区间内可以被 K 整除的数字个数
  return divisibleUpToB - divisibleUpToA;
}
