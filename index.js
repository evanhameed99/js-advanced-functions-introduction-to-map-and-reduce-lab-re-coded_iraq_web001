// Your code here
function mapToNegativize(sourceArray) {
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem * -1);
  });

  return newArr;
}
mapToNegativize([1, 2, 3]);
