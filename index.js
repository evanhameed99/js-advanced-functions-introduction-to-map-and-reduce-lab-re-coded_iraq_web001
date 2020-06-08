// Your code here
function mapToNegativize(sourceArray) {
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem * -1);
  });

  return newArr;
}
function mapToNoChange(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem );
  });

  return newArr;

}
function mapToDouble(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem **2);
  });

  return newArr;

}
