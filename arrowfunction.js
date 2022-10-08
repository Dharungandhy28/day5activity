// Arrow functions

// a. print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
        let anonymous = ()=>{
            let odds = arr.filter(n => n%2)
                console.log(odds)       
        }
        anonymous();

// b. convert all the strings to title caps in a string array

let strObj = {strK:'this is a string should be in caps'};
        let titleCaseAnony = (args)=> {
            str = args.strK.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            console.log(str.join(' '));
            }
            titleCaseAnony(strObj);

// c. sum of all numbers in an array

let arr1 = [11,12,13,14,15,16,17,18,19,20];
        let anonymous1 = ()=>{
            let sum = 0;
            for (var i = 0; i < arr1.length; i++) {
                sum += arr1[i];
            }
            console.log(sum);
        }
        anonymous1();

// d. Return all prime numbers in an array

const array2 = [1,2,3,4,5,6,7,8,9,10]; 
        let anonymous3 = ()=>{
            let prime = array2.filter(n => {
                for (var i = 2; i < n; i++) {
                    if (n % i === 0) {
                        return false;
                    }
                }
                return true;
            });
            console.log(prime);
        }
        anonymous3(array2);

// e. Return all palindromes in an array

let ar = ['pop','abcdefghijklmn','iceland','racecar','madam','mam']; 
        let anonymous4 = ()=>{
            let palindromes = ar.filter(n => {
                return n.split('').reverse().join('') === n;
            });
            console.log(palindromes);
        }
        anonymous4();