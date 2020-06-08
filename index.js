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
    newArr.push(elem *2);
  });

  return newArr;

}
function mapToSquare(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem **2);
  });

  return newArr;

}
function reduceToTotal(sourceArray,startingPoint){

  sourceArray.forEach(element => {
    return startingPoint+=element ;

  });
return startingPoint

}

