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

// 4.3 || A List

// Your code here.
function arrayToList(array) {
	return {
    	value: array[0],
      	rest: array.length > 1 ? arrayToList(array.slice(1)) : null
    }
}

function listToArray(list) {
  	if (list.rest)
      return [list.value].concat(listToArray(list.rest));
  	else
      return [list.value]
}

function prepend(element, list) {
	return {
    	value: element,
      	rest: list
    }
}

function nth(lista, number) {
	var i = 0;
  
  	do {
        if (i == number) 
        	return lista.value;
        else if (lista.rest == null) 
        	return undefined;
 
        lista = lista.rest
        i++;
    } while (true);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

// 4.4 | Deep comparison

// Your code here.
function deepEqual(a, b) {
	if (a != null && typeof a == 'object' && b != null & typeof b == 'object') {
        for (var key in a)
          if (!deepEqual(a[key], b[key])) return false;
      
        return true;
    } else
      	return a === b;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true