;
/**
 * ArrayFornmatter library will provide a utitlty methods
 * to do array manipulation
 * 
 */
(function (global) {

var sortOrder = ["ASCE", "DESC"];  

// return array formatter object
var ArrayFormatter = function(arr) {
    return new ArrayFormatter.init(arr);
}

// caculates the toatl sum of array elements.
function calculateSum() {
    const result = this.array.reduce((acc, value) => { acc = acc + value; return acc; },  0);
    return result;
}

// sorts the array in asending and descnding order.
function sortArray(order) {
    if (order && !(sortOrder.includes(order))) {
       throw "Invalied sort order is passsed. Try passing ASCE or DESC";
    } else if (order && order === "DESC") {
        return this.array.sort(function(a, b){return b-a});
    } else {
        return this.array.sort(function(a, b){return a-b});
    }
}

// concatenates the parent array with other arrays.
function join(...arr) {
    console.log("itemsssss, ", arr);
    if (arr && arr.length > 0) {
      this.array = [...this.array, arr.flat(Infinity)];
    }
    return this.array;
}

// replaces old array with new one.
function replaceArray(arr) {
    this.array =  arr ? arr : this.array;
    return this.array;
}

// inserts new element to array.
function push(item) {
    if (!item) {
        throw "You can't push any empty item to array"
    }
    this.array = [...this.array,  item];
    return this.array;
}

// deletes last element in the array.
function pop() {
    this.array = this.array.slice(0, this.array.length - 1);
    return this.array;
}

// finds the lowest element in the array
function lowestElementinArray() {
    const result = this.array.length > 0 ? this.array.sort(function(a, b){return a-b}) : [ undefined ];
    return result[0];
}

// finds the highest element in the array
function highestElementinArray() {
    const result = this.array.length > 0 ? this.array.sort(function(a, b){return b-a}) : [ undefined ];
    return result[0];
}

// validate if array has only integer elements or not.
function validateArray() {
        if(this.array.filter((item) => isNaN(item)).length > 0) {
            throw "Array should contain only integer values";
        }
}

// executes the callback function on the array.
function processArray(callback) {
    const result = callback(this.array);
    return result;
}

// defining array formtter prototype, adding methods here saves the memory
ArrayFormatter.prototype = {
    isArrayInteger: validateArray,
    sum: calculateSum,
    sort: sortArray,
    lowest: lowestElementinArray,
    highest: highestElementinArray,
    join: join,
    replace: replaceArray,
    push: push,
    pop: pop,
    run: processArray,
};

// initializing array formatter object
ArrayFormatter.init = function(arr) {
    var self = this;
    self.array = arr || [];
    self.length =  arr.length;
    self.isArrayInteger();
};

// creating object without using 'new'
ArrayFormatter.init.prototype = ArrayFormatter.prototype;

// making arrayFormatter available to the global object
global.ArrayFormatter = ArrayFormatter;

}(window));
