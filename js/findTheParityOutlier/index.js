function findOutlier(integers){
  let onlyOdd = integers.filter(el => el % 2 == 0);
  let onlyEven = integers.filter(el => el % 2 != 0);

  return onlyOdd.length == 1 ? onlyOdd[0] : onlyEven[0];
}