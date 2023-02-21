function getSum(a, b)
{
   let resultArr = [];
   if(a == b) {
      resultArr.push(a);
   } else if (a < b) {
      for(let i = 0; i < Math.abs(b-a) + 1; i++) {
         resultArr.push(a + i);
      }
   } else {
      for(let i = 0; i < Math.abs(a-b) + 1; i++) {
         resultArr.push(b + i);
      }
   }

   return resultArr.reduce((a,b) => a + b);
}
