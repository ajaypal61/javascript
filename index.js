


// 1.  values and variables

// var name number(1,2...) se start nhi hota




// var myname = 'ajay rathore';
// var myage = 26;

// console.log(myname);
// console.log(myage);

                                                                       



// 2. data types in javascript
// six data type


// 1. undefined
// 2. boolean true,false
// 3. number     1,2..
// 4. string     name
// 5. bigInt
// 6. symbol



// var myName = 'ajay rathore';

// console.log(typeof(myname));
// console.log(myName);



// 3. EXPRESSIONS AND OPERATORS
// six type of OPERATORS
// 1. assignment operators =

// 2. arithmetic operators

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);


// console.log("remainder operator " + 27%4);

// 3. INCREMENT AND DECREMENT OPERATOR
// x++(postfix  INCREMENT OPERATOR ), ++x(prefix INCREMENT OPERATOR )

// var num= 15;
// var newnum = num++;

// console.log(num);
// console.log(newnum);


// var num= 15;
// var newnum = ++num;

// console.log(num);
// console.log(newnum);


// x--(postfix  INCREMENT OPERATOR ), --x(prefix INCREMENT OPERATOR )


// var num= 15;
// var newnum = num--;

// console.log(num);
// console.log(newnum);


// var num= 15;
// var newnum = --num;

// console.log(num);
// console.log(newnum);


// 4. comparison operators
// ==, !=, >,<

// != not equal hota hai matlb dono same nhi hai

// var a = 5;
// var b = 7;
// console.log(a != b);
// console.log(a >= b);



// var a = 50;
// var b = 50;
// console.log(a >= b);

// 5. logical operators
// and(&&), or(||),not(!)

// var a = 30;
// var b = -20;

// console.log(a > b && b > -50 && b < 0);
// sare operators true ho to true aata hai


// console.log(a > b || b > 0 || b < 0);
// koi ek bhi true hone par true aata hai

// console.log(!((a > b) || ( b < 0)));
// console.log(!true);
// ye ulta kar deta hai true ko false or false ko true


// string operators
// console.log("ajay "+ "rathore");








// 4. controt statement and loops
// A. if else
// B. switch statement
// C. while loop
// D. do-while loop
// E. for loop
// F. for in loop
// G. for of loop
// H. conditional(ternary) operator




// A. if else


// var tomr = "sunny";
    
// if (tomr == "rain") {
//     console.log("Take A Raincoat");
// } else {
//     console.log("No need to take a raincoat");
// }



// var year = 2020;

// if (year % 4 === 0) {
//     if(year % 100 === 0){
//         if (year % 400 === 0) {
//             console.log("The year " + year + " is a leap year");
//         } else {
//             console.log("The year " + year + " is not a leap year");
//         }
//     } else {
//         console.log("The year " + year + " is a leap year");
//     }
// } else {
//     console.log("The year " + year + " is not a leap year");
// }


// *********************** Truthy and Falsy *******************************

// truthy true hota hai
// falsy false hota hai

// falsy == 0,"",undefined , null , nan , false


// if (score=0) {
//     console.log("we loss the game");
// } else {
//     console.log("we won the game");
// }




// H. conditional(ternary) operator


// var age = 19;
// console.log((age >= 18)? "you can vote" : "you can`t vote ");




// B. switch statement



// var area = "rectangle";
// var pi = 3.142, l = 5, b = 4, r = 3;

// switch (area) {
//     case "circle":
//         console.log("the area of circle is : " + pi*r**2);
//         break;
//     case "triangle":
//         console.log("the area of triangle is : " + (l*b)/2);
//         break
//     case "rectangle":
//         console.log("the area of rectangle is : " + (l * b));
//         break
//     default:
//         console.log("please enter valid data");
//         break;
// }


// note =   break lga dene se condison aage nhi jati hai
 



// C. while loop





// var num = 0;

// while (num<=10) {
//     console.log(num);
//     num++;
// }



// ye block scope hota hai




// D. do-while loop



// var num = 20;

//  do{
//     console.log(num);
//     num++;
// }while (num<10)


// while loop and do while loop me ye anatar hota hai ki while loop condison pahle hi dekh leta or do while loop pahle nhi dekhta hai







// E. for loop


// for (Number; condition; iteration){

// }

// for (var num = 0; num <= 10;num++){
//     console.log(num)
// }






// F. for in loop







// G. for of loop










// ############### functions in javascript ############





//  function definition  calling function


// function sum() {
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }

// sum();






// function parameter and  function arguments




