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
