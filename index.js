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

//let x = 2 + 3 * 5;
//console.log(x);

//let y = (2 + 3) * 5;
//console.log(y);

// const value = 5;

// value > 1 ? console.log("bigger") : console.log("smaller");

// value > 1 ? (value === 5 ? console.log("equal") : console.log("bigger")) : console.log("smaller");

// const value = 2;

// if (value === 1) {
//   console.log("value is equal to 1");
// } else if (value === 2) {
//   console.log("value is equal to 2");
// } else {
//   console.log("the value is greater than 2");
// }

//const a = 4;
//const b = 5;

//a and b mai se bara konsa hai?
//a aur b equal hai

//if (a < b) {
//  console.log("A smaller");
//} else if (a === b) {
 // console.log("a equal to b");
//} else {
//  console.log("a greater");
//}

//let a = 2;
//let b = 4;
//if(a<b){
//console.log('a small');
//}
//else if (a === b)
//console.log('same value')
//else{
  //console.log('A bigger');
//}
//---------Swapping variales--------
//let x = 'Joe';
//let y = 'Alan';

//let c=x;
//x=y;
//y=c;

//console.log(x);
//console.log(y);


//let a = 'pink';
//let b = 'blue';

//let c=a;
//a=b;
//b=c;
//console.log(a);
//console.log(b);



//---------if....else------time

//let hour = 6 ;
//if(hour >= 6 && hour < 12){
//console.log('Good Morning');
//}
//else if(hour >=12 && hour<18){
//console.log('Good Afternoon')
//}
//else
//{console.log('Good evening')}




//---------Practicse--------


//let grade =39;
//if   (grade >= 90 && grade < 100)
//console.log('grade A+1')

//else if(grade >=80 && grade < 90)
//console.log('grade A+')

//else if(grade >=70 && grade < 80)
//console.log('grade A')

//else if(grade >=60 && grade < 70)
//console.log('grade B')

//else if(grade >=50 && grade < 60)
//console.log('grade C')
    
//else if(grade >=33 && grade < 50)
//console.log('grade D')
     
//else
//console.log('Fail')



//--------------------Loop--------------------
//------------------for loop----------------

//for (let i = 1; i <=5; i++) {
  //console.log('hello',i);
  //}



//---------------odd Numbers-----------------

//for (let i = 1; i <=10; i++) {
  //if(i % 2 !==0)
  //console.log(i);
    //}  

//------------------Practices------------------
//for (let i = 1; i <=10 ; i++) {
  //console.log('hello',i);
//}



//---------------even numbers------------------
//for (let i = 1; i <=10 ; i++) {
  //if(i % 2 ===0)
  //console.log(i);
  //}



//------------odd Number---------------------
//for (let i = 1; i <=20 ; i++) {
//if(i % 2 !==0)
//console.log(i);
//}


//---------------------------------------------
//for (let i = 1; i <=10 ; i++) {
//console.log('hey',i);
//}




//-------11-10-23

//let time = 17;
//if(6 >=time && time<12){
//console.log('Good morning')
//}
//else if(12 >=time && time<=18){
 // console.log('Good afternoon')
//}
//else{
 // console.log('good night')
//}



//let grade = 90;

//if (grade >=90 && grade<100) {
//console.log('Grade A+1');  
//}
//else if (grade >=80 && grade <90) {
 //console.log('Grade A1'); 
//} 
//else if (grade >=70 && grade <80){
// console.log('Grade A');
//}
//else if (grade >=60 && grade <70){
//console.log('Grade B');
//}
//else if(grade >=50 && grade <60){
 // console.log('Grade c');
//}
//else if(grade >=35 && grade <50){
//console.log('Grade D');
//}
//else {
  //console.log('fail');
//}

//---------------------------------------


//let time =6;
//if(time >=6 && time<12){
  //console.log('Good Morning')
//}
//else if(time >=12 && time<18){
//console.log('Good Aftenoon')
//}
//else{
//console.log('Good Night')
//}



//-------------------- 

//let time2 =17 ;
//if(time2 >=6 && time2 <12){
//console.log('Good Morning'); 
//}
//else if (time2 >=12 && time2 <18){
 // console.log('Good Afternoon');
//}
//else{
 // console.log('Good Night')
//}


//---------------------


//let grade =92;
//if (grade >=90 && grade <100){
//console.log('Grade A+1');
//}
//else if (grade >=80 && grade <90){
//console.log('Grade A1');
//}
//else if (grade >=70 && grade <80){
//console.log('Grade A');
//}
//else if (grade >=60 && grade <70){
//console.log('Grade B');
//}
//else if (grade >=50 && grade <60){
//console.log('Grade c');  
//}
//else if (grade >=35 && grade <50){
//console.log('Grade d')
//}
//else{
//console.log('Grade f')  
//}

//let n =99;
//if (n >=100 && n >90){
//console.log('100 is greater');
//}
//else{
//  console.log('less then 100');
//}


//let a = 2;
//let b = 4;
//if(a<b){
//console.log('a small');
//}
//else if (a === b)
//console.log('same value')
//else{
//  console.log('A bigger');
//}

//-----------for loop prac-------------

//for (let i = 1; i <= 5; i++) {
  //console.log('hello world',i);
  
//}

//-------------------------------
//for (let i = 1; i <= 10; i++) {
  //if(i % 2 !==0)
  //console.log(i);}

//----------------------------
//for (let i = 1; i <=20; i++) {
  //if(i % 2 ==0)
  //console.log(i); 
//}
//--------------------------


//for (let i = 1; i <=10; i++) {
 //if(i % 2 ==0)
  //console.log(i);
  
//}

//for (let i = 0; i <=10; i++) {
  //if(i % 2 !==0)
  //console.log(i);
  
//}

//for (let i = 1; i <=5; i++) {
//  console.log('hello ',i);
  
//}


//for (let i =1 ; i <=10; i++){
  //if(i%2 ==0)
  //console.log(i);
 
//}


//for (let i = 1; i <= 10; i++) {
  //if(i %2 !==0)
  //console.log(i);
  //}





//----------while Loop---------------
//let i =1;
//while (i <= 5){
  //if (i % 2 !==0) console.log(i);
  //i++;
//}
//-------------practice--------------------
//let i = 1
//while (i<=10) {
//if(i%2 ==0) console.log(i);
//i++;
 // }
//--------------------------------
//let a = 1
//while (a<=5) {
//  console.log('hey',a);
 // a++;
//}  
//----------------------
//let c = 1
//while (c<=5) {
 // if (c %2 !==0) console.log(c);
 // c++; 
//}
//-----------------------
//let d = 1
//while (d <=10) {
// if(d%2 !==0)console.log(d);
 //d++;
  //}





//--------Do while loop-----------  
//let i = 0 ;
//do{
 // if(i%2 !==0)console.log(i);
 //i++;
//}while(i <= 5);

//--------------------------
//let a = 0;
//do{
 // if(a%2 ==0)console.log(a);
 //a++;
//}while(a <=10);