// function sum(a,b) {
//     var total = a + b;
//     console.log(total);
// }

// sum();
// sum(25,25);
// sum(88,22);
// sum(88.5,22.5);





// function expressions





// function sum(a,b) {
//     var total = a + b;
//     console.log(total);
// }

// var funexp = sum(5, 15);




// return keyword





// function sum(a,b) {
//     return total = a + b;
// }

// var funexp = sum(5, 15);
// console.log(funexp);




// anonymous function






// function sum(a,b) {
//     return total = a + b;
// }

// var funexp = sum(5, 15);
// console.log(funexp);













// #####################################################################################################################






// modern javascript



// ECMAScript 2015 also know as ES6

// 1. let and const 
// 2. template strings 
// 3. arrow function 
// 4. destructuring 
// 5. object proptiy 
// 6. default arguments 
// 7. arrays in ES6 
// 8. new Node. methods 
// 9. new global methods 



// 1. LET VS CONST VS VAR


// var = function scope
// let and const = block scope

// function biodata() {
//     var myfirstname = "ajay";
//     console.log(myfirstname);
//     if (true) {
//         var mylastname = "rathore";
//         console.log("inner " + mylastname);
//         console.log("inner " + myfirstname);
//     }
//     console.log("innerouter " + mylastname);
// }
// biodata();



// function biodata() {
//     let myfirstname = "ajay";
//     console.log(myfirstname);
//     if (true) {
//         let mylastname = "rathore";
//         console.log("inner " + mylastname);
//         console.log("inner " + myfirstname);
//     }
//     console.log("innerouter " + mylastname );
// }
// biodata();

// block scope hai {} block se bahar ka nhi leta hai


// function biodata() {
//     const myfirstname = "ajay";
//     console.log(myfirstname);
//     if (true) {
//         const mylastname = "rathore";
//         console.log("inner " + mylastname);
//         console.log("inner " + myfirstname);
//     }
//     console.log("innerouter " + mylastname );
// }
// biodata();


// block scope hai {} block se bahar ka nhi leta hai




// 2. template literals (template strings )



// table 8


// for (var num = 1; num <= 10; num++){
//     var tableof = 8;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }





// 3. default parameters




// 4. fat arror function



// function sum() {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return`the sum of the two number is ${a+b}`
// }

// console.log(sum());




// const sum = () => {
//     let a= 5; b = 7;
//     return `${a + b}`;
// }

// console.log(sum());
 





// const sum = () =>  `the sum of the two number is ${(a=5)+(b=6)}`

// console.log(sum());










// ####################################################################################################





// 6. arrays in javascript



// a1. traversal in array


// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];
// // console.log(myfrnd[myfrnd.length-1]);
// console.log(myfrnd[4]);




// for loop se ye hota hai


// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];

// for (var i = 0; i < myfrnd.length; i++){
//     console.log(myfrnd[i]);
// }




// for in loop
// ye sirf index number ko hi btata hai



// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];

// for (let elements in myfrnd) {
//     console.log(elements);
// }


// for of loop



// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];

// for (let elements of myfrnd) {
//     console.log(elements);
// }



// for each loop


// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];

// myfrnd.forEach(function (element, index, array) {
//     console.log(element + ":" + index + " " + array);
// });


// fat arroy function


// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj', 'mukesh'];

// myfrnd.forEach((element, index, array) =>{
//     console.log(element + ":" + index + " " + array);
// });






// a2. searching and filter in an array
// array prototype.indexOf()



// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj','sukumar','mukesh', 'sonu'];
// console.log(myfrnd.indexOf("sonu",3));

// sonu name ko search krega or 3 index number se search krega



// array prototype.lastIndexOf
// ye last se search krta hai



// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj','sukumar','mukesh', 'sonu'];
// console.log(myfrnd.lastIndexOf("sonu"));



// array prototype.includes
// is index me koi name hai yaa nhi ye btata hai




// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj','sukumar','mukesh', 'sonu'];
// console.log(myfrnd.includes("pankaj"));









// a3. array prototype find

// isme only ek index number hi aata hai


// const prices = [200, 300, 350, 400, 500, 600];

// // prices < 400

// const findel = prices.find((currval) => {
//     return currval < 400;
// });
//  console.log(findel);


//  console.log( prices.find((currval) => currval<400));






// find index
// ye index number btata hai


// const prices = [200, 300, 350, 400, 500, 600];



//  console.log( prices.findIndex((currval) => currval<400));






// array prototype filter
// ye index number or arry dono deta hai


