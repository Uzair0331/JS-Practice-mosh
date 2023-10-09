//let name = 'zaibi';
//console.log(name)

//let firstName = 'Uzair';
//let SecondtName = 'Shaikh';
//console.log(firstName);
//console.log(SecondtName);

//let rate1 = 1;
//rate = 2 ;
//console.log(rate1);

//let Name = 'zaibi' //String
//let age = 25; //number
//let approved = true; //boolean
//console.log(Name +' '+ age +' '+ approved);

//let Name01 = 'Uzair';
//let age1 = 20;
//let approved1 = true;
//let firstName1 = undefined;
//let colors =null; //object

//let Person = {
//name :'zaibi'
//age : 25};

//console.log(Person);

//Person.name = 'shaikh'

//console.log(Person.name);

//let selectedcolors = ['orange', 'Blue'];
//selectedcolors[2] = 'red';
//console.log(selectedcolors.length) ;

//fUNCTION 1
//function greet(Name, lastname) {
//console.log("Hello" + " " + Name + " " + lastname);
//}
//greet("uzair", "shaikh");

//function preet(Name01, Name2) {
//console.log(Name01 + " " + Name2);
//}
//preet("Hows", "You");

//Function2TYPECALCALCULATED
//function gulpreet(number) {
//return number * number;
//}
//console.log(gulpreet(2));

//-------Arithmetic operators--------------

//let x = 10;
//let y = 5;

//console.log(x + y);
//console.log(x - y);
//console.log(x / y);
//console.log(x % y);
//console.log(x ** y);

//console.log(--x);
//console.log(++x);
//console.log(++x);
//console.log(++x);

//-----assigmnment operators------

//let x = 10;
//console.log((x = x + 5));
//console.log(x + 5);
//console.log((x *= 3));

//-------------Relational Operators-----------------

//let x = 2;
//console.log(x > 0);
//console.log(x > 4);
//console.log(x <= 2);
//console.log(x >= 2);

//-----------------Equality-------------------------

//let x = 1;
//console.log(x === 1);
//console.log(x !== 1);

// ------------Strict Equality (Type + Value)--------------------------
//console.log(1 === 1);
//console.log("1" === 1);

//--------------Lose Equality (dosn't matter not in use)--------------------------------
//console.log(1 == 1);
//console.log("1" == 1);
//console.log(true == 1);

//------------Ternary operator-----------------
//let points = 91;
//let Type = points > 90 ? "Gold" : "Silver";
//console.log(Type);

//-----------Logical Operator------------

//let Highscore = true;
//let goodcreditscore = true;
//let EligibleForLoan = Highscore && goodcreditscore;
//console.log(EligibleForLoan);

//let Highscore = true;
//let goodcreditscore = true;
//let eligibleForLoan = Highscore || goodcreditscore;
//console.log("Eligible", eligibleForLoan);

//--NOT (!)

//let applicationRefused = !eligibleForLoan;
//console.log("Application Refused", applicationRefused);

//-----Logical operators with non-booleans

//let Color = "Orange";
//let defaultColor = "black";
//let currentcolor = Color || defaultColor;
//console.log(currentcolor);

//-----Otherwise-------
//let Color = undefined;
//let defaultColor = "black";
//let currentcolor = Color || defaultColor;
//console.log(currentcolor);

//-------Bitwise Operators------

//Read , Write , Execute

// 00000100 ----- For Only read-----
// 00000110 ----- For read & Write----
// 00000111 ------ For all three permession---------

//Read , Write , Execute-----

// 00000100 ----- For Only read-----
// 00000010 ----- For only Write----
// 00000001 ------ For Execute----

//const readPermission = 4;
//const writePermission = 2;
//const executePermission = 1;

//let myPermission = 0;
//myPermission = myPermission | readPermission | writePermission;
//-------console.log(myPermission);
//let message = myPermission & readPermission ? "yes" : "no";
//console.log(message);

//------------Operator precedence----------

let x = 2 + 3 * 5;
console.log(x);

let y = (2 + 3) * 5;
console.log(y);
