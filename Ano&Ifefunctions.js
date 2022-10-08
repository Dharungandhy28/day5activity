//Anonymous function and IIFE functions
// a. print an odd number in an array

let arr = [11,12,13,14,15,16,17,18,19,20]
        let anonymous = function (){
            let odds = arr.filter(n => n%2)
                console.log(odds)       

        }
        anonymous();
//IIFE FUNCTION
        (function (){
            let odds = arr.filter(n => n%2)
                console.log(odds)       
        })(arr);



// b. convert all the strings to title caps in a string array

let strObj = {strK:'convert the string to title caps'};

        let titleCaseAnony = function (args) {
            str = args.strK.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            console.log(str.join(' '));
            }
            titleCaseAnony(strObj);
//IIFE function
        (function (argsT) {
            strT = strObj.strK.toLowerCase().split(' ');
            for (var i = 0; i < strT.length; i++) {
                strT[i] = strT[i].charAt(0).toUpperCase() + strT[i].slice(1);
            }
            console.log(strT.join(' '));
        })(strObj);


// c. sum of all numbers in an array

let array = [21,22,23,24,25,26,27,28,29,30];
let anonymou = function (){
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
anonymou();
//IIFE function 
(function (){
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
})(array);


// d. Return all the prime numbers in an array

const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
        let anonymouss = function (){
            let prime = arr1.filter(n => {
                for (var i = 2; i < n; i++) {
                    if (n % i === 0) {
                        return false;
                    }
                }
                return true;
            });
            console.log(prime);
        }
        anonymouss(arr1);
//IIFE function 
        (function (){
            let prime = arr1.filter(n => {
                for (var i = 2; i < n; i++) {
                    if (n % i === 0) {
                        return false;
                    }
                }
                return true;
            });
            console.log(prime);
        })(arr1);


// e. Return all the palindroms in an array

let arr2 = ['pop','abcdefghi','iceland','racecar','madam','mam']; 
        let anonymous1 = function (){
            let palindrome = arr2.filter(n => {
                return n.split('').reverse().join('') === n;
            });
            console.log(palindrome);
        }
        anonymous();
//IIFE function 
        (function (){
            let palindrome = arr2.filter(n => {
                return n.split('').reverse().join('') === n;
            });
            console.log(palindrome);
        })();


// f. Return medium of two sorted array of the same size

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];

let anonymous2 = function (ar1,ar2,n){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++){
        if (i == n){
            m1 = m2;
            m2 = ar2[0];
            break;
        }else if (j == n){
            m1 = m2;
            m2 = ar1[0];
            break;
        }if (ar1[i] <= ar2[j]){
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }else{
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
return (m1 + m2)/2;
}
anonymous2();
var n2 = ar2.length;
var n1 = ar1.length;
if (n1 == n2)
    console.log("Median is "+ anonymous2(ar1, ar2, n1)+"through anonymous function");
else
    console.log("Doesn't work for arrays of unequal size");

// IIFE Function    
(function(ar1,ar2,n){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++){
        if (i == n){
            m1 = m2;
            m2 = ar2[0];
            break;
        }else if (j == n){
            m1 = m2;
            m2 = ar1[0];
            break;
        }if (ar1[i] <= ar2[j]){
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }else{
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
return (m1 + m2)/2;

})();
var n4 = ar2.length;
var n3 = ar1.length;
if (n3 == n4)
    console.log("Median is "+ anonymous2(ar1, ar2, n3)+"through IIFE");
else
    console.log("Doesn't work for arrays of unequal size");


// g. Remove duplicate from an array

let array1 = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
        let anonymous3 = function (){
            let unique = array1.filter((n,i,a) => {
                return a.indexOf(n) === i;
            });
            console.log(unique);
        }
        anonymous3();
        //IIFE function
        (function (){
            let unique = array1.filter((n,i,a) => {
                return a.indexOf(n) === i;
            });
            console.log(unique);
        })();