// const prices = [200, 300, 350, 400, 500, 600];

// prices <400

// const newprice = prices.filter((elem, index) => {
//     return elem < 400;
// });
// console.log(newprice);

// console.log( prices.filter((elem,index)=> elem<400));




// how to sort and compare an array


// sort
// a to z krta hai




// var myfrnd = ['ajay', 'vikash', 'sonu', 'pankaj','sukumar','mukesh', 'sonu'];


// console.log(myfrnd.sort());




// perform CRUD


// prototype push()
// new data add kr deta hai
// ek se jyada bhi data use kr sakte hai


// const anials = ['pigs', 'goats', 'sheep','cow'];
// const  count= anials.push('chicken', 'cats');
//  console.log(anials);
//  console.log(count);



// unshift
// ye data start me add krta hai



// const anials = ['pigs', 'goats', 'sheep','cow'];
// const  count= anials.unshift('chicken');
//  console.log(anials);
//  console.log(count);




// pop
// kisi data ko remove krne ke liye use krte hai
// last data ko remove krta hai




// const anials = ['pigs', 'goats', 'sheep','cow'];


// console.log(anials);
// console.log(anials.pop());
// console.log(anials);



// shift
// ye first data ko remove krta hai




// const anials = ['pigs', 'goats', 'sheep','cow'];


// console.log(anials);
// console.log(anials.shift());
// console.log(anials);







// ############################## prototype splice




// // add dec at the end


// const months = ['jan', 'march', 'april', 'june', 'july'];

// // const newmonths = months.splice(5, 0, 'dec');
// const newmonths = months.splice(months.length, 0, 'dec');
// // console.log(months.length);
// console.log(months);
  




// march to March


// const months = ['jan', 'march', 'april', 'june', 'july'];

// const uodatemonths = months.splice(1, 1, 'March');
// console.log(months);





// const months = ['jan', 'march', 'april', 'june', 'july'];

// const indexofmonth = months.indexOf('march');

// if (indexofmonth != -1) {
// const updatemonths = months.splice(indexofmonth, 1, 'March');
// console.log(months);
// }else {
//     console.log('no');
// }



// delete june array



// const months = ['jan', 'march', 'april', 'june', 'july'];

// const indexofmonth = months.indexOf('june');

// if (indexofmonth != -1) {
// const updatemonths = months.splice(indexofmonth, 1,);
// console.log(months);
// }else {
//     console.log('no');
// }








// map and reduce method ##########



// const array1 = [1, 4, 9, 16, 25];

// // num>9

// let newarr = array1.map((curelem, index, arr) => {
//     return curelem > 9;
// });
// console.log(array1);
// console.log(newarr);



// const array1 = [1, 4, 9, 16, 25];


// let newarr = array1.map((curelm, index, arr) => {
//     return `Index no = ${index} and the value is ${curelm} belong to ${arr} `
// });

// console.log(newarr);




// ################################################  reduce method



// accumulator
// current value
// current index
// source array





// let arr = [5, 6, 5];



// let sum = arr.reduce((accumulator, curelem) => {
//     return accumulator += curelem;
// })

// console.log(sum);


// 4 subj = 7
// 3 subj =[5,6,5]
// to 7 ko kese add krege



// let arr = [5, 6, 5];



// let sum = arr.reduce((accumulator, curelem) => {
//     return accumulator *= curelem;
// },7)

// console.log(sum);


// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']
// ];

// let newarr = arr.reduce((accum, currval) => {
//     return accum.concat(currval);
// })
// console.log(newarr);








// ######################################################################################################################################

















// strings in javascript ###########################




// string ko '' yaa "" code me use kr saklte hai



// let name = 'Ajay Rathore';
// let name1 = "Ajay Rathore";


// console.log(name);
// console.log(name1);

// // length ke liye
// console.log(name1.length);






// Escape character
// '' code ke andar ""code use kr sakte hai
// '' code ke andar ''code use nhi kr sakte hai
// "" code ke andar '' code use kr sakte hai
// "" code ke andar "" code use nhi kr sakte hai




// let line = 'ajay \'singh\' rathore';
// console.log(line);

// let line = 'ajay "singh" rathore';
// console.log(line);





// searching for a string in a string






// const mybio ='I am ajay rathore';
// let sdata = mybio.search('ajay');
// console.log(sdata);





// Extracting string parts


// slice (start,end)
// substring(start,end)
// substr(start,length)


// slice
// slice (start,end) ye start ke point ko ginta hai but end ke point nhi ginta





// var str = "apple, banana, kiwi, mango";

