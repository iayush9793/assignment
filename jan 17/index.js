 function manipulatearray(array, functionality) {
   var result = [];
   for (let i = 0; i < array.length; i++) {
     var y = functionality(array[i]);
     result.push(y);
   }
   return result;
 }
 
  
  var mulBy4 = function (n) {
    return n * 4;
  };
  
  function add9(n) {
    return n + 9;
  }
  
  var x = [1,2,4,5];
  var val1 = manipulatearray(x, mulBy4);
  var val2 = manipulatearray(x, add9);
  console.log(val1);
  console.log(val2);