// 4.1 | The sum of range

// Your code here.
function sum(array) {
	var sum = 0;
    
    for (var i = 0; i < array.length; i++)
      	sum += array[i];
   
    return sum;
}

function range(start, end, step) {
	if (step == undefined)
      	if (start <= end)
      		step = 1;
  		else
          	step = -1;
        
    var range = [];
    
  	if (step > 0) {
    	for (var i = start; i <= end; i++) 
      		range.push(i);
    } else if (step < 0) {
    	for (var i = start; i >= end; i += step) 
      		range.push(i);
    }
  
    return range;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// 4.2 | Reversing array

function reverseArray(array) {
  var newArray = [];
 
    for (var i = 0; i < array.length; i++)
        newArray.unshift(array[i]);
        
    return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < array.length / 2; i++)
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]