// let res = str.slice(0, 4);

// console.log(res);




// var str = "apple, banana, kiwi, mango";

// let res = str.slice(6, -2);
// console.log(res);




// substring method


// var str = "apple, banana, kiwi, mango";

// let res = str.substring(8, -1);
// console.log(res);



// substr method
// isme - ka use nhi kr sakte

// var str = "apple, banana, kiwi, mango";

// let res = str.substring(0, 8);
// console.log(res);








// replacing string content
// replace krta hai
// ye first value ko hi change krtra



// let name1 = 'i am ajay rathore ajay';


// let newname2 = name1.replace('ajay', 'AjAy');
// console.log(newname2);





// charat method





// let name1 = 'i am ajay rathore ajay';



// console.log(name1.charAt(8));




// charcodet method
// unicode ko return krta hai





// let name1 = 'i am ajay rathore ajay';



// console.log(name1.charCodeAt(6));




// property access



// let name1 = 'i am ajay rathore ajay';
// console.log(name1[2]);






// other useful methods


// let name1 = 'i am ajay Rathore ajay';


// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());





// string trim
// ye space ko remove kr deta hai


// let name1 = '                 i am ajay Rathore ajay                      ';


// console.log(name1.trim());
// console.log(name1);
















// ################################################################################################################################################








// date and time in javascript


// 1 january 1970
// year, month,day,hours, minutes,seconds, millisecconds








// 1.
// new date





// let currdate = new Date();

// console.log(currdate);








// 2.
// Date.now
// ye 1 january 1970 se aaj tk ki milliscdeonds batata hai


// console.log(Date.now())








// 3.
// new Date (year, month,day,hour,minute,second,millisecond )



// var d = new Date(2021, 2, 25, 14, 40, 24, 11);

// console.log(d.toLocaleString());


// var d = new Date();

// console.log(d.toLocaleString());



// var d = new Date();

// console.log(d.toString());





// new date(datestring)
 

// var d = new Date('october 16,2014 11:14:00');

// console.log(d.toLocaleString());




// new Date(milliseconds)


// var d = new Date(0);

// var d = new Date(1645947560196);
// console.log(d.toLocaleString());







// dates method


// const curdate = new Date();



// console.log(curdate.toLocaleString());
// console.log(curdate.getFullYear());
// console.log(curdate.getMonth());
// console.log(curdate.getDate());
// console.log(curdate.getDay());











// time method




// const curdate = new Date();



// console.log(curdate.getTime());
// console.log(curdate.getHours());
// console.log(curdate.getMinutes());
// console.log(curdate.getSeconds());
// console.log(curdate.getMilliseconds());




// set time









// let curdate = new Date();



// // console.log(curdate.getTime());
// console.log(curdate.setHours(5));
// console.log(curdate.setMinutes(5));
// console.log(curdate.setSeconds(5));
// console.log(curdate.setMilliseconds(5));





// only date and time ke liye



// const curdate = new Date();


// console.log(curdate.toLocaleDateString());
// console.log(curdate.toLocaleTimeString());
// console.log(curdate.toLocaleString());






// new Date(curdate).toLocaleDateString();
// new Date().toLocaleTimeString();
// new Date().toLocaleString();























// ################################################################################################################################







// math object in javascript


// console.log(Math.PI);



// Math.round
// ye 10.25584 ho to 10 kr deta hai
// ye 10.5584 ho to 11 kr deta hai



// let num = 10.474
// console.log(Math.round(num));



// let num = 10.574
// console.log(Math.round(num));

// const a = "ajay";
// console.log(a);


// const sa = 17.5000;
// console.log(Math.round(sa));

// math pow


// console.log(Math.pow(2,3));
// console.log(2**3);




// math sqrt


// console.log(Math.sqrt(25));
// console.log(Math.sqrt(5));





// math abs
// - ko + kr deta hai


// console.log(Math.abs(-55));
// console.log(Math.abs(40-55));




// math ceil
// ye 4.1 ko 5 kr detA HAI

// console.log(Math.ceil(4.1));






// math floor
// 4.1 ko 4 or 4.99 ko bhi 4 rkhtya hai


// console.log(Math.floor(4.99));





// math min
// sab se kam vala aata hai


// console.log(Math.min(0,150,24,74,55,-55,-99));





// math max



// console.log(Math.max(0,150,24,74,55,-55,-99));






// math random
// isme har bar number change hote
// 100 ki jagah kuch bhi likh sakte hai


// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 100));







// math trunc

