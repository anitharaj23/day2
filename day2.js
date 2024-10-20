// variables
// variables are containers that stores the data or value.
// using asssignment operator(=) we can assign a value to variable name 
// we can assign a value to a variable in three ways
// var / let / const

var a=10;
console.log(a);

let b=20;
console.log(b);

const c=30;
console.log(c);

//DATA TYPES
// there are two types of datatypes 
//1) primitive data types --> number,string,boolean,undefined,null-->these are single valued data types and immutable
var num=100; // number datatype
console.log(num);

var str='anitha'; //string data type
console.log(str);

console.log(true); // boolean datatype

var a;             // undefined datatype
console.log(a);

var d=null;        // null datatype
console.log(d);


//2) non primitive data types --> object and array

var obj={          // object is a collection of data which is stored in the form of key value pair it is mutable in nature.
    name:'anitha',
    age:21
}
console.log(obj);


let arr=[1,'anitharaj',{subject:'javasript'},true]
console.log(arr);  // array is a orderd collection of data it can store different types of data and it is mutable in nature.