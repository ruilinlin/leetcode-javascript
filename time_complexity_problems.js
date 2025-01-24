//FROGJMP
function solution(A,B,K){
 let count = 1;
 for (let i = A; i <= B ; i++){
  if(i+count*K <= B){
    count++;
  }
 }
 return count;
}