// ye . se pahle jo number h vo return kr deta hai

// console.log(Math.trunc(14.4));
// console.log(Math.trunc(-45.2));




















// #####################################################################################################################################################################################







//  dom in javascript




// 1. window VS document
// 2. DOM VS BOM
// 3. DOM navigation
// 4. searching and getting element reference







// 1. window VS document





// 4. searching and getting element reference










// ##############################################################################################################





// Events in javascript








// #################################################################################################



// timing based event


// settimeout
// cleartimeout
// setInterval
// clearInterval










// ##########################################################################################


// oops in java script




// 1st way

// let biodata = {
//     myname: "ajayrathore",
//     myage: 23,
//     getData: function () {
//         console.log(`my name is ${biodata.myname} my age is ${biodata.myage}`);
//     }
// }

// biodata.getData();






// // 2st way

// let biodata = {
//     myname: "ajayrathore",
//     myage: 23,
//     getData () {
//         console.log(`my name is ${biodata.myname} my age is ${biodata.myage}`);
//     }
// }

// biodata.getData();





// 3rd way

// let biodata = {
//     myname: {
//         firstname: "Ajay",
//         lastname: "Rathore"
//     },
//     myage: 23,
//     getData () {
//         console.log(`my name is ${biodata.myname} my age is ${biodata.myage}`);
//     }
// }

// console.log(biodata.myage);





// this object

// console.log(this);




// ##################################################################################################################




// destructuring in ES6


// 1. array destructuring


// const mybiodata = ['ajay', 'rathore', 23];

// let [myfname, mylname, myage] = mybiodata;
// console.log(myage);





// const mybiodata = ['ajay', 'rathore', 23];

// let [myfname, mylname, myage,myclass="12"] = mybiodata;
// console.log(myclass);




// 2. object destructuring


// const mybiodata ={
//     myfname: 'ajay',
//     mylname: 'singh',
//     myage:23
// }

// let {myfnme, mylname, myage} = mybiodata;
// console.log(myage);









// spread operator


// const colors = ['red', 'green', 'blue'];


// const myfevcolors = [...colors, 'black', 'white'];

// console.log(myfevcolors);







// ##################################################################################################

// ECMAScript 2016/ES7




// Array.prototype.includes


// const colors = ['red', 'green', 'blue'];

// const isPer = colors.includes('red');

// console.log(isPer);






// ECMAScript 2018/ES9 




// const per = {name : 'ajay',age: 55,degree:'b.sc'};
// const sper ={...per};

// console.log(per);
// console.log(sper);


// #############################################################################################


// flat array


// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_5', ['zone_7', 'zone_8']]
// ];

// console.log(arr.flat(Infinity));







// use strict


// ye btata hai ki java script ka use kro



// "use strict";

// x = 3.14;
// console.log(x);












// ####################################################################################################################################################################################
     








// advanced java script












// Event propagation (event bubbling and event capturing )












// callback function




// calculator




// const add = (a, b) => {
//     return a + b;
// }

// const subs = (a, b) => {
//     return Math.abs(a - b);
// }

// const mult = (a, b) => {
//     return a * b;
// }
  

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }


// calculator(5, 2, subs);


// console.log(calculator(5, 7, subs));






// asynchronous javascript






// hoisting in javascript






// closures in javascript









// event loop in java script







// currying


// sum(5)(3)(8)


// function sum(num1) {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1+num2+num3);
//         }
//     }
// }



// const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);

// sum(5)(3)(9)










// callback hall







// json in javascript ###############################################################################################################################





// javascript object ko json me change krna ho to 

// var myobj = {key1:'ajay', key2:'rathore'};

// var object_as_string = JSON.stringify(myobj);

// console.log(object_as_string);





// ab agr json ko javascript object me change krna ho to 



// var object_as_string_as_object = JSON.parse(object_as_string);

// console.log(object_as_string_as_object);







// ########################################################################################################################################################################################################################################################################

// modules ES6 modern javascript 


// modules = javascript mai ek file me joke data save hota hai vo dusri file me use kr sakte hai  
// 1. jis file ka data hame chahiye usme export use krte hai 
// 2 . jis file me dusri file ke data use krne hai usme import use krte hai 




// promise #########################

// ES6 

            //        promise 
            //     /         /
            //    /         /
            // resolve()   reject()
            //    /            /
            //    /            /
            //    then()      catch()











// ###############################################################################################################################################################################################################


// 1. fetch api 
// 2. promises
// 3. async-await 
// 4. error handling in js 



// in sab ka project banaya hua hai 






































