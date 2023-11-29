//-----------------variable-------------

//let name = 'zaibi';
//console.log(name)

//let firstName = 'Uzair';
//let SecondtName = 'Shaikh';
//console.log(firstName);
//console.log(SecondtName);

//let rate1 = 1;
//rate = 2 ;
//console.log(rate1);

//--------------------Primitive type------------

//let Name = 'zaibi' //String
//let age = 25; //number
//let approved = true; //boolean
//console.log(Name +' '+ age +' '+ approved);

//let Name01 = 'Uzair';
//let age1 = 20;
//let approved1 = true;
//let firstName1 = undefined;
//let colors =null; //object
//---------------------------------

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

//--------------

//function next (Name, lastname){
//console.log('Hello'+" "+Name+" "+lastname)
//}
//next("uzair","shaikh")
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
// 00000001 ----- For Execute-------

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

//const value = 2;

//if (value === 1) {
//console.log("value is equal to 1");
//} else if (value === 2) {
// console.log("value is equal to 2");
//} else {
//  console.log("the value is greater than 2");
//}

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
// console.log('A bigger');
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

//let grade =50;
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

///---------12-10-23-----practice
//------Function------

//function oct (Name,Lastname){
//console.log('Hello'+" "+Name+" "+Lastname);
//}
//oct('De','Kock')

//function nav(hey,Howsyou){
//console.log('What a'+" "+hey+" "+Howsyou);
//}
//nav('great','century')

//-------Tenary operater----

//let points =91;
//let Type = points >90 ? "gold" : "silver";
//console.log(Type);

//let number=89;
//let Type=number >= 90 ? "gold" : "silver";
//console.log(Type);

//----------------if else prac----------
//let hour = 19 ;
//if(hour >= 6 && hour < 12){
//console.log('Good Morning');
//}
//else if(hour >=12 && hour<18){
//console.log('Good Afternoon')
//}
//else
//{console.log('Good evening')}

//-------only 18+ Elligble-----

//let age =20;
//if(age >=18){
//console.log('Elligble')
//}
//else{
//console.log('Not Elligble')
//}

//--------------Grade-----
//let grade = 35;
//if(grade >= 90 && grade <100){
// console.log('A+1');
//}
//if(grade >= 80 && grade <90){
//  console.log('A1');
//}
//if(grade >= 70 && grade <80){
//console.log('A');
//}
//if(grade >= 60 && grade <70){
// console.log('B');
//}
//if(grade >= 50 && grade <60){
// console.log('c');
//}
//if(grade >= 40 && grade <50){
// console.log('d');
//}
//if(grade >= 35 && grade <40){
// console.log('E');
//}

//else{
//  console.log('fail');
//}

//-------------less then greater----
//let n =99;
//if (n >=100 && n >90){
//console.log('100 is greater');
//}
//else{
//  console.log('less then 100');
//}

//-----------for loop prac-------------

//for (let i = 1; i <=10; i++) {
//  console.log('hello world',i);

//}

//for (let i = 1; i <= 10; i++) {
//  if(i %2 !==0)
// console.log(i);

//}

//for (let i = 1; i <=10; i++) {
// if(i % 2 ==0)
//console.log(i);

//}

//----------while Loop---------------
//let i = 1;
//while (i <= 5){
//if (i % 2 !==0) console.log(i);
//i++;
//}

//----------------------

//let i = 1
//while (i<=10) {
//if(i%2 ==0) console.log(i);
//i++;
//}
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

//--------------------------
//let a = 1;
//do{
//if(a%2 ==0)console.log(a);
//a++;
//}while(a <= 10);

//-----------------------

//let c = 1;
//do {
// if(c %2 !==0)console.log(c);
//c++;
//} while (c <= 10);

//-------------------------

//let d =1;
//do {
//if(d % 2 ==0)console.log(d);
//d++;
//} while (d <= 10);

//----------New work------
//-----------For-in---------

//let person ={
//name:'alex',
//age : 24,
//location:'Norway',
//};
//for(let key in person)
//console.log(key,person[key]);

//----------

//let colors =['Red','Green','orange'];
//for(let i in colors)
//console.log(i,colors[i]);

//---------

//let item = ['headphone','flage','color'];
//for(let a in item)
//console.log(a,item[a]);

//----------------------
//let person ={
//name:'Hawaiii',
//age : 20,
//location:'USA',
//};
//for(let key in person)
//console.log(key,person[key]);

//--------------for of------

//let item = ['mobile','lights','lucifer'];
//for ( let a of item ) {
//console.log(a);
//}

//------------Break & continue-------------
//----------while loop-----------

//let a = 1;
//while (a <= 10) {
// if(a === 6)break;          //------------------Break
// if(a %2 ==0){
// a++;
//continue;                  //------------------continue
// }
//console.log(a);
//a++;
//}

//-------------------------13-10-23

//--------Function------

//function oct (Name,lastname){
//console.log('hello'+" "+Name+" "+'V.S'+" "+lastname)
//}
//oct('newzeland','Bangladesh')

//function toss(teamName,selected){
//console.log(teamName+" "+'won'+" "+'The'+" "+'Toss'+" "+'&'+" "+'Elected'+" "+selected)
//}
//toss('Newzeland','Bowl')

//function wc (team1,team2){
//  console.log('Tomorow 14-10-23'+" "+team1+" "+'V.S'+" "+team2)
//}
//wc('Pakistan','India')

//function wc (team1,team2,team3,team4){
//console.log(team1+" "+'Will Face'+" "+team2+" "+'then'+" "+team3+" "+'and'+" "+team4)
//}
//wc('Pakistan','India','Australia','Afgan')

//function summary(win,Lose){
//console.log('if Pakistan'+" "+win+" "+'all then semifinal otherwise'+" "+Lose+" "+'& Ghar')
//}
//summary('won','Lose')

//-------Tenary operater----

//let num1 =4.1;
//let Type= num1 > 4.00  ? "First Team" : "Second Team";
//console.log(Type);

//let point = 80;
//let Type = point >= 90 ? "Gold Member" : "Silver Member";
//console.log(Type);

//------------if Else--------------

//let hours =23;
//if (hours >=6 && hours <12) {
//console.log('Good morning')
//}
//else if (hours >=12 && hours <18){
//console.log('Good Afternoon');
//}
//else{
//console.log('Good Night');
//}

//function result(person,){
//console.log('sorry'+" "+person+" "+'Your result is');
//}
//result('Alex');

//let grade =33;
//if (grade >=90 && grade <100) {
//console.log('A+1');
//}
//else if (grade >=80 && grade <90){
//console.log('A1');
//}
//else if (grade >=70 && grade <80){
//console.log('A');
//}
//else if (grade >=60 && grade <70){
//console.log('B');
//}
//else if (grade >=50 && grade <60){
//console.log('C');
//}
//else if (grade >=40 && grade <50){
//console.log('D');
//}
//else {console.log('Fail');}

//--------------------less then greater then--------------
//let n =99;
//if (n >=100 && n >35){
//console.log('100 is greater');
//}
//else{
//console.log('less then 100');
//}

//let a = 7;
//let b=6;
//if (a > b) {
//console.log('a greater then b');
//}
//else if(a === b){
//console.log('a is equal to b')
//}
//else{
//console.log('b is greater');
//}

//-----------for loop prac-------------

//for (let i = 1; i <=5; i++) {
//console.log('hello world',i);

//}

//for (let i = 1; i <= 5; i++) {
//if(i %2 !==0)

//console.log(i);

//}

//for (let i = 1; i <=5; i++) {
// if(i % 2 ==0)
//console.log(i);

//}

//for (let i = 1; i <= 5; i++) {
//console.log('hello paajeet',i);

//}

//for (let i = 1; i < 10; i++) {
// if(i %2 ==0)
// console.log(i);

//}

//for (let i = 1; i < 10; i++){
// if(i % 2 !==0)
//console.log(i);
//}

//----------while Loop---------------
//let i = 1;
//while (i <= 5){
//if (i % 2 !==0) console.log(i);
//i++;
//}
//-----
//let m =1;
//while (m <=5) {
//if(m %2 ==0) console.log(m);
//m++;
//}

//--------
//let n =1;
//while (n <=5) {
//console.log('ishowspeed',n);
//n++;
//}

//--------Do while loop-----------

//--------------------------
//let a = 1;
//do{
//if(a%2 ==0)console.log(a);
//a++;
//}while(a <= 10);

//-----------
//let b =1;
//do {
//console.log('heyyooo',b)
//b++;
//} while (b <= 5);

//--------------------
//let c = 1;
//do {
//if(c %2 !==0)console.log(c);
//c++;
//} while (c <=10);

//-----------For-in---------

//let person ={
//name:'alex',
//age : 24,
//location:'Norway',
//};
//for(let key in person)
//console.log(key,person[key]);

//let p ={
//name:'Lod',
//age:20,
//location:'moon',
//};
//for (let key in p)

//console.log(key,p[key]);

// let person1 = {
// name:'jiona',
// age:25,
// designation:'1st Dev full stack',
// };

// for (const a in person1) {
//  console.log(a,person1[a]);
// }

// let person2= {
// name:'liona',
// age:20,
// designation:'2nd dev',
// };
// for (let x in person2) {
//   console.log(x,person2[x]);
// }

// let person3={
//   name:'diana',
//   age:17,
//   designation:'Freshey',
// };
// for (const a in person3) {
// console.log(a,person3[a]);
// }

// let item = ['mobile','headphones','charger'];
// for ( let a of item ) {
// console.log(a);
// }

//----------

//let colors =['Red','Green','orange'];
//for(let i in colors)
//console.log(i,colors[i]);

//---------

//let item = ['headphone','flage','color'];
//for(let a in item)
//console.log(a,item[a]);

//----------------------

//--------------for of------

//let item = ['mobile','lights','lucifer'];
//for ( let a of item ) {
//console.log(a);
//}

//------------

//let app = ['whatssapp','insta','fb'];
//for(let c of app){
//console.log(c);
//}

//---------

//let watch = ['rolex','hublot','gucci'];
//for (let d of watch) {
//console.log(d);
//}

//------------Break & continue-------------

//for (let i= 1; i < 10; i++) {
//if(i ==6)break;
//console.log(i);
//}

//for (let i = 1; i < 10; i++){
//if(i ==4)break;
//console.log(i);
//}

//---------whileloop---

// let a = 1;
// while (a <= 10) {
// if(a === 6)break;

// console.log(a);
// a++;
// }

//---------------------14-10-23
//--------Function------

//function wc23(team1,team2){
//console.log('Rivalary day its'+" "+team1+" "+'V.S'+" "+team2)
//}
//wc23('pakistan','India');

//function wcmatch (team1,team2){
//console.log('lets see'+" "+team1+" "+'will Win or'+" "+team2)
//}
//wcmatch('pakistan','india')

//-------Tenary operater----

//let runrate =4.1;
//let Type= runrate > 4.00  ? "First Team" : "Second Team";
//console.log(Type);

//------------if Else--------------

//let hours =23;
//if (hours >=6 && hours <12) {
//console.log('Good morning')
//}
//else if (hours >=12 && hours <18){
//console.log('Good Afternoon');
//}
//else{
//console.log('Good Night');
//}

// let grade =90;
// if (grade >=90 && grade <100) {
// console.log('A+1');
// }
// else if (grade >=80 && grade <90){
// console.log('A1');
// }
// else if (grade >=70 && grade <80){
// console.log('A');
// }
// else if (grade >=60 && grade <70){
// console.log('B');
// }
// else if (grade >=50 && grade <60){
// console.log('C');
// }
// else if (grade >=40 && grade <50){
// console.log('D');
// }
// else {console.log('Fail');}

//--------------------less then greater then--------------
// let n =99;
// if (n >=100 && n >35){
// onsole.log('100 is greater');
// }
// else{
// console.log('less then 100');
// }

// let a = 7;
// let b=6;
// if (a > b) {
// console.log('a greater then b');
// }
// else if(a === b){
// console.log('a is equal to b')
// }
// else{
// console.log('b is greater');
// }

//----------------15-10-23

//-----------for loop prac-------------

//for (let i = 1; i <= 5; i++) {
// console.log("hello world", i);
//}

//for (let i = 1; i <= 5; i++) {
// if (i % 2 !== 0) console.log(i);
//}

//for (let i = 1; i <= 5; i++) {
//if (i % 2 == 0) console.log(i);
//}

//for (let i = 1; i <= 5; i++) {
// console.log("hello paajeet", i);
//}

//for (let i = 1; i < 10; i++) {
//  if (i % 2 == 0) console.log(i);
//}

//for (let i = 1; i < 10; i++) {
//  if (i % 2 !== 0) console.log(i);
//}

//----------while Loop---------------
// let i = 1;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }
//-----
// let m = 1;
// while (m <= 5) {
//   if (m % 2 == 0) console.log(m);
//   m++;
// }

//--------
//let n = 1;
//while (n <= 5) {
//console.log("ishowspeed", n);
//n++;
//}

//--------16-10-23----------------
//function wc23(team1, team2) {
//console.log("world cup match" + " " + team1 + " " + "v.s" + " " + team2);
//}
//wc23("Sl", "Aus");

//---------------

//-------Tenary operater----

// let num = 9;
// let Type = num >= 10 ? "number-1-team" : "number-2-Team ";
// console.log(Type);

//----------------------
// let num = 101;
// let Type = num >= 100 ? "K.O" : "fail";
// console.log(Type);

//---------------------------

// /----------------
//let num = 50;
//let Type = num >= 30 ? "pass" : "Fail";
//console.log(Type);

//--------------------------
// const a = 4;
// const b = 5;
// if (a < b) {
//   console.log("A smaller");
// } else if (a === b) {
//   console.log("a equal to b");
// } else {
//   console.log("a greater");
// }
//----------------------------
// let x = 10;
// let y = 20;
// if (x > y) {
//   console.log("X num is Geater");
// } else if (x === y) {
//   console.log("X num is equal to Y");
// } else {
//   console.log("X num is smaller");
// }

//----------------------------
// let num1 = 30;
// let num2 = 20;
// if (num1 < num2) {
//   console.log("num2 is greater then num1");
// } else if (num1 === num2) {
//   console.log("Num1 is equal to num2");
// } else {
//   console.log("Num 1 is Greater then num2");
// }

//-----------if else---------------
// let time = 19;
// if ((time >= 6) & (time < 12)) {
//   console.log("Good morning");
// } else if ((time >= 13) & (time < 15)) {
//   console.log("good afternoon");
// } else if ((time >= 16) & (time < 18)) {
//   console.log("good evening");
// } else {
//   console.log("Good night");
// }
// //--------------------
// function person(name) {
//   console.log(name);
// }
// person("ali");

//--------------------
// let grade = 33;
// if (grade >= 90 && grade < 100) {
//   console.log("A+1");
// } else if (grade >= 80 && grade < 90) {
//   console.log("A1");
// } else if (grade >= 70 && grade < 80) {
//   console.log("A");
// } else if (grade >= 60 && grade < 70) {
//   console.log("B");
// } else if (grade >= 50 && grade < 60) {
//   console.log("C");
// } else if (grade >= 40 && grade < 50) {
//   console.log("D");
// } else {
//   console.log("Fail");
// }

//---------------------------

// let num = 89;
// if (num >= 90 && num <= 100) {
//   console.log(" your grade is A+1 ");
// } else if (num >= 80 && num < 90) {
//   console.log("your grade is A1 ");
// } else if (num >= 70 && num < 80) {
//   console.log("your grade is A ");
// } else if (num >= 60 && num < 70) {
//   console.log("your grade is B ");
// } else if (num >= 50 && num < 60) {
//   console.log("your grade is C ");
// } else if (num >= 35 && num < 50) {
//   console.log("your grade is D ");
// } else {
//   console.log("Fail");
// }
//-----------for loop prac-------------

// for (let i = 1; i <= 5; i++) {
//   console.log("hello world", i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

//----------while Loop---------------
// let i = 1;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }
// //--------------

// let a = 1;
// while (a <= 10) {
//   if (a % 2 == 0) console.log(a);
//   a++;
// }

//--------------------
// let i = 1;
// while (i <= 10) {
//   if (i % 2 == 0) console.log(i);
//   i++;
// }
//--------Do while loop-----------

//--------------------------
//let a = 1;
//do{
//if(a%2 ==0)console.log(a);
//a++;
//}while(a <= 10);

///----------NEW ---------

// let n = max(4, 5);
// console.log(n);

// function max(x, y) {
//   return x > y ? x : y;
// }

//-----------

// let id = max(7, 7);
// console.log(id);

// function max(a, b) {
//   if (a > b) {
//     console.log("a is geater");
//     return a;
//   } else if (a == b) {
//     console.log("a is equal to b");
//     return (a = b);
//   } else {
//     console.log("b is greater");
//     return b;
//   }
// }

//-------------
// console.log(islandscape(600, 300));
// function islandscape(width, height) {
//   return width > height;
// }
//-----------------
// let n = islandscape(700, 500);
// console.log(n);

// function islandscape(width, height) {
//   if (width > height) {
//     console.log("photo is landscape and the width is");
//     return width;
//   } else if (width < height) {
//     console.log("photo is not landscape & height is");
//     return height;
//   } else {
//     console.log("width and height is same");
//     return (width = height);
//   }
// }

//------------------------------
// const output = Name(15);
// console.log(output);

// function Name(input) {
//   if (typeof input !== "number") return "Not a number";

//   if (input % 3 === 0 && input % 5 === 0) return "Alexkuma";

//   if (input % 3 === 0) return "Alex";

//   if (input % 5 === 0) return "Kuma";
// }

//--------------



//----------17-10-23-------------

// function wc23(team1,team2){
// console.log('match btw'+" "+team1+" "+'V.S'+" "+team2);
// }
// wc23('SA','NA');
//---------------
// let num = 9;
// let Type = num >= 10 ? "number-1-team" : "number-2-Team ";
// console.log(Type);
//------------
// let num = 9;
// let whowin =num >=10 ? "win" : "loose";
// console.log(whowin);
// //------------------
// let num1 =5;
// let num2 =6;
// if (num1 > num2) {
// console.log('Num1 is greater then Num2')    
// }
// else if (num1 === num2){
// console.log('Num1 is equal to Num2')
// }
// else{
// console.log('Num2 is greater then Num1')    
// }
//------------
// let time=12;
// if (time >=6 & time <12) {
// console.log('Good morning')    
// }
// else if(time >=12 & time <15 ){
// console.log('Good afternoon')
// }
// else if(time >=15 & time <18){
// console.log('Good evening')
// }
// else{
// console.log('Good night')    
// }

//-------------------------
// let Grade =34;
// if (Grade >= 90 && Grade <100) {
//  console.log('A+1');   
// }
// else if(Grade >=80 && Grade <90){
// console.log('A1');
// }
// else if(Grade >=70 && Grade < 80){
// console.log('A');
// }
// else if(Grade >=60 && Grade <70){
// console.log('B')
// }
// else if(Grade >=50 && Grade <60){
// console.log('C')
// }
// else if(Grade >= 40 && Grade <50){
// console.log('D')
// }
// else if(Grade >=35 && Grade <40){
// console.log('E')    
// }
// else{
// console.log('Fail')    
// }

//------------4loop------------------
// for (let i = 1; i <= 5; i++) {
//     console.log('hello world',i);

// }
//---------------------------
// for (let a = 1; a <10; a++) {
//     if(a % 2 ==0)
//     console.log(a);
// }
//-----------------------------
// for (let c = 1; c <10; c++) {
//     if(c % 2 !==0)
//     console.log(c);
// }

//---------while loop------------
// let x =1
// while (x <= 5) {   
// console.log('hello',x)
// x++;    
// }
//---------------------
// let Y =1
// while (Y <=10) {
// if(Y % 2 ==0)
// console.log(Y)
// Y++;    
// }
//---------------
// let z =1
// while (z <=10) {
// if(z % 2 !==0) 
// console.log(z)
// z++;   
// }

//-----------------do while-----------
// let num = 1
// do {
// console.log('Hello',num)    
// num++;    
// } while (num <=5);

//----------------------
// let x = 1
// do {
// if(x %2 ==0)
// console.log(x)
// x++;    
// } while (x <=10);
//------------------------
// let y =1
// do {
// if(y%2 ==!0)
// console.log(y)
// y++;    
// } while (y <= 10);


//-----------For-in---------

// let person={
// name : 'ALi',
// Address : 'USA',
// idNumer : 4581,    
// }
// for(let a in person){
// console.log(a,person[a]);    
// }

//---------------
// let person2 ={
// name : 'jawad',
// Address :'pak',
// idNumer : 8904,    
// }
// for(let c in person2){
// console.log(c,person2[c])    
// }


//--------------for of------

//let item = ['mobile','lights','lucifer'];
//for ( let a of item ) {
//console.log(a);
//}
//--------------------------------------

// let item = ['Watch','Moile','Headphones'];
// for(let a of item){
// console.log(a);
// }

//-----------------max Num--------------

// let n = max(7,6);
// console.log(n);

// function max(x,y){
// return(x > y ? x :y);
// }

//-----------
// let id = max ('a','a');
// console.log(id);

// function max (x,y){
// if (x>y) {
// console.log('X is greater then y');
// return(x);
// }
// else if (x === y){
// console.log('Both are same Num');
// return(x=y);    
// }
// else{
// console.log('y is greater then x');
// return(y);
// }
// }

//--------------------------
// let num = max(6,5);
// console.log(num);

// function max (x,y){
//    if (x > y){
//    console.log('x is greater then y') 
//    return(x );}
//    else if (x === y){
//     console.log('Both are same');
//    return(x=y); 
//    }
//    else{
//     console.log('y is greater then x');
//     return(y);

//    }
// }

//-----------------------------------------

// let num = landscapeOrPotrait(1000,900);
// console.log(num);

// function landscapeOrPotrait(width,height){

//     if(width > height){
//         console.log('this photo is Landscape')
//     return(width);
//         }

//     else if(width === height){
//      console.log('width & Height same')   
//      return(width);
//     }
//     else{
//         console.log('this photo is potrait')
//      return(height);   
//     }
// }

//----------------------------
// let output = AliAhmed(30);
// console.log(output);

// function AliAhmed(input){
// if(typeof input !== "number") return('not a number');
// if(input % 3 ==0 && input % 5==0) return('Ali Ahmed');
// if(input % 3 ==0)return('Ali');
// if(input % 5==0)return('Ahmed');

// }

//--------------------------
// let login = name1(4);
// console.log(login);

// function name1(name){
// if(typeof name !== 'number')return('not a number');
// if(name % 2 ==0 && name % 5==0)return('AlexJhon');
// if(name %2 ==0)return('Alex');
// if(name % 5==0)return('Jhon');
// }


//------------------SpeedLimits---------

// checkSpeed(75);

// function checkSpeed(speed){
// const speedLimit =70;
// const kmPerPoint =5;

// if(speed < speedLimit + kmPerPoint){
// console.log('speed is ok');
// return;
// } 
// const points = Math.floor((speed - speedLimit) / kmPerPoint)
// if(points >= 12)
// console.log('license Suspended because of speed limit');
// else{
// console.log('you cross speed limit. Point is',points+" "+'if you corss 12 point your license will be susupended');
// }
// }

//--------------------------------------------------------


//---------------------------------

// num(10);

// function num(evenodd){
// for (let i = 1; i <=10; i++){
// if(i % 2 ==0)
// console.log(i,'Even');
// else{
// console.log(i,'odd');
// } 
// }
// }

//--------------------------------

// const value =[1,2,3];
// console.log(countTruthy(value));

// function countTruthy(value){
// let count =0;
// for(let array of value)
// if(array)
// count++;
// return count;
// }

//----------------------------------
//------------Practice
//-------------------
// let num = max(5,4);
// console.log(num);

// function max(a,b){
// if(a > b){
//  console.log('a is Greater then b & the Value of a is')
//  return a;   
// }
// else if(a === b){
// console.log('a is equal to b & both value is')
// return a;
// }
// else{
// console.log('b is greater then a & the Value of b is')
// return b;
// }
// }

//-----------------------
// let photo = size (900,800);
// console.log(photo);

// function size(w,h){
// if(w > h){
// console.log('This photo is landscape,& width is');
// return w;
// }
// if(w === h){
// console.log('width and height is same & the value is'); 
// return w;   
// }
// else{
// console.log('this photo is potrait & the height is') ;  
// return h; 
// }    
// }

// //----------------------------------


// let output = person(15);
// console.log(output);

// function person(input) {
// if(typeof input !== 'number')return'not a number';

// if(input % 3 ==0 && input % 5 ==0)return'Ali Ahmed';

// if(input % 3==0)return'Ali';

// if(input % 5==0)return'Ahmed';
// }

// //------------------SpeedLimits---------

// checkSpeed(70);

// function checkSpeed(speed){
// const speedLimit =70;
// const kmPerPoint =5;

// if(speed < speedLimit + kmPerPoint){
// console.log('Vehicle speed is ok');
// return;
// } 
// const points = Math.floor((speed - speedLimit) / kmPerPoint)
// if(points >= 12)
// console.log('license Suspended because of your Vehicle speed limit');
// else{
// console.log('you cross Vehicle speed limit. Point is',points+" "+'if you corss 12 point your Vehicle license will be susupended');
// }
// }

// //--------------------------
// num(1);

// function num(evenodd){
// for (let i = 1; i <=5; i++) {
// if(i % 2 ==0)
// console.log(i,'Even');
// else{
// console.log(i,'odd');
//     } 
// }
// }
//----------------------------------------------


//----------------18-10-23--------------------
// function wc23 (team1,team2){
//   console.log('Date 18-10-23 match b/w'+" "+team1+" "+'V.S'+" "+team2);  

// }
// wc23('nz','afg');

//---------------------------------
// let num=5;
// let Type = num >=5 ? "NZ" : "Afg" ;
// console .log(Type,num);

//----------------------------------------------
// let nz =5;
// let afg =4;
// if (nz > afg) {
// console.log('nz win the match')    
// }
// else if(nz === afg){
// console.log('Match Drawn');
// }
// else{
// console.log('afg win the match');   
// }
//-----------------------------------------------

// let time = 12;
// if (time >=6 & time < 12) {
// console.log('Good morning')    
// }
// else if(time >=12 & time <16){
// console.log('Good Afternoon')
// }
// else if(time >=16 & time <18){
// console.log('good evening')    
// }
// else{
// console.log('good night')    
// }
//----------------------------------

// let pointTale = 3;
// if(pointTale === 1){
// console.log('No.1 Team is India on point Table');
// }
// else if(pointTale === 2){
// console.log('No.2 Team is South Africa on point Table ');
// }
// else if(pointTale === 3){
// console.log('No.3 Team is Newzeland  on point Table');
// }
// else{
// console.log('No.4 Team is Pakistan on point Table')    
// }

//-------------------------------
// let number=50;
// if(number >=90 && number <100){
// console.log('Grade A+1');    
// }
// else if (number >=80 && number <90){
// console.log('Grade A1');
// }
// else if (number >=70 && number <80){
// console.log('Grade A');
// }
// else if (number >=60 && number <70){
// console.log('Grade B');
// }
// else if (number >=50 && number <60){
// console.log('Grade C');
// }
// else if (number >=40 && number <50){
// console.log('Grade D');
// }
// else if (number >=35 && number <40){
// console.log('Grade D');
// }
// else{
// console.log('Fail');    
// }
//----------------------------------
// for (let i = 1; i <= 5; i++) {
// console.log('Hello',i);
// }
//---------------------------------
// for (let i= 1; i <=5; i++) {
// if(i % 2 == 0)
// console.log('Even number',i);
// }
//--------------------------------
// for (let i = 1; i <=5; i++) {
// if(i % 2 !==0)
// console.log('odd Number',i);
// }
//-------------------------
// let a =1;
// while (a <=5) {
// console.log('hello',a)
// a++;    
// }
//------------------------
// let x =1;
// while (x <=5) {
// if(x %2 ==0)
// console.log('even number',x)    
// x++;
// }
//--------------------
// let Y =1;
// while (Y <= 5) {
// if(Y % 2 ==!0)  
// console.log('odd number',Y)
// Y++;
// }
//----------------------
// let a =1;
// do {
// console.log('Hello',a)
// a++;    
// } while (a <=5);
//-------------------
// let x =1;
// do {
// if(x %2 ==0)    
// console.log('Even num',x)    
// x++;    
// } while (x <= 5);
//------------------
// let y =1;
// do {
// if(y %2 !==0)    
// console.log('odd num',y)
// y++;    
// } while (y <=5);


//-----------------max Num--------------
// let id =max(5,6);
// console.log(id)

// function max(x,y){

// if(x > y){
// console.log('the num of x is max then y')
// return(x);
// }

// if(x === y){
// console.log('the num of x and y is same')
// return(x);    
// }

// else{
// console.log('the num of y is max then x')
// return(y);    
// }
// }

// //-------------------------------------------

// let num = Photo(600,400)
// console.log(num);
// function Photo(width,height){

// if(width > height){
// console.log('Width is max then height,photo is landscape')
// return(width);
// }

// else if(width === height){
// console.log('width and height are same of this photo')
// return(width);
// }

// else{
// console.log('Height is max then width,photo is potrait')
// return(height);   
// }
// }

//------------------------------------
// let output = Name(15);
// console.log(output)

// function Name(input){
// if(typeof input !== "number")
// return('Not a Number');

// if((input % 3 === 0) && (input % 5 === 0))
// return('Log in & Pass');

// if(input % 3 === 0)
// return('log in');

// if(input % 5 === 0)
// return('Pass');

// return input;
// }

//------------------------------------
// speedmeter(74);

// function speedmeter(speed){
// const speedLimit = 70;
// const kmPerPoint =5;

// if(speed < speedLimit + kmPerPoint){
// console.log('Speed is ok of car');
// return;
// }

// const points = Math.floor((speed-speedLimit)/kmPerPoint)
// if(points >= 12)
// console.log('License suspended');

// else{
// console.log('points is ',points+" "+'your speed is',speed+" "+'if you cross 12 point your license will be suspended');    
// }
// }

//-----------------------------------------------------------

// const Movie = {
// Title : 'xyz',
// releaseYear : 2015,
// rating : 7,
// director :'Sunil Shetty'    
// };
// properties(Movie);

// function properties(obj){

// for (let key in obj)

// {if(typeof obj [key] === "string")

// console.log(key,obj[key]);    
// }
// }
//---------------------------------------



//-----------19-10-23--------------------
// function wc23(team1,team2){
// console.log('19-10-23 match B/W '+team1+" "+'V.S'+" "+team2);
// }
// wc23('Ind','Ban');

// //------------------------------------------
// let pointTale=40;
// let team = pointTale >=50 ? "India" : "Ban" ;
// console.log(pointTale,team);
// //--------------------------------
// function wc(teamA,teamB){
// console.log('20-10-23 Match B/W '+" "+teamA+" "+'And'+" "+teamB);
// }
// wc('pak','aus')
// //--------------------------------
// let num =50;
// let team1 = num >= 50 ? "pak" : "ind"; 
// console.log(team1,num);

//-------------------------------
// let afg = 6;
// let aus = 8;
// if (afg > aus) {
// console.log('afg won the match')    
// }
// else if (afg === aus){
// console.log('Match drawn')    
// }
// else{
//  console.log('aus won the match');   
// }

//-------------------------------

// let time = 6;
// if (time >= 6 && time <12){
// console.log('Good morning');    
// }
// else if(time >= 12 && time <16){
// console.log('Good Afternoon');
// }
// else if(time >=16 && time <19){
// console.log('Good Evening');
// }
// else{
// console.log('Good night');    
// }

// //-----------------------------------
// let num =30;
// if(num >=90 && num <=100){
// console.log('Grade A+1');
// }
// else if(num >=80 && num <90){
// console.log('Grade A1');
// }
// else if(num >=70 && num <80){
// console.log('Grade A');
// }
// else if(num >=60 && num <70){
// console.log('Grade B');
// }
// else if(num >=50 && num <60){
// console.log('Grade C');
// }
// else if(num >=40 && num <50){
// console.log('Grade D');
// }
// else if(num >=35 && num <40){
// console.log('Grade E');
// }
// else{
// console.log('Fail')    
// }    
//-----------------------------
// for (let i = 1; i <= 5; i++) {
//     console.log('hello',i);
// }
// //-------------------------------
// for (let a = 1; a <=10 ; a++) {
//     if(a%2 ===0)
//     console.log('Even num',a);
// }
// //---------------------------
// for (let x = 1; x <= 10; x++) {
//     if(x%2 !==0)
//     console.log('odd num',x);
// }

//---------------------------
// let a = 1;
// while (a <=5) {
// console.log('hello',a);
// a++;    
// }

// //-----------------------
// let x =1;
// while (x <= 10) {
// if(x %2 === 0)    
// console.log('even num',x);
// x++;    
// }

// //----------------------
// let y =1;
// while (y <= 10) {
// if(y % 2 !==0)
// console.log('odd num',y);
// y++;    
// }
//-----------------------------

// let a =1;
// do {
// console.log('hello',a);
// a++;    
// } while (a <= 10);

//----------------------
// let x = 1;
// do {
// if(x %2 ===0)
// console.log('even',x);
// x++;    
// } while (x <=10);

//-------------------
// meraFunc(1);
// function meraFunc (x){

//     for (let x = 1; x < 10; x++) 
//     console.log('hello',x);
// }
//-------------------------
// even(1);
// function even(x){
// for (let x = 1; x <=10; x++) 
//     if(x %2 ===0)
//     console.log('even num',x);
// }
//-----------------------
//  odd(1);
// function odd(y) {
// for (let y = 1; y <=10; y++)
//     if(y %2 !==0)
//     console.log('odd',y);
// }
//-----------------------------
// let id = max (6,6);
// console.log(id);

// function max(x,y) {
// if (x > y) {
// console.log('x is won');
// return(x);    
// }
// if (x === y) {
// console.log('Match Drawn')
// return(x);    
// }
// else{
// console.log('y is won')
// return(y);    
// }
// }

//--------------------------------
// let num = a(10,10);
// console.log(num);

// function a(ind,pak) {
// if (pak > ind) {
// console.log('Pak won');
// return(pak);    
// }    

// if (pak === ind) {
// console.log('Match drawn')
// return(pak);    
// }

// else{
// console.log('ind Won');
// return(ind);    
// }
// }
//-------------
// let num = size(800,600);
// console.log(num);

// function size(width,height) {

// if (width > height) {
// console.log('Width is max,photo is landscape');
// return(width);    
// }

// if (width === height) {
// console.log('Width & height is same of photo');
// return(width);    
// } 

// else{
// console.log('height is max,photo is potrait');
// return(height);    
// }
// }

//--------------------------------------
// evenodd(10);
// function evenodd(limit) {
// for (let i = 1; i <=limit; i++) {
//     const show=(i % 2 ===0) ? "even" :"odd";
//     console.log(i,show);
// }    
// }

//------------------------
// const person ={
// Name : "Alex",
// Location: "USA",
// DateOfBith : 2-5-1995,    
// }
// Show(person);
// function Show(obj) {
// for (let key in obj) 
//     if(typeof obj[key] === "string")
//     console.log(key,obj[key]);

//     }

// const person ={
// name : "jay",
// location : "italy",
// dateOfith : 5-9-1985,
// telePhone :+91035416581    
// }
// show(person);

// function show(obj) {
// for (let key in obj)
// if(typeof obj[key] === "string") 
// console.log(key,obj[key]);    
// }    


// const user ={
// name :"jhiona",
// location :"Japan",
// dateOfith: 18-5-1985,
// phone : +8102168413,    
// }
// show(user);

// function show(obj) {
// for (let key in obj) 
// if(typeof obj[key] === "number")
// console.log(key,obj[key]);    
// }


// let id =max(500,400)
// console.log(id);

// function max(width,height) {
// if (width > height) {
// console.log('width is max,photo is landscape');    
// return(width)
// }    
// if (width ===height) {
// console.log('width and height is same');    
// return(height)
// } 
// else {
// console.log('Height is max,photo is potrait');    
// return(height)
// }
// }


// evenodd(10);
// function evenodd(limit) {
// for (let a = 1; a <= limit; a++) {
// const show=(a % 2 ===0)? "Even" : "odd";
// console.log(a,show);
// }
// }


// const person={
// name : "Alex",
// location :"london",
// dateOfith :6-5-1984,
// telePhone :+924165841,    
// }
// show(person)
// function show(obj) {
// for (let key in obj)
// if(typeof obj[key] === "string")
// console.log(key,obj[key]) 
// }


// let id = max (500,300)
// console.log(id);

// function max(width,height) {
// if (width > height) {
// console.log('width is max then height')
// return(width)    
// }  
// if (width === height) {
// console.log('width is equal to height') 
// return(width)   
// }  
// else{
// console.log('height is max then width')
// return(height)
// }
// }
//--------------------------------------------
// evenodd(10);
// function evenodd(limit) {
// for (let a = 1; a <limit; a++) {
//     const show=(a %2 ===0) ? "even" : "odd";
//     console.log(a,show);

// }
// }
//--------------------------------------
// odd(10);
// function odd(limit) {
//  for (let o = 1; o <= limit; o++) {

//     if(o % 2 !==0)
//     console.log(o,'hi');
// }   
// }
//--------------------------------------
// const person={
// name : "Jack",
// location :"East Asia",
// telephone : +94321564734,
// dateOfBith :15-8-1975,    
// }
// show(person)
// function show(obj) {
// for (let key in obj)
// if(typeof obj[key] === "number")
// console.log(key,obj[key]);
// }
//------------------------------------

// let id =max(200,500)
// console.log(id)

// function max(height,width) {
// if (height > width) {
// console.log("height is max then width")    
// return(height)
// }   
// if (height === width) {
// console.log("width is equal to height")    
// return(width)
// } 
// else {
// console.log("width is max then Height")
// return(width)    
// } 
// }

//----------------------------------------
// show(3);

// function show(rows) {

// for (let row = 1; row <= rows;row++){
// let pattern = '';

// for(let i = 0 ; i <  row; i++)
// pattern += '*';

// console.log(pattern);

// }
// }

//-------------
// let age =17;
// if (age >= 18) {
// console.log('age is ok');    
// }
// else{
// console.log('age is not ok');
// }
//------------------------
// let id =max(5,6)
// console.log(id)

// function max(x,y) {
// if (x > y) {
// console.log('x is max then y')
// return(x)    
// }    
// else if(x === y){
// console.log('x is equal to y')    
// return(x)
// }
// else{
// console.log('y is max then x')    
// return(y)
// }
// }

//-----------------------
// function one (person1,person2){
// console.log('hi'+" "+person1+" "+'&'+" "+person2);
// }
// one('alex','jhon')

// //----------------------
// let id =max(500,400)
// console.log(id);

// function max(width,height) {
// if(width > height){
// console.log('width is max then height');
// return(width)
// }    

// if (width === height) {
// console.log('width and height are same')    
// return(width)
// } 
// else {
// console.log('Height is max then width')    
// return(height)
// }
// }
// ///---------------------------
// let num =max(20)
// console.log(num)

// function max(age) {
// if (age >=18){
// console.log('age is elligle')
// return(age)}
// else
// console.log('age is not elligle')
// return(age)

// }
///------------------

// let person={
//     name : "Jack",
//     location :"East Asia",
//     telephone : +94321564734,
//     dateOfBith :15-8-1975,    
//     }
//     console.log(person);


//-----------20-10-23--------------------
// //-----------------
// let info={
// name:'alon',
// location:'USA',
// phone:+1546545165,    
// }
// console.log(info)

//------------------
// let num =max(6,5)

// function max(x,y) {
// if(x > y){
// console.log('x is great then y')
// return(x)
// }    
// if (x === y) {
// console.log("x and y is equal")    
// return(x)
// } 
// else {
// console.log("y is great then x")
// return(y)    
// }
// }

//-------------------------

// let num =max(20)
// function max(age) {
// if (age >=18) {
//  console.log('age is elligle')   
// return(age)
// } else {
// console.log('age is not elligle')
// return(age)    
// }    
// }

//--------------------------------

// let info={
// name :''    
// }
//--------------------------------
// let num = max (4,4)
// console.log(num)

// function max(x,y) {
// return (x > y) ? x : y ;     
// }
//----------------------



// let time =18;
// if (time >=6 & time <12) {
// console.log('good morning',time)    
// }
// else if(time >=12 & time <16){
// console.log('good afternoon',time)
// }
// else if(time >= 16 & time <18){
// console.log('good evening',time)
// }
// else{
// console.log('good night',time)    
// }




//------------------------------
// let info={
// name : 'musk',
// location:'USA',
// Phone : 9084984120,
// dateOfBirth:9-5-23,    
// }
// console.log(info);




// //---------------------------
// let num = max (4,4)
// console.log(num)

// function max(x,y) {
// return (x > y) ? x : y ;     
// }



// //--------------------------
// let pic = max(300,200)

// function max(width,height) {

// if(width > height){
// console.log('width is max then height');
// return(width)}

// else if(width === height){
// console.log('width and height are same')
// return(width)
// }

// else{
// console.log('height is max then width')    
// return(height)
// }
// }
// //-------------------------
// let info={
// name : 'watson',
// location:'AUS',
// dateOfBirth: 2-5-1985,
// }
// console.log(info)

// //---------------------
// let num =max(2,4)
// console.log(num);

// function max(x,y) {
// return(x > y) ? x : y;     
// }


//-----------------------
// for (let i = 1; i < 10; i++) {
//     console.log('hello',i);
// }
// //------------------------
// for (let x= 0; x <=10; x++) {
//    if(x %2 === 0)
//     console.log(x);
// }

//--------------------------------

// evenodd(10);
// function evenodd(limit) {
// for (let i = 1; i <=limit; i++) {
// const show=(i % 2 ===0) ? "even" : "odd"; 
// console.log(show,i)
// }
// }

// //--------------------------
// let info={
// name:'jhon',
// location :'nz',
// telephone: +9221245612,
// dob: 15-9-1985,    
// }
// console.log(info.location)

// //-----------------------------------
// let num = max (5,4)
// console.log(num)
// function max(x,y) {
// return(x > y) ? x :y ;    
// }


//---------------------------------
//-------------------------------------
// let num = max (300,300)
// function max(width,height) {

// if (width > height) {
// console.log(width+" "+"width is great then"+" "+'y'+" "+height);    
// }

// else if (width === height){
// console.log(width+" "+'width is = to'+" "+'height'+" "+height); 
// }

// else{
// console.log(height+" "+'height is great then'+" "+'width'+" "+width)    
// }
// }
// //-----------------------
// let n =max(2,4)
// console.log(n)
// function max(x,y) {
// return(x > y) ? x : y    
// }
// //------------------------

// function oct(name1,Name2){
// console.log('hello'+" "+name1+" "+'and'+" "+Name2);    
// }
// oct('jhon','alex')

// //------------------
// let info={
// name : 'luccy',
// location: 'USA',
// telephone : 56487641464,
// dob : 21-8-1985,     
// }
// console.log(info);

//--------------------------------

// let n =max(4,5)
// console.log(n)

// function max(x,y) {
// return(x > y) ? x : y    
// }

// //--------------------------

// let pic = maximum(300,300)
// function maximum(width,height) {

// if (width > height) {
// console.log(width+" "+'width is high'+" "+'height is'+" "+height)    
// }

// else if(width === height){
// console.log('width is'+" "+width+" "+'And height is'+" "+height+" "+'both are same')
// }

// else{
// console.log(height+" "+'height is high'+" "+'width is'+" "+width)   
// }
// }


// //------------------------------
// hello(1);
// function hello(x) {
// for (let x = 1; x <=10; x++) {
//     console.log(x,'hello');    
// }    
// }
// //-------------------------------
// even(1);
// function even(a) {
// for (let a = 1; a <=10; a++) {
//     if(a%2 ===0)
//     console.log(a,'even');    
// }    
// }
// //------------------------------

// odd(1);
// function odd(y) {
// for (let y = 1; y <= 10; y++) {
//     if(y %2 !==0)
//     console.log(y,'odd num');    
// }    
// }


// let n =max(4,5)
// console.log(n)

// function max(x,y) {
// return(x > y) ? x : y    
// }


//---------------23-10-23-----------


// let info={
//     name : 'musk',
//     location:'USA',
//     Phone : 9084984120,
//     dateOfBirth:9-5-23,    
//     }
//     console.log(info);

// //--------------------------

// let pic = maximum(300,300)
// function maximum(width,height) {

// if (width > height) {
// console.log(width+" "+'width is high'+" "+'height is'+" "+height)    
// }

// else if(width === height){
// console.log('width is'+" "+width+" "+'And height is'+" "+height+" "+'both are same')
// }

//-------------------
// let info={
// name : 'lona',
// phone : 41541564651,
// location : 'south',
// dob: 15-8-1990 
// }
// console.log(info)
//---------------------------
// function cup(team1,team2) {
// console.log(team1+" "+'VS'+" "+team2)    
// }
// cup('pak','afg')
//----------------------
// let n =max(6,5)
// console.log(n)

// function max(x,y) {
// return(x > y) ? x : y    
// }
//-----------------------
// let pic = max(600,500)
// function max(width,height) {
// if (width > height) {
// console.log('width is high',width)    
// }    
// else if (width === height){
// console.log('width & height same',width)
// }
// else{
// console.log('height is hight',height)
// }
// }
//-------------------------------

// let output = Name(5)
// console.log(output)

// function Name(input) {
// if(typeof input !== "number")return "not a num";
// if(input % 3 ===0 & input % 5 ===0) return "AlexAlon";
// if(input % 3 ===0)return "Alex";
// if(input % 5 ===0)return "alon";    
// }
//-----------------------------------------------
// hello(0);
// function hello(a) {
// for (let a = 1; a <=5; a++) {
// console.log(a,'hello');
// }    
// }
//--------------------------------
// even(0);
// function even(x) {
// for (let x = 1; x <= 10; x++) {
// if(x % 2 ===0)
// console.log(x,'even');
// }    
// }
//-------------------------------
// odd(0);
// function odd(y) {
// for (let y = 1; y <=10; y++) {
//     if(y % 2 !==0)
//     console.log('odd',y);
// }    
// }
//-------------------------
// evenodd(10)
// function evenodd(limit) {
// for (let i = 1; i <= limit; i++) {
// const show=(i %2 ===0)? "even" : "odd";    
//     console.log(i,show);
// }    
// }
//----------------------------
// hello (1);
// function hello(a) {
//  while (a <= 5) {
//  console.log('hi',a)
//  a++;   
//  }   
// }
//---------------------------
// even(1);
// function even(x) {
// while (x <= 5) {
// if(x % 2 ===0)
// console.log(x,'even');
// x++;    
// }    
// }
//-----------------------
// odd(1)
// function odd(y) {
// while (y <= 5) {
// if(y %2 !==0)
// console.log(y,'odd')
// y++;    
// }    
// }
//-------------------------
// evenodd(1);
// function evenodd(a) {
// while (a <= 10) {
// const show=(a % 2 ===0) ? "even" : "odd";
// console.log(a,show)
// a++;
// }    
// }

//---------------------------------
// let movie ={
// title:'luccy',
// releaseDate: 15-5-2005,
// director:'alice',
// rating:8,    
// }
// properties(movie)
// function properties(obj) {
// for(let key in obj)
// //if(typeof obj [key] === "number")
// console.log(key,obj[key])  
// }

//-------------------------
// let person={
// Name:'kimy',
// phone:9871354541,
// dob:5-9-2001,
// location:'USA',    
// }
// detail(person)
// function detail(obj) {
// for(let key in obj)
// // if(typeof obj [key] === "number")
// console.log(key,obj[key])    
// }

//-------------------------------------
// let n =max(4,4)
// function max(x,y) {
// if (x > y) {
// console.log('x is high',x)    
// }    
// else if (x === y){
// console.log('x is equal to y',y)
// }
// else{
// console.log('y is high',y)    
// }
// }
// //-----------------------------------
// let id =max(2,4)
// console.log(id)

// function max(x,y) {
// return(x > y)? x : y ;   
// }

//-------------------------------------
// let pic=max(300,600)
// function max(width,height) {
// if (width > height) {
// console.log('width is high',width)    
// }
// else if(width === height){
// console.log('width is equal to high',width)    
// }    
// else{
// console.log('height is high',height)    
// }
// }

//-------------------------------------------------------


// let output=Name(5)
// console.log(output)

// function Name(input){
// if(typeof input !== "number")return('not a Number')
// if(input % 3 ===0 && input % 5 ===0)return('alihamza')
// if(input %3 ===0)return('ali')
// if(input % 5 ===0)return('hamza')    
// }

//----------------------------------

// hello(1)
// function hello(x){
// for (let x = 1; x <= 5; x++){
// console.log('hello',x);
// }    
// }

//-----------------------------------

// even(1)
// function even(a){
// for (let a = 1; a <= 10; a++){
// if(a %2 ===0)    
// console.log('even',a);
// }    
// }

//----------------------------

// evenodd(10)
// function evenodd(limit) {
// for (let i = 1; i <= limit; i++) {
// let show =(i % 2 ===0)? "even" : "odd"    
//     console.log(i,show);
// }    
// }

//----------------------------

// hi(1)
// function hi(t) {
// while (t <= 5) {
// console.log('hello',t)
// t++;    
// }    
// }

//---------------------

// even(1)
// function even(s) {
// while (s <= 5) {
// if(s %2 ===0)
// console.log(s,'even')
// s++;
// }    
// }

//---------------------

// odd(1)
// function odd(x) {
// while (x <= 10) {
// if(x % 2 !==0)
// console.log('odd',x)
// x++;    
// }    
// }

//---------------
// evenodd(1)
// function evenodd(y) {
// while (y <=10) {
// const show =(y %2 ===0)? "even" : "odd"
// console.log(show,y)
// y++;    
// }    
// }

//----------------------
// let Person ={
// Name:'= kimo',
// location:'= kenya',
// telephone:922315465,
// dob:19-5-2023    
// }
// detail(Person)
// function detail(obj){
// for(let key in obj)
// if(typeof obj[key] === "string")
// console.log(key,obj[key])    
// }

//--------------------


//-------------24-10-23-------------------
// let info={
// name:'lame',
// location:'asia',
// telephone:9287451564,
// dob: 20-8-1995 ,   
// }
// console.log(info)

//--------------------------
// function wc23(team1,team2) {
// console.log(team1+" "+'VS'+" "+team2)    
// }
// wc23('ban','Sa')

//---------------------------
// let id = max(4,3)
// console.log(id)

// function max(x,y) {
// return(x > y)? x : y    
// }
//--------------------------
// let pic = high(300,300)
// console.log(pic)
// function high(width,height) {
// if (width > height) {
// console.log('width is high then height')  
// return(width)  
// }    
// else if(width === height){
// console.log('width and height are same')
// return(height)
// }
// else{
// console.log('height is high then width')    
// return(height)
// }
// }
//-----------------------------------
// let watch =Time(6);
// console.log(watch)

// function Time(hours){
// if (hours >=6 & hours <12){
// console.log('Good morning')
// return(hours)    
// }
// else if(hours >=12 & hours <16){
// console.log('Good afternoon')
// return(hours)
// }
// else if(hours >=16 & hours <18){
// console.log('Good evening')
// return(hours)
// }  
// else{
// console.log('Good night')
// return(hours)
// }
// }

//----------------------------------------
// let Result=grade(80)
// console.log(Result)

// function grade(number) {
// if (number >= 90 && number <101) {
// console.log('Grade A+1')
// return(number)    
// }
// else if(number >=80 && number <90){
// console.log('Grade A1')
// return(number)    
// }
// else if(number >=70 && number <80){
// console.log('Grade A')
// return(number)    
// }
// else if(number >=60 && number <70){
// console.log('Grade B')
// return(number)    
// }
// else if(number >=50 && number <60){
// console.log('Grade C')
// return(number)    
// }
// else if(number >=40 && number <50){
// console.log('Grade D')
// return(number)    
// }
// else{
// console.log('Fail')    
// return(number)
// }  
// }
//--------------------------------
// let agefactor =num(18)
// console.log(agefactor)

// function num(age) {
// if (age >= 18) {
// console.log('Elligle age,your age is')
// return(age)    
// }    
// else{
// console.log('not elligble,age should be 18 or 18+,your age is')    
// return(age)
// }
// }

//---------------------

// let id =goldsilver(80)
// console.log(id)

// function goldsilver(points){
// return(points >= 90)? 'gold' : 'silver'   
// }

//---------------------------
// let output=Name(15)
// console.log(output)

// function Name(input) {

//     if(typeof input !== "number")return('NAN');

//     if(input % 3 ===0 && input % 5 ===0)return('AppTycon');

//     if(input % 3 ===0)return('App');

//     if(input % 5 ===0)return('Tycon');
// }
//------------------------------
// hello(1)
// function hello(a) {
// do {
// console.log('Alex Bhatti',a)    
// a++;    
// } while (a <= 5);    
// } 
//---------------------------------
// even(1)
// function even(x) {
// do {
// if(x %2 ==0)
// console.log(x,'even')    
// x++;    
// } while (x <=5);    
// }
//-------------------
// evenodd(1)
// function evenodd(y) {
// do {
// let show=(y %2 ===0)? 'even' : 'odd';
// console.log(y,show)    
// y++;    
// } while (y <= 10);    
// }
//--------------------------------


// show(5)
// function show(rows) {
// for (let row = 1; row <= rows; row++) {
// let p ='';
// for (let i = 0; i < row; i++)    
// p += '*';
// console.log(p)    
// }    
// }

//------------------------------------
// let person={
// Name : 'alon',
// location : 'Asia',
// telephone : 926484561,
// dob: 20-9-1990    
// }
// detail(person)
// function detail(obj) {
// for(let key in obj)
// if(typeof obj[key] === "string")
// console.log(key,obj[key])    
// }

//-------------------------------------------

//-----------------Objects-------------------

//-----Object-orianted Programing (OOP)------

// const circle ={
//  radius : 1,
//  location:{
//    x:1 ,
//    y:1
//  },
//  isVisible : true,
//  draw : function () {
//    console.log('draw'); 
//  }   
// };
// circle.draw(); //method



//---------factory Function--------------------


// function createCircle(radius) {
//   return{
//   radius,
//   draw(){
//   console.log('draw')  
//   }
//   };  
// }
// const Circle = createCircle(1);
// console.log(Circle);

// const Circle2 =createCircle(2);
// console.log(Circle2);


//-----------Constructor Function----------------

// function Circle(radius) {
//  this.radius = radius ;
//  this.draw =function () {
//   console.log('draw');  
//  }    
// }
// const circle = new Circle(1);

//---------Dynamic nature of Object--------------
// const circle ={
//   radius :1
// };

// circle.id=12;
// circle.color ='yellow';
// circle.draw = function () {}

// delete circle.draw;

// console.log(circle)


//----------------------------------------------
//-------------25-10-23---------------------

// let info ={
// Name:'loma',
// phone:93416489,
// location:'USA',
// Dob:16-9-1990,  
// }
// console.log(info)

//--------------------------------
// function wc(team1,team2) {
// console.log('match B/W'+" "+team1+" "+'&'+" "+team2)  
// }
// wc('Na','Aus')
//---------------------------------
// let num = max(5,4)
// console.log(num)

// function max(x,y) {
// return(x > y)? x : y ;  
// }
//------------------------------------
// let pic = high(600,700)
// console.log(pic)

// function high(width,height) {
// if (width > height) {
// console.log('width is high')
// return(width)  
// }  
// else if(width === height){
// console.log('width and height is same')
// return(width)
// }
// else{
// console.log('height is high')
// return(height)  
// }
// }
// //---------------------------------------
// time(16)
// function time(hour) {
// if (hour >=6 & hour < 12) {
// console.log('Good morning',hour)

// }  
// else if(hour >=12 & hour < 16){
// console.log('Good afternoon',hour)

// }
// else if(hour >=16 & hour < 19){
// console.log('Good evening',hour)
// return(time)
// }
// else{
// console.log('good night',hour)  
// }
// }
// //------------------------------
// let n=elligble(18)
// console.log(n)

// function elligble(age) {
// if (age >=18) {
// console.log('elligble age,your age is')
// return(age)  
// }  
// else{
// console.log('not elligble age,your age is')
// return(age)  
// }
// }
//---------------------------------
// hello(0)
// function hello(i) {
// for (let i = 1; i <= 5; i++) {
//   console.log('hey',i);
// }  
// }
// //---------------------------------
// even(1)
// function even(a) {
// while (a <= 5) {
// if(a % 2 ===0)
// console.log('even',a)
// a++;  
// }  
// }
//--------------------------------
// odd(1)
// function odd(x) {
// do {
// if(x % 2 !==0)
// console.log('odd',x)
// x++;  
// } while (x <= 5);  
// }
//--------------------------------
// evenodd(1)
// function evenodd(y) {
// do {
// let show =(y % 2 ===0)? 'even':'odd'
// console.log(y,show)
// y++;  
// } while (y <= 10);  
// }
//-------------------------------
// let person={
// Name :'puneet',
// location:'ind',
// phone:9123481483,
// dob : 19-6-1985,
// }
// detail(person)
// function detail(obj) {
// for(let key in obj)
// if(typeof obj[key] ==="string")
// console.log(key,obj[key])  
// }

//-----------------------------------
// show(5)
// function show(rows) {
// for (let row = 1; row <= rows; row++) {
// let p ='';
// for (let q = 0; q < row; q++)
// p += '*';
// console.log(p)
// }  
// }

// //-----------------------------------
// let output = Name(15)
// console.log(output)
// function Name(input) {
// if(typeof input !== "number")return('NAN');

// if(input % 3 ===0 && input % 5 ===0)return('CallStack');

// if(input % 3 ===0)return('Call');

// if(input % 5 ===0)return('Stack');
// }

// //-----------OOP-----------------
// const circle ={
//  radius : 1,
//  location:{
//    x:1 ,
//    y:1
//  },
//  isVisible : true,
//  draw : function () {
//    console.log('draw'); 
//  }   
// };
// circle.draw();

///------------factory function-----------
// function createCircle(radius,location) {
//   return{
//    radius : 2,
//    location: 6,
//    draw(){
//     console.log('draw')
//   } 
//   }
// }
// const circle1=createCircle(1);
// console.log(circle1);

// const circle2=createCircle(2);
// console.log(circle2);

//-----------------------------
// function createCircle(radius,location) {
//   return{
//   radius:2,
//   location:3,
//   draw(){
//   console.log('draw')  
//   }  
//   }
// }
// const circle1 = createCircle(1);
// console.log(circle1)

// //------------------------------------
// function triangle(height,width) {
// return{
// height:5,
// width:7,
// draw(){
// console.log('triangle')  
// }  
// }  
// }
// const mytriangle1 = triangle(1);
// console.log(mytriangle1);
// //----------------------------------------
// function square(height,width) {
// return{
// height: 5,
// width:6,
// draw(){
// console.log('square')  
// }  
// }  
// }
// const square1 = square(1);
// console.log(square1);

//------------constructor function-------

// function Circle(radius) {
//  this.radius = radius;
//  this.draw= function () {
//   console.log('circle')
//  } 
// }

// const circle1 = new Circle(1);


//---------Dynamic nature of Object--------------

// const circle ={
//   radius :1
// };

// circle.id=12;
// circle.color ='yellow';
// circle.draw = function () {}

// delete circle.id;

// console.log(circle)
//----------------------------------------
// const square={
// width:5,
// height:2,  
// }

// square.name='square';
// square.id=1;
// square.draw=function () {}

// delete square.id;

// console.log(square)

//--------------------------------------
// function person(id,name,location,phone) {
// return{
// id : 1,
// name:'alex',
// location:'USA',
// phone:91546871,
// profile(){
// console.log('profile')  

// }
// }  
// }

// const profile1 = person(1);
// console.log(profile1)

//------------------------------
// const person={
// id:1, 
// }

// person.Name='jhon';
// person.location='USA';
// person.phone=9852646881;


// console.log(person)

//------------------------
// function square(data) {
// return{
// height: 5,
// width:6,
// draw(){
// console.log(data)  
// }  
// }  
// }
// const square1 = square(1);
// console.log(square1)

//--------------------------
// let obj = {value : 10};

// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj)
//-------------------------


// let x ={num :10};

// function increase(x) {

//  x.num++;
// }
// increase(x);
// console.log(x)

//--------------------------
// const person ={
// Name:'kim',
// id : 1 ,
// location :'USA',  
// // show(){
// //  console.log('show') 
// // }
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// if('Name' in person)console.log('yes')



//--------------------------------



// const person={
// Name : 'collin',
// id : 1,
// location : 'USA',

// }

// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// if('id' in person)console.log('Approved')


//-------------------Object cloning-------------------------

// const person={
// Name : 'laka',
// id : 5 ,
// location : 'USA', 
// show(){
// console.log('show')  
// }
// }
// const person2 = {...person}
// console.log(person2)

//-----------------------------------------------


// function createCircle(radius,location) {
//   return{
//    radius : 2,
//    location: 6,
//    draw(){
//     console.log('draw')
//   } 
//   }
// }
// const circle1=createCircle(1);
// console.log(circle1);

// const circle2=createCircle(2);
// console.log(circle2);

//-----------------------------------------------------


// function person(detail) {
//  return{
//  Name: 'zuin',
//  id: 1,
//  location:'China'
// } 
// }
// const person1 = person(1)
// console.log(person1)



//--------------------------------------------------------

// function profile(p) {
//   return{
//   Name : 'salman',
//   location:'NY',
//   telephone: 9248941246,  
//   }
// }

// const person1= profile(1)
// console.log(person1)


//-----------------------------------------------------

// function Circle(radius) {
//  this.radius = radius;
//  this.draw= function () {
//   console.log('circle')
//  } 
// }

// const circle1 = new Circle(1);

//--------------------------------------------------

// const person={
// Name:'alex',
// location:'USA',  
// }
// function ID(detail) {
// this.detail=detail;  
// }
// const Person1 = new ID(1);

//---------Dynamic nature of Object--------------

// const circle ={
//   radius :1
// };

// circle.id=12;
// circle.color ='yellow';
// circle.draw = function () {}

// delete circle.id;

// console.log(circle)

//----------------------------

// const detail={};

// detail.Name='alex';
// detail.id=1;
// detail.location='USA';

// // delete detail.Name

// console.log(detail)


//---------------------------------


// const person={
// Name : 'collin',
// id : 1,
// location : 'USA',

// }

// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// if('id' in person)console.log('Approved')


//----------------------------


// const person={
// Name:'lona',
// location:'USA',
// id : 958,
// telephone: 94564984,
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let value of Object.values(person))
// console.log(value)

// for(let entry of Object.entries (person))
// console.log(entry)


// if('id','Name' in person)console.log('Approved')



//---------------------------------------------------------------

// let obj = {value : 10};

// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj)


//------------------------------------------

// const person={
// Name : 'laka',
// id : 5 ,
// location : 'USA', 
// show(){
// console.log('show')  
// }
// }
// const person2 = {...person}
// console.log(person2)

//--------------------------------

// const person={
// Name : 'gotilo',
// id : 1,
// location:'USA',
// phone:92844841,  
// }
// // for(let key in person)
// // console.log(key,person[key])

// // for(let value of Object.values(person))
// // console.log(value)

// for(let entry of Object.entries(person))
// console.log(entry)

// const person1 ={...person}
// console.log(person)


// if('id' in person)console.log('Approved')


//---------------26-10-23------------------
// let info={
// Name :'jhon',
// location : 'USA',
// phone : 9286416518,    
// }
// console.log(info)

// //------------------------------------------
// function wc23(team1,team2) {
// console.log('Match B/W'+" "+team1+" "+'&'+" "+team2)    
// }
// wc23('eng','sri')

// //-----------------------------------------
// let num = max(4,3)
// console.log(num)

// function max(x,y) {
// return(x > y)? x : y    
// }
// //---------------------------------------
// let photo = high(600,700)
// console.log(photo)
// function high(width,height) {
// if (width > height) {
// console.log('width is high')
// return(width)    
// }    
// else if(width === height){
// console.log('width and height are same')
// return(width)
// }
// else{
// console.log('height is high')
// return(height)    
// }
// }
// //---------------------------------------
// let watch=time(19)
// console.log(watch)

// function time(hour) {
// if (hour >=6 & hour <12) {
// console.log('good morning')
// return(hour)    
// }    
// else if(hour >=12 & hour <16){
// console.log('good afternoon')
// return(hour)
// }
// else if(hour >=16 & hour <19){
// console.log('good evening')
// return(hour)
// }
// else{
//  console.log('good night')   
//  return(hour)
// }
// }

// //---------------------------
// let person=elligble(18)
// console.log(person)

// function elligble(age) {
// if (age >=18) {
// console.log('elligble age,your age is')    
// return(age)
// }    
// else{
// console.log('under age,your age is')
// return(age)    
// }
// }
// //-----------------------------
// let member = approve(89)
// console.log(member)

// function approve(person) {
//  return(person >=90)? 'Gold':'Silver'   
// }

// //-------------------------------
// hello(1)

// function hello(i) {
// for (let i = 1; i <= 5; i++) {
//     console.log('hello',i);

// }    
// }

// //-------------------------------
// even(1)

// function even(a) {
// while (a <=10) {
// if(a % 2 ===0)
// console.log('even',a)
// a++;    
// }    
// }

// //--------------------------------
// odd(1)
// function odd(x) {
// do {
// if(x % 2 !==0)
// console.log('odd',x)
// x++;    
// } while (x <=10);    
// }

// //------------------------------
// evenodd(1)
// function evenodd(y) {
// do {
// let show=(y % 2 ===0)? 'even' :'odd'
// console.log(show,y)
// y++;    
// } while (y <=10);    
// }

//---------------------------------
// let info={
// Name:'nikki',
// location:'west',
// id:12,
// phone:531981658,    
// }
// detail(info)
// function detail(obj) {
// for(let key in obj)
// if(typeof obj[key] ==="number")
// console.log(key,obj[key])    
// }

// //------------------------------------
// show(5)
// function show(rows) {
// for (let row = 1; row <= rows; row++){
// let p ='';
// for (let i = 0; i < row; i++) 
// p +='*';
// console.log(p)     
// }
// }

// //------------------------------------
// let output = Name(15)
// console.log(output)

// function Name(input) {
// if(typeof input !== "number")return('NAN')

// if(input % 3 ===0 & input % 5 ===0)return('AppTycon')

// if(input % 3 ===0)return('App')

// if(input % 5 ===0)return('Tycon')
// }


//--------------------------------

// function detail(person) {
// return{
// Name : 'yuzi',
// location:'ind',
// phone:9123546425,
// id:15,    
// }    
// }
// const detail1 = detail(1)
// console.log(detail1)

// //---------------------------------------

// function circle(measure) {
// return{
// radius : 2,
// location:'left'    
// }    
// }
// const circle1=circle(1)
// console.log(circle1)

//------------constructor function-------

// function Circle(radius) {
// this.radius = radius;
// this.draw= function () {
// console.log('circle')
// } 
// }

// const circle1 = new Circle(1);


// //---------------------------------------------
// function person(detail) {
//  this.Name = 'alon';
//  this.id= 12;
//  this.location='east'   
// }
// const person1= new person(1)


//--------------------------------------------

// const person={
// id :1,    
// }
// person.name='kuma';
// person.location='italy';

// delete person.Name

// console.log(person)

//--------------------------------------------

// const person={
// id : 1,
// name : 'leena',
// location:'tokyo',
// phone:65894561,    
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys (person))
// console.log(key)

// for(let entry of Object.entries (person ))
// console.log(entry)

// const person1 = {...person}
// console.log(person1)





//---------------------------------


// const Name ='lamo'

// const message =
// `hi ${Name},

// thanks for joining.

// regard,
// alex.`;

// console.log(message)

//----------------

// let detail={
// Street :23,
// zipCode:2500,
// City:'USA',    
// }

// function address(detail) {
// for(let key in detail)
// console.log(key,detail[key])    
// }
// address(detail)

//----------------------------------


// let address = createAddress(16,'maldive',265);
// console.log(address)
// function createAddress(street,City,zipCode) {
// return{
// street,
// City,
// zipCode,    
// } ;   
// }

//------------------------------------


// function address(detail) {
// this.street = 15 ;
// this.City='italy';
// this.zipCode=9854;   
// }
// const address1 = new address(1);
// console.log(address1)

//-------------------------------------


// let address1 = new address('a','b','c');
// let address2 = new address('a','b','c');

// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));

// function address(street,city,zipCode) {
//    this.street= 10;
//    this.city='libnan';
//    this.zipCode=952; 
// }
// const data = new address(1)
// console.log(data);

// function areEqual(address1,address2) {
//  return(
//  address1.street === address2.street &&
//  address1.city === address2.city &&
//  address1.zipCode === address2.zipCode 
//  )
// }

// function areSame(address1,address2) {
// return(address1 === address2)    
// }

//---------------------------------------------



// let address1 =new Address('a','b','c')
// let address2 =new Address('a','b','c')
// console.log(areEqual(address1,address2))

// function Address(name,location,postalCode) {
//     this.name='alex';
//     this.location='USA';
//     this.postalCode=9508;
// }
// const data = new Address(1)
// console.log(data)

// function areEqual(address1,address2) {
//  return(
//  address1.name ===address2.name &&
//  address1.location === address2.location &&
//  address1.postalCode === address2.postalCode   
//  )   
// }

//----------------------------------

// let post={
// Title:'public post',
// like:10,
// profileName:'jhon',
// Comments:[
// {user148:'nice',admin:'thanks'},
// {user146:'wow',admin:'thanks'},    
// ],  
// Status:'online',  
// }
// console.log(post)


//---------------27-10-23--------------
//------------------------------------
// let info={
// name:'saud',
// id: 59,
// location:'Pak',    
// }
// console.log(info)

// //---------------------------------------
// function wc23(team1,team2) {
// console.log('match B/W'+" "+team1+" "+'&'+" "+team2)    
// }
// wc23('pak','Sa')

// //-----------------------------------
// let id=max(2,4)
// console.log(id)

// function max(x,y) {
// return(x > y)? x : y     
// }

// //-------------------------------------
// let pic = max(600,700)
// console.log(pic)

// function max(width,height) {
// if (width > height) {
// console.log('width is high');return(width)    
// }
// else if(width === height){
// console.log('width height same');return(width)    
// }    
// else{
// console.log('height is high');return(height)
// }
// }

// //---------------------------------------

// let watch=time(6);
// console.log(watch)
// function time(hour) {
// if (hour >=6 & hour <12) {
// console.log('good morning');return(hour)     
// } 
// else if(hour >=12 & hour <16){
// console.log('Good afternoon');return(hour)    
// }
// else if(hour >=16 & hour <19){
// console.log('Good evening');return(hour) 
// }
// else{
// console.log('Good night');return(hour)    
// }
// }

// //-------------------------------------

// let person=elligble(19)
// console.log(person)

// function elligble(age){
// if (age >=18) {
// console.log('age is ok,your age is');return(age)    
// }
// else{
// console.log('under age, your age is');return(age)  
// }    
// }

// //------------------------------------------
// hello(1)
// function hello(i) {
// for (let i = 1; i <=5; i++) {
//     console.log('hey',i);

// }    
// }
// //--------------------------------------------
// even(1)
// function even(a) {
// while (a <=10) {
// if(a % 2 ===0)    
// console.log('even',a)
// a++;    
// }    
// }

// //---------------------------------------------
// odd(1)
// function odd(x) {
// do {
// if (x %2 !==0) 
// console.log('odd',x) 
// x++;   

// } while (x <= 10);    
// }

//----------------------------
// let info={
// Name:'nikki',
// location:'west',
// id:12,
// phone:531981658,    
// }
// detail(info)
// function detail(obj) {
// for(let key in obj)
// if(typeof obj[key] ==="number")
// console.log(key,obj[key])    
// }

// //------------------------------------
// show(5)
// function show(rows) {
// for (let row = 1; row <= rows; row++){
// let p ='';
// for (let i = 0; i < row; i++) 
// p +='*';
// console    
// }
// }

//-------------------------
// const output = Name(15);
// console.log(output);

// function Name(input) {
// if(typeof input !== "number")return('NAN');

// if(input %3 ===0 && input %5 ===0)return('Apptycon');
// if(input %3 ===0)return('App');
// if(input %5 ===0)return('tycon');
// }

//---------------------------------------
// //---------------------------------------

// function circle(measure) {
// return{
// radius : 2,
// location:'left'    
// }    
// }
// const circle1=circle(1)
// console.log(circle1)

//------------constructor function-------

// function Circle(radius) {
// this.radius = radius;
// this.draw= function () {
// console.log('circle')
// } 
// }

// const circle1 = new Circle(1);

//-------------------------------------------
// const person={
// id : 1,
// name : 'leena',
// location:'tokyo',
// phone:65894561,    
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys (person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// const person1 ={...person}
// console.log(person1)

// if('name' in person)console.log('approve')


//-------------------------------------------

// let blog={
// title:'Blog',
// like:10,
// profileName:'Jhonny',
// comments:[
// {user148:'Nice',admin:'Thanks'},
// {user146:'Wow',admin:'Thanks'},    
// ],  
// status:'Online'  
// }
// console.log(blog)


//-----------------------------------------------


// let address1 =new Address('alex','USA',954)
// let address2 =new Address('jhon','Italy',852)

// console.log(areEqual(address1,address2))

// console.log(address1)

// console.log(address2)

// function Address(name,location,postalCode) {
// this.name=name;
// this.location=location;
// this.postalCode=postalCode;
// }

// function areEqual(address1,address2) {
// return(
// address1.name === address2.name &&
// address1.location === address2.location &&
// address1.postalCode === address2.postalCode   
// )   
// }
// //--------------------------------------
// let blog = new Blog('Fitness','Jhonny')
// console.log(blog)

// function Blog(title,author) {
// this.title=title;
// this.author=author;
// this.like=0; 
// this.comments=[];
// this.status=false;    
// }
// //------------------------------------
// let price =[
// {label:'$',tooltip:'inexpensive',minperson:'1',maxperson:'10'},

// {label:'$$',tooltip:'Moderate',minperson:'11',maxperson:'20'},

// {label:'$$$',tooltip:'expensive',minperson:'21',maxperson:'50'} 
// ]
// console.log(price)


// const date = new Date();

// date.toString(); 

// console.log(date)

//-----------------------------------
// function person(info) {
// return{
//     Name :'lin',
//     id :25,
//     location :'USA'}   
// }
// const person1 = person(1)
// console.log(person1)

//--------------------------------------
// function person(name,id,location){
// this.name='alon';
// this.id ='23';
// this.location='USA'    
// }
// const person1 = new person(1)

//-----------------------------------------
// const person={
// id : 1,
// name : 'leena',
// location:'tokyo',
// phone:65894561,    
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let enrty of Object.entries(person))
// console.log(enrty)

// const person1={...person}
// console.log(person1)

// if('id' in person)console.log('Approved')

// //-------------------------------------------
// let post={
// title :'blog',
// postedBy:'leli',
// like : 5,
// comment:[
// {user321:'good one',admin:'thanks'},
// {user842:'good ',admin:'thanks'},
// ],
// status:'online'    
// }
// console.log(post)

// ///------------------------------------

// let address1 =new Address('alex','USA',954)
// let address2 =new Address('jhon','Italy',852)

// console.log(address1)

// console.log(address2)

// console.log(areEqual(address1,address2))

// function Address(name,location,postalCode) {
// this.name=name;
// this.location=location;
// this.postalCode=postalCode;
// }

// function areEqual(address1,address2) {
// return(
// address1.name === address2.name &&
// address1.location === address2.location &&
// address1.postalCode === address2.postalCode   
// )   
// }

// const date = new Date();
// date.toString();
// console.log(date)


///-----------------------------------------



// const person={
//     id : 1,
//     name : 'leena',
//     location:'tokyo',
//     phone:65894561,    
//     }
//     for(let key in person)
//     console.log(key,person[key])

//     for(let key of Object.keys(person))
//     console.log(key)

//     for(let enrty of Object.entries(person))
//     console.log(enrty)

//     const person1={...person}
//     console.log(person1)

//     if('id' in person)console.log('Approved')

//------------------------------
//     let blog = new Blog('Fitness','Jhonny')
// console.log(blog)

// function Blog(title,author) {
// this.title=title;
// this.author=author;
// this.like=0; 
// this.comments=[];
// this.status=false;    
// }

//------------------------
// let price =[
// {label:'$',tooltip:'inexpensive',minperson:'1',maxperson:'10'},

// {label:'$$',tooltip:'Moderate',minperson:'11',maxperson:'20'},

// {label:'$$$',tooltip:'expensive',minperson:'21',maxperson:'50'} 
// ]
// console.log(price)


// const date = new Date();

// date.toString(); 

// console.log(date)

//-----------------------------------------------------------

// function person(info) {
// return{
//     Name :'lin',
//     id :25,
//     location :'USA'}   
// }
// const person1 = person(1)
// console.log(person1)

// //--------------------------------------


// let address1 =new Address('alex','USA',954)
// let address2 =new Address('jhon','Italy',852)

// console.log(address1)

// console.log(address2)

// console.log(areEqual(address1,address2))

// function Address(name,location,postalCode) {
// this.name=name;
// this.location=location;
// this.postalCode=postalCode;
// }

// function areEqual(address1,address2) {
// return(
// address1.name === address2.name &&
// address1.location === address2.location &&
// address1.postalCode === address2.postalCode   
// )   
// }


// const date = new Date();
// date.toString();
// console.log(date)

//-----------------30-10-23--------------------------
// let info={
// name :'pola',
// location:'sydney',
// id:9854,
// }
// console.log(info)

// //------------------------------------------
// function wc23(team1,team2){
// console.log('match b/w'+" "+team1+" "+'&'+" "+team2)    
// }
// wc23('Afg','Sri')

// //-----------------------------------------
// let id = max (2,4)
// console.log(id)

// function max(x,y){
// return(x>y)? x : y
// }
//------------------------------------------------------
// let pic = max(700,600)
// console.log(pic)

// function max(width,height) {
// if (width > height) {
// console.log('width is max');return (width)   
// }
// else if(width === height){
// console.log('width & height same');return(width)
// }    
// else{
// console.log('height is max'); return(height)    
// }
// }

//----------------------------------------------------
// let watch = time(17)
// console.log(watch)

// function time(hour) {
// if (hour >=6 & hour <12) {
// console.log('good morning');return(hour)    
// }
// else if (hour >=12 & hour <16){
// console.log('good afternoon');return(hour)      
// } 
// else if (hour >=16 & hour <18){
// console.log('good evening');return(hour)  
// }  
// else{
// console.log('good night');return(hour)    
// } 
// }

//-------------------------------------------------
// hello(1)
// function hello(i) {
// for (let i = 1; i <= 5; i++) {
//     console.log('hello',i);

// }    
// }
// //----------------------------------------------
// even(1)
// function even(a) {
// while (a <= 10) {
// if(a % 2 ===0)
// console.log('even',a)
// a++;    
// }    
// }
// //-------------------------------------------
// odd(1)
// function odd(y) {
// do {
// if(y %2 !==0)
// console.log('odd',y)
// y++;    
// } while (y <= 10);    
// }
//--------------------------------------------

// evenodd(1)
// function evenodd(a) {
// do {
// let show=(a %2 ===0)? 'even' : 'odd'
// console.log(show,a)
// a++;    
// } while (a <=10);    
// }


//-------------------------------------------
// show(5)
// function show(rows) {
// for (let row = 1; row <= rows; row++) {
// let p ='';    
// for (let i = 0; i <=row; i++)
// p +='*'
// console.log(p) 
// }    
// }

// //-------------------------------------------------
// let output = Name(5)
// console.log(output)

// function Name(input) {
// if(typeof input !== "number")return"NAN"

// if(input % 3 ===0 && input % 5===0)return"logiTech"

// if(input % 3 ===0)return"logi"

// if(input % 5 ===0) return"tech"
// }


//----------------------------------
// function person(detail) {
// return{
// name:'lonu',
// location:'china',
// postalCode:6545,    
// }    
// }
// const person1= person(1)
// console.log(person1)

//---------------------------------
// const person={
// id : 1,
// name : 'leena',
// location:'tokyo',
// phone:65894561,    
// }
// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// const person1={...person}
// console.log(person1)

// if('id' in person)console.log('approved')

//-----------------------------------------
// let blog = new Blog('Fitness','Jhonny')
// console.log(blog)

// function Blog(title,author) {
// this.title=title;
// this.author=author;
// this.like=0; 
// this.comments=[user654='nice',author='thanks'],
// [user656='fab',author='thanks'];
// this.status=true;    
// }

// const date = new Date();
// date.toString();
// console.log(date)



//--------------Arrays----------------------
//---------Adding Elements------------------



// const numbers =[3,4];

//--------end

// numbers.push(5,6);

//----------begining--------------
// numbers.unshift(1,2);

//-----------middle-----------
// numbers.splice(2 ,0, 'a','');

// console.log(numbers)


//----------------------------------------


//---------finding element (primitives)-----------
//-----------------------------------------------

// const numbers =[1,2,3,4,5,6,7];

// console.log(numbers.indexOf(6,2));

// console.log(numbers.lastIndexOf(2));

// console.log(numbers.indexOf(8) !== -1);

// console.log(numbers.includes(1));




//--------finding element (Reference types)-------
//---------------------------------------------

// const subjects =[
//  {sno : 1 , subject:'english'},
//  {sno : 2 , subject:'math'},
//  {sno : 3 , subject:'Physic'},
// ]
// const subject = subjects.find(function (subjects){
// return subjects.sno === 1;
// });

// const persons=[
// {id : 11,name:'lona'},
// {id : 12,name:'james'},
// {id : 13,name:'alen'},
// ]
// const person=persons.find(persons => persons.id ===12
// );

// console.log(person,subject)



//----------------------------------
//---------Removing element--------



// const numbers=[1,2,3,4]

//------End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

//---------Begining----------
// const start = numbers.shift();
// console.log(numbers);
// console.log(start);

//------------in the middle---------------
// const middle = numbers.splice(2,2)
// console.log(numbers)
// console.log(middle)



//--------------------------------------
//----------Emptying an array----------

// let num =[1,2,3,4,5];
// let another = num;

//----------solution 1
// num = [];

//--------solution 2
// num.length=0;

// console.log(num);
// console.log(another);


//--------------------------------------------
//------combining and slicing array------------

// const first =[1,2,3]
// const Second=[4,5,6]

// const combine = first.concat(Second)


// const slice =combine.slice(2,5)

// console.log(combine)
// console.log(slice)

//-------------------------------------------

//---------------31-10-23-------------------

// function person(detail) {
// return{
// name:'Alaska',
// location:'NY',
// id:65,
// phone:9841318618,
// comment:[p1='asd',p2='plojd'],    
// }    
// }
// const person1 = person(1)
// console.log(person1)

//------------------------------------------------
//------------
// const person={
// name:'Alaska',
// location:'NY',
// id:99,
// phone:9841318618,
// comment:[p1='asd',p2='plojd']  
// }

// if('id'  in person){console.log('Approved')

// for(let key in person)
// console.log(key,person[key])

// for(let key of Object.keys(person))
// console.log(key)

// for(let entry of Object.entries(person))
// console.log(entry)

// const person1 ={...person}
// console.log(person1)
// }

// else {console.log('id not found')}

// //------------------------------------------
//  let post = new Post('Fitness','Jhonny')
// console.log(post)

// function Post(title,author) {
// this.id=25;
// this.title=title;
// this.author=author;
// this.likes=5;
// this.status='online';
// this.comment=
// [user='osm',author='thanks'];
// [user='wow',author='thanks'];
// }

// const date =new Date();
// date.toString();
// console.log(date)

// //-------------------------------------
// const num=[3,4]
// num.push(5,6,7)

// num.unshift(1,2)

// num.splice(1,2)

// console.log(num)

// //-------------------------------------

// const number=[1,2,3,4,5,6]
// console.log(number.indexOf(2));

// console.log(number.lastIndexOf(2));

// console.log(number.includes(5));


// //---------------------------------
// const subjects =[
// {sno : 1 , subject:'english'},
// {sno : 2 , subject:'math'},
// {sno : 3 , subject:'Physic'},
// ]
// const subject = subjects.find(function (subjects){
// return subjects.sno === 1;
// });

// const students =[
// {id :100,name:'alex'},
// {id :101,name:'alen'},
// {id :102,name:'lona'},    
// ]
// const student = students.find(students => students.id ===101)
// console.log(subjects,students) 

//----------------------------------------

// const numbers=[1,2,3,4]

// const last = numbers.pop();
// console.log(numbers);
// console.log(last);


// const start = numbers.shift();
// console.log(numbers);
// console.log(start);


// const middle = numbers.splice()
// console.log(numbers)
// console.log(middle);

//--------------------------------------
// let num = [1,2,3,4,5]
// let another=num
// num.length=0;
// console.log(num,another)


//--------------------------------------

// const first =[1,2,3,4]
// const Second=[5,6,7,8]

// const combine = first.concat(Second)


// const slice =combine.slice(1,6)

// console.log(combine)
// console.log(slice)

///---------------------


// let num1=[1,2,3,4]
// let num2=[5,6,7,8]

// const combine =num1.concat(num2)
// combine.length=5; 
// console.log(combine)

// const slice=combine.slice(2,7)
// console.log(slice) 


//--------------with spread operators--------------
// let num1 =[1,2,3,4]
// let num2 =[5,6,7,8]
// const combine =[...num1,...num2]
// console.log(combine)





//------------Iterating an Array-------------------
//----------solution 1----------------------



// let num = [1,2,3,4,5]

// for(let number in num)
// console.log(number,num[number])



// //-----------solution 2--------------
// num.forEach((num,index) => console.log(index,num));





//---------------joining  Array---------------------

// const num =[1,2,3];
// const joined = num.join('-');
// console.log(joined);

// const message = 'This is my message';
// const parts = message.split('  ');
// console.log(parts);

// const combine = parts.join('-');
// console.log(combine)


//---------------------01-11-23------------------------------

// let person1 ={   
// id  :65,   
// name : 'Ali jutt',
// age :24,
// email :'ali54@gmail.com',
// greet : function(){console.log('Hello from Ali')},
// }
// person1.hobbies=['playing football','Reading','Drawing'];



// if('id' in person1)console.log('Approved,your id is'+" "+person1.id)
// else{console.log('id not found')}
// person1.greet();

// console.log(person1)

// for(let key in person1)
// console.log(key,person1[key])

// for(let entry of Object.entries(person1))
// console.log(entry)

// const newPerson ={...person1}
// console.log(newPerson)

// let date= new Date()
// date.toString()
// console.log(date)

//--------------------------------------------------
// function person(detail) {
//  return{
//  id:123,   
//  name:'Alaska',
//  location:'U.S.A',
//  postalCode:6545,
//  }   
// }
// const person1=new  person(1)
// console.log(person1)

//--------------------------------------------------
// const num =[3,4]
// num.push(5,6)
// num.unshift(1,2)
// num.splice(2,0,3,4)
// console.log(num)

//---------------------------------------
// const number=[1,2,3,4,5,6,7,8]

// console.log(number.indexOf(2))

// console.log(number.lastIndexOf(6))

// console.log(number.includes(3))

//----------------------------------------

// const courses=[
// {id : 101 , name:'English'},    
// {id : 102 , name:'Urdu'},
// {id : 103 , name:'Math'},
// {id : 104 , name:'Physics'},
// ]
// const course = courses.find(function(course){
// return course.id === 103;    
// })
// console.log(course);

// const course = courses.find(course => course.id === 104)
// console.log(course)

//---------------------------------------------------

// const num =[1,2,3,4,5,6,7,8]

// const last =num.pop(1);
// console.log(num)
// console,log(last)

// const start = num.shift(2)
// console.log(num)

// const middle = num.splice(2,2)
// console.log(num)

//------------------------------------------------------

// const number1 =[1,2,3,4]
// const number2 =[5,6,7,8]

// const combine =number1.concat(number2)


// const slice = combine.slice(2,4)
// console.log(combine);
// console.log(slice);

// const combine =[...number1,...number2]
// console.log(combine)

//-------------------------------
// const num = [3,4]
// num.push(5,6)

// num.unshift(1,2)

// num.splice(6,0,7,8)

// console.log(num)

// const num = [1,2,3,4,5,6,7,8]

// console.log(num.indexOf(9))

// console.log(num.lastIndexOf(8))

// console.log(num.includes(7))


//--------------------------------
// const num =[1,2,3,4]

// for(let number in num)
// console.log(number,num[number])

// num.forEach((num,index) => console.log(num,index))

//-------------------------------------------------

// const num =[1,2,3,4,-5]
//-----(every)
// const positive = num.every(function(value){
// return value >=0;    
// })
// console.log(positive)

//-----(some)---------

// const somePositive = num.some(function(value){
// return value >=0;    
// })
// console.log(somePositive)


//---------------------------
// let person1={
// id:201,
// name :'alon',
// location:'USA',
// phone:984896364,
// postalCode:9721,
// email:'alon654@hotmail.com',
// greet:function(){console.log('hello alon')}
// }
// person1.hobbies=['Drawing','drawing','traveling']


// for(let key in person1)
// console.log(key,person1[key])

// for(let entry of Object.entries(person1))
// console.log(entry)

// console.log(person1)
// console.log(person1.id)
// console.log(person1['id'])



// if ('id' in person1) {
// person1.greet();
// for(let entry of Object.entries(person1))
// console.log(entry)    
// }
// else{console.log('id not found')}


//--------------------------------------
// let person=[
// {id : 123 , name : 'alaska'},
// {id : 124 , name : 'lona'},
// {id : 125 , name : 'lara'},
// {id : 126 , name : 'phillips'},
// ]

// const detail=person.find(detail => detail.id === 123)
// console.log(detail)


//------------------------------------------
// let num =[-2,-1,0,1,2,3,4,5,6]

// const filtered = num.filter(n => n >0)
// console.log(filtered)


//--------------------------------------------
// let returantsOpen = [
//     { name: 'Hotel In', closeTime: 12, closeTimeSpan: "PM" },
//     { name: 'Hot Sea', closeTime: 11, closeTimeSpan: "PM" },
//     { name: 'Cool IN', closeTime: 1, closeTimeSpan: "AM" },
//     { name: 'crunchy Chicken', closeTime: 10, closeTimeSpan: "PM" },
//     { name: 'Hot OUT', closeTime: 12, closeTimeSpan: "PM" },
// ]

// const filtered = returantsOpen.filter(Open => Open.closeTime < 12 && Open.closeTimeSpan === "PM")
// console.log(filtered)

//---------------------------------------------------

// const arr1 = ["a", "b", "c", "d", "e", "f", "g"];
// arr1.splice(2, 4, "MY VALUE", "MY SECOND VALUE"); /// First Argument is index and second argument is how many elements you want to delete from that index and third argument is what you want to add at that index

// console.log("SPLICED ARRAYY ==> ", arr1)

// const arr2 = ["a", "b", "c", "d", "e", "f", "g"];
// const slicedArr = arr2.slice(1, -1);

// console.log("SLICED ARRAY ==> ", arr2)
// console.log("OG SLICED ARRAY ==> ", slicedArr)

//--------------------------



// let only18Above = [
//     { id: 901, name: 'kate', age: 18, mail: 'kate@hotmail.com' },
//     { id: 902, name: 'William', age: 16, mail: 'william@hotmail.com' },
//     { id: 903, name: 'jhon', age: 20, mail: 'jhon@myahoo.com' },
//     { id: 904, name: 'lara', age: 15, mail: 'lara@hotmail.com' },
//     { id: 905, name: 'kumar', age: 21, mail: 'kumar@guu.com' },
//     { id: 906, name: 'mick', age: 25, mail: 'mick@hotmail.com' },
// ]

// const filtered = only18Above.filter(filtered => filtered.age >= 18)
// console.log('18+ allowed ==>', filtered)


//--------------------------------------
// let evenItems = []
// let oddItems = []

// for (let index = 1; index <= 1000; index++) {

//     if (index % 2 === 0) {
//         console.log('even', index)
//         evenItems.push(index)
//     }
//     else {
//         console.log('Odd', index);
//         oddItems.push(index)
//     }

// }
// console.log(evenItems, 'these are even items')
// console.log(oddItems, 'these are odd items')

//------------------

// let tableOf = 16;
// let rangeOfTable = 10;

// for (let i = 1; i <= rangeOfTable; i++) {
//     // console.log(tableOf, '*', i, '=', i * tableOf)
//     console.log(`${tableOf} * ${i} = ${i * tableOf}!`)

// }

//----------------------------------------------------

// let number = '10';
// let rangeOfDividents = 50000;

// for (let i = 1; i <= rangeOfDividents && i <= number; i++) {
//     if (!(number % i)) {
//         //  console.log(i, ' is % of', number)
//         console.log(`${i}  is % of ${number}`)
//     }
// }




//---------------------------------
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

//------------------------------------

// for(initialization; condition; inc/dec) { REST_OF_THE_CODE } 



// show(5)
// function show(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let p = '';
//         for (let i = 0; i < row; i++) {
//             p = p + '*';
//         }
//         console.log(p)
//     }
//     for (let row = rows - 1; row >= 1; row--) {
//         let p = '';
//         for (let i = 0; i < row; i++) {
//             p = p + '*';
//         }
//         console.log(p)
//     }
// }


//-------------------------------------------------
// let interval = 4;
// let alphabetsRange = 100;
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// let result = '';
// for (let i = 0; i < alphabets.length; i++) {
//     if (i % interval) {

//         console.log(alphabets[i - 1])
//         // result += alphabets[i - 1]
//     }

// }

// console.log("result", result)
// for (let j = number; j < alphabets.length; j++) {
//     if (j % number === 0) {
//         console.log(alphabets[j - 1])
//     }
// }

// let counter = 0;

// for (let i = 0; i < alphabetsRange; i++) {
//     counter += interval;

//     // result += alphabets[(counter % 26) ? (counter % 26) : 0];
//     if (counter % 26) {
//         result += alphabets[(counter % 26) - 1]
//     }
//     else {
//         result += alphabets[(counter % 26)]
//     }

// }

// console.log("RESULT", result)

//----------------------------
// let interval = 4;
// let alphabetsRange = 100;
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// for (let i = 0; i < alphabetsRange; i++) {
//     if (0 % 26) {
//         result += alphabets[(0 % 26) - 1]
//     }
//     else {
//         result += alphabets[0 % 26]
//     }

// }
// console.log(result)


// ----------------------------------------------
// let interval = 4;
// let alphabetsRange = 8;
// let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let counter = 0;
// let result = '';

// for (let i = 0; i < alphabetsRange; i++) {
//     counter += interval;
//     if (counter % 26) {
//         result += alphabets[(counter % 26) - 1]
//     }
//     else {
//         result += alphabets[(counter % 26)]
//     }

// }

// console.log("RESULT", result)
//----------------------
// let evenItems = []
// let oddItems = []

// for (let index = 1; index <= 1000; index++) {

//     if (index % 2 === 0) {
//         console.log('even', index)
//         evenItems.push(index)
//     }
//     else {
//         console.log('Odd', index);
//         oddItems.push(index)
//     }

// }
// console.log(evenItems, 'these are even items')
// console.log(oddItems, 'these are odd items')
// -----------------------------------------
// let evenNumber = []
// let oddNumber = []

// for (let index = 1; index <= 20; index++) {

//     if (index % 2 === 0) {
//         console.log('even', index)
//         evenNumber.push(index)
//     }
//     else {
//         console.log('Odd', index);
//         oddNumber.push(index)
//     }

// }
// const reversedEven = evenNumber.reverse()
// console.log(evenNumber, 'these are even items')
// const reversedOdd = oddNumber.reverse()
// console.log(oddNumber, 'these are odd items')

// ---------------------------------



// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// const dataOne = [80, 15, 60, 70, 20, 100, 20, 25, 90]
// const dataTwo = [90, 80, 16, 15, 14, 101, 100, 200, 1]
// const dataThree = [190, 84, 11, 22, 144, 202, 1850, 48, 13]

// const allData = dataOne.concat(dataTwo, dataThree)

// const numReturn = allData.filter(allData => allData > 30 && allData <= 100)

// console.log(result)
// console.log(numReturn)


//--------------------


// let number = [4, 8, 101, -1, 654, 9, 20, 15, 16, -7, -2, 1]

// const mySort = number.sort((a, b) => a - b);

// console.log("THE Minimum VALUE IS  :", mySort[0])
// console.log("The maximum value is :", mySort[number.length - 1])


// let only18Above = [
//     { id: 901, name: 'kate', age: 18, mail: 'kate@hotmail.com' },
//     { id: 902, name: 'William', age: 16, mail: 'william@hotmail.com' },
//     { id: 903, name: 'jhon', age: 20, mail: 'jhon@myahoo.com' },
//     { id: 904, name: 'lara', age: 15, mail: 'lara@hotmail.com' },
//     { id: 905, name: 'kumar', age: 21, mail: 'kumar@guu.com' },
//     { id: 906, name: 'mick', age: 25, mail: 'mick@hotmail.com' },
// ]
// const filtered = only18Above.filter(filtered => filtered.age >= 18)
// console.log('18+ allowed ==>', filtered)
// //-------------------------------
// const num = [1, 2, 3, 4, -5]

// const positive = num.some(function (value) {
//     return value >= 0;
// })
// console.log(positive)
// //------------------
// const value = [25, 4, 5, 36, 3, 2]
// let filtering = value.filter(value => value < 10)
// console.log(filtering)
// let maping = filtering.map((filtering, index) => {
//     console.log(index, filtering)
//     return filtering + 1
// })
// console.log(maping)


//---------------------------------------
// let word = 'police'
// console.log(word.charAt(0).toLocaleUpperCase() + word.slice(1))


//--------------------------------------
// let character = [
//     {
//         name: 'jhon',
//         age: 18,
//         hairColor: 'blue',
//         height: 5.5,
//         gender: 'male',
//         weight: 60,
//     },
//     {
//         name: 'alex',
//         age: 26,
//         hairColor: 'blue',
//         height: 5.9,
//         gender: 'male',
//         weight: 59,
//     },
//     {
//         name: 'harry',
//         age: 21,
//         hairColor: 'black',
//         height: 6,
//         gender: 'male',
//         weight: 80,
//     },
//     {
//         name: 'liza',
//         age: 16,
//         hairColor: 'brown',
//         height: 5.2,
//         gender: 'female',
//         weight: 45,
//     },
//     {
//         name: 'lana',
//         age: 35,
//         hairColor: 'grey',
//         height: 5.5,
//         gender: 'female',
//         weight: 58,
//     },
// ]
// let weightcharacter = character.filter((weightcharacter) => weightcharacter.weight > 50);
// console.log(weightcharacter)

// //--------

// let heightcharacter = character.filter((heightcharacter) => heightcharacter.height > 5.5);
// console.log(heightcharacter)
//-----------

// let namecharacter = character.map(namecharacter => namecharacter.name)
// console.log(namecharacter)
//----------------------

// let nameAgeCharacter = character.map((nameAgeCharacter) => ({
// name: nameAgeCharacter.name,
// age: nameAgeCharacter.age,
// })
// )
// console.log(nameAgeCharacter)
//-----------------------------------------------

// let weightLess50 = character.some(weightLess50 => weightLess50.weight < 50)
// console.log(weightLess50)
//-----------

// let ageSorting = character.sort((a, b) => a.age - b.age)
// console.log(ageSorting)

//------------------------

// let nameSorting = character.sort((a, b) => {
//     if (a.name < b.name) return -1;
//     return 1;
// })
// console.log(nameSorting)

//-----------------------------


// let ageTotal = character.reduce((acc, curr) => acc + curr.age, 0)
// console.log(ageTotal)

//-------------------------------

// let totalHairColor = character.reduce((acc, curr) => {
//     const color = curr.hairColor;
//     if (acc[color]) {
//         acc[color]++;
//     }
//     else {
//         acc[color] = 1;
//     }
//     return acc;
// }, {})
// console.log(totalHairColor)

//----------------------------

// const bool = [true, false, false, true, true, false];

// const checkTrueFalse = bool.map((bools) => {
//     if (bools === true) {
//         return Math.max(1, 2, 3, 4);
//     }
//     else {
//         return 0;
//     }
// })
// console.log(bool)
// console.log(checkTrueFalse)


//-----------------------
// let prices = [85, 120, 90, 100, 101, 60, 122, 150]
// const taxPrices = prices.map(price => {
//     if (price >= 100) {
//         return price * 1.2
//     }
//     else {
//         return price
//     }
// })
// console.log(prices)
// console.log(taxPrices)

//-----------------------------------

// let persons = [
//     {
//         name: 'kim jhon',
//         age: 20,
//         permission: 'Approved'
//     },

//     {
//         name: 'tom uston',
//         age: 14,
//         permission: 'denied'
//     },

//     {
//         name: 'laura',
//         age: 15,
//         permission: 'Approved'
//     },

//     {
//         name: 'lipton',
//         age: 19,
//         permission: 'Approved'
//     },
// ]

// const permission = persons.map(person => {
//     if (person.permission === 'Approved') {
//         return person
//     }
//     else {
//         return 'Access denied';
//     }
// })

// console.log(permission)

//--------------------------------
// let items = ['computer', 'glass', 'light', 'play Station', 'chair']

// const itemEdits = items.map(item => {
//     if (item === 'chair') {
//         return 'table'
//     }
//     else {
//         return item + 's';
//     }
// })
// console.log(itemEdits)

//---------------------------------

// let character = [
//     {
//         name: 'jhon',
//         age: 18,
//         hairColor: 'blue',
//         height: 5.5,
//         gender: 'male',
//         weight: 60,
//     },
//     {
//         name: 'alex',
//         age: 26,
//         hairColor: 'blue',
//         height: 5.9,
//         gender: 'male',
//         weight: 59,
//     },
//     {
//         name: 'harry',
//         age: 21,
//         hairColor: 'black',
//         height: 6,
//         gender: 'male',
//         weight: 80,
//     },
//     {
//         name: 'liza',
//         age: 16,
//         hairColor: 'brown',
//         height: 5.2,
//         gender: 'female',
//         weight: 45,
//     },
//     {
//         name: 'lana',
//         age: 35,
//         hairColor: 'grey',
//         height: 5.5,
//         gender: 'female',
//         weight: 58,
//     },
// ]
// let totalHairColor = character.reduce((acc, curr) => {
//     const color = curr.hairColor;
//     if (acc[color]) {
//         acc[color]++;
//     }
//     else {
//         acc[color] = 1;
//     }
//     return acc;
// }, {})
// console.log(character)

// console.log(totalHairColor)

//-------------------------------------------


// const number = counting(-5, 5);
// console.log(number);
// function counting(min, max) {
//     let output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }

//--------------------------------

// const number = [1, 2, 3, 4, 5];
// console.log(number.includes(10))
// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//             return (true);
//     return (false)
// }

//---------------------------

// const numberIs100 = (a, b) => a === 100 || b === 100 || (a + b) === 100

// console.log(numberIs100(50, 50))

//--------------------------------

// const formatDate = (date = new Date()) => {
//     const days = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return (`${days}/${month}/${year}`)
// }
// console.log(formatDate());

//---------------------------------
// const planet = ['Mercury', 'Venus', 'Earth', 'Mars']
// console.log(planet)

// planet.push('Jupiter')
// console.log(planet)

// planet.unshift('Sun')
// console.log(planet)

// planet.pop()
// planet.pop()
// console.log(planet)

// planet.shift()
// console.log(planet)

//-------------------------------
// const multiple = 5;
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < number.length; i++) {
//     const result = multiple * number[i]
//     console.log(`${multiple} x ${number[i]} = ${result}`)
// }

//-------------
// let character = [
//     {
//         name: 'jhon',
//         age: 18,
//         hairColor: 'blue',
//         height: 5.5,
//         gender: 'male',
//         weight: 60,
//     },
//     {
//         name: 'alex',
//         age: 26,
//         hairColor: 'blue',
//         height: 5.9,
//         gender: 'male',
//         weight: 59,
//     },
//     {
//         name: 'harry',
//         age: 21,
//         hairColor: 'black',
//         height: 6,
//         gender: 'male',
//         weight: 80,
//     },
//     {
//         name: 'liza',
//         age: 16,
//         hairColor: 'brown',
//         height: 5.2,
//         gender: 'female',
//         weight: 45,
//     },
//     {
//         name: 'lana',
//         age: 35,
//         hairColor: 'grey',
//         height: 5.5,
//         gender: 'female',
//         weight: 58,
//     },
// ]
// let weightcharacter = character.filter((weightcharacter) => weightcharacter.weight > 50);
// console.log(weightcharacter)

// //--------

// let heightcharacter = character.filter((heightcharacter) => heightcharacter.height > 5.5);
// console.log(heightcharacter)

//---------------------------

// let namecharacter = character.map(namecharacter => namecharacter.name)
// console.log(namecharacter)
//----------------------

// let nameAgeCharacter = character.map((nameAgeCharacter) => ({
// name: nameAgeCharacter.name,
// age: nameAgeCharacter.age,
// })
// )
// console.log(nameAgeCharacter)
//----------------------

// let namecharacter = character.map(namecharacter => namecharacter.name)
// console.log(namecharacter)
//----------------------


// let nameAgeCharacter = character.map((nameAgeCharacter) => ({
// name: nameAgeCharacter.name,
// age: nameAgeCharacter.age,
// })
// )
// console.log(nameAgeCharacter)

//----------

// const number = [1, 2, 3, 4, 5];
// console.log(number.includes(5))
// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//             return (true);
//     return (false)
// }

//--------------
// const myPet = {
//     name: 'Sudo',
//     type: 'Dog',
//     breed: 'Poodle',
//     age: 7,
//     freind: ['Bite', 'Byte', 'Data']
// }

// console.log(myPet)

// myPet.color = 'Black';
// myPet.breed = 'bulldog';
// myPet.freind.pop();

// console.log(myPet)

//----------------

// const banana = { name: 'Banana', quantity: 11, price: 1.9 }
// const apple = { name: 'Apple', quantity: 5, price: 2.1 }
// const candy = { name: 'Candy', quantity: 10, price: 1.5 }

// const store = {
//     storeNumber: 5,
//     locationCity: 'Miami',
//     locationCountry: 'U.S.A',
//     products: [banana, apple, candy]
// }

// console.log(store)

// console.log(store.products)

// for (let i = 0; i < store.products.length; i++)
//     console.log(store.products[i])

// store.products[0].price = 2.1;

// console.log(store) 

//-----------------------------

// houseForSale = {
//     area: 940,
//     built: 2015,
//     value: 320000,
//     streetName: 'LS P.D',
//     owner: { name: 'alex', age: 65 },
//     offer: [290000, 295000, 315000, 312000]
// }

// delete houseForSale.built;

// console.log(houseForSale)

// const maxOffer = houseForSale.offer.reduce((max, price) => {
//     if (max < price) {
//         return price;
//     }
//     return max;
// }
//     , 0)
// console.log('Highest Offer =>', maxOffer)

//-------------------------------
// const number = [10, 20, 15, 30, 15, 20, 35, 60, 10]

// const seenNumber = new Set();

// for (let i = 0; i < number.length; i++) {
//     if (seenNumber.has(number[i])) {
//         console.log(number[i]);
//     }
//     seenNumber.add(number[i])
// }

//-----




// let num = [2, 3, 4, 5, 6, 7]

// function arraySum(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//     }
// }
// console.log(num)





//-------------------------------------


// let numbers = [1, 2, 3, 4]

// let sum = 0;

// for (var i = 0; i < numbers.length; i++) {

//     sum += numbers[i]

// }

// console.log('Your sum is ' + sum);



///--------hackerrank sum of int------


// let ar = [1, 2, 3, 4, 10, 11]
// let sum = 0;
// function simpleArraySum(ar) {

//     for (let i = 0; i < ar.length; i++) {
//         sum += ar[i];
//     }
//     console.log('asdsa', sum)
// }

// simpleArraySum(ar);



//---------min-max-sum-hackerrank-----------
// let arr = [1, 2, 3, 4, 5]

// function miniMaxSum(arr) {

//     let min = arr[0];
//     let max = arr[0];
//     let sum = 0;
//     for (let i = 0; i < 5; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//         sum += arr[i];
//     }
//     let maxNum = sum - min;
//     let minNum = sum - max;
//     console.log(minNum + " " + maxNum)
// }
// miniMaxSum(arr)



//-----------------------------
//----------10-11-2023
///-------Hackerrank-staircase-------------


// function stairCase(n) {
//     for (let i = 1; i <= n; i++) {
//         let move = '';

//         for (let a = 0; a < n; a++) {
//             if (a < n - i) {
//                 move += ' ';
//             }
//             else {
//                 move += '#';
//             }
//         }

//         console.log(move)
//     }
// }
// stairCase(5)

//------------------------------------
//-------------hackerrank-birthdaycandel--------------

// function birthdayCandel(candel) {
//     let count = 0;
//     let max = Math.max(...candel);
//     for (let i = 0; i < candel.length; i++) {
//         if (candel[i] == max) {
//             count++;

//         }

//     }

//     return count;
// }
// birthdayCandel([1, 2, 0, 3, 1])

//-----------

// function diagonalDifference(arr) {
//     var n = arr.length; 
//     var d1 = 0;
//     var d2 = 0;
//   for(var i=0; i<n; i++){
//      for(var j=0; j<n; j++){
//      
//          if(i === j) {
//            d1 += arr[i][j];
//          }
//      
//          if(i + j === n - 1){
//             d2 += arr[i][j];
//          }
//       }
//   }
//   return Math.abs(d1 - d2);
// }

//--------------------------------------
// function diagonalDifference(arr) {
//     var n = arr.length; 
//     var d1 = 0;
//     var d2 = 0;
//   for(var i=0; i<n; i++){
//      for(var j=0; j<n; j++){

//          if(i === j) {
//            d1 += arr[i][j];
//          }

//          if(i + j === n - 1){
//             d2 += arr[i][j];
//          }
//       }
//   }
//   return Math.abs(d1 - d2);
// }

//--------------------------------------

// a = [3, 4, 5]
// k = 2
// queries = [1, 2]
// function circularArrayRotation(a, k, queries) {

//     let result = [];
//     while (k > 0) {
//         let tmp = a.pop();
//         a.unshift(tmp);
//         k--;
//     }
//     for (let i = 0; i < queries.length; i++) {
//         result.push(a[queries[i]])

//     }
//     return result;
// }

//-----------------------------
// function circularArrayRotation(a,k,queries) {
//     let result =[];
//     for (let k = 0; k > 0; k++) {
//            let move = a.pop();
//               a.unshift(move);
//     }
//     for(let i =0;i < queries.length;i++){
//     result.push(a[queries[i]])    
//     }
//     return
// }



// function breakingRecords(scores) {
//     let min = scores[0];
//     let max =scores[0]; let up=0;
//     let down=0;

//     for(let i =0; i < scores.length;i++){
//      if(scores [i] > max){
//       max = scores[i];up++;   
//      }   
//      else if (scores[i] < min){
//          min = scores[i];down++;}
//     }
//  return [up,down];
//  }

//---------------

// function compareTriplets(a, b) {
//     let aPoint = 0;
//     let bPoint =0;
//     for(let i =0 ; i < 3; i++){
//         if (a[i] > b[i]){
//          aPoint++   
//         }
//         if(b[i] > a[i]){
//             bPoint++
//         }
//     }
//     return[aPoint,bPoint]
//     }

//-----------------------------
// function compareTriplets(a, b) {
//     let alice = 0;
//     let bob = 0;
//     for (let i = 0; i < 3; i++) {
//         if (a[i] > b[i]) {
//             alice++;
//         }
//         if (b[i] > a[i]) {
//             bob++;
//         }
//     }
//     return [alice, bob]
// }

//-------------------
// let a = [2, 3, 4]
// function circularArrayRotation(a, k, queries) {
//     for (let i = 0; i < k; i++) {
//         a.unshift(a.pop());
//     }
//     let ar = [];
//     for (let i = 0; i < queries.length; i++) {
//         ar.push(a[queries[i]]);
//     }
//     return ar;

// }
// circularArrayRotation();

//-------------------------


// function gradingStudents(grades) {

//     const result = grades.map((values) => {
//         if (values < 38) {
//             return values;
//         }
//         else if (values % 5 < 3) {
//             return values;
//         }
//         else {
//             let extraMarks = 5 - (values % 5);
//             return values + extraMarks;
//         }
//     });
//     return result;
// }



//------------Subarray division------
//  let matches =0 ;
//  for(let i =0; i < s.length;i++){
//      let subarr = s.slice(i,i+m);
//      let sum = subarr.reduce((a,b)=> a+b)
//      if(sum == d){matches++;}
//  }
//  return matches;


//-----------------Number line jump----------
// function kangaroo(x1, v1, x2, v2) {
//     if (v1 < v2)
//     return "NO";
//     if((x2 - x1) % (v1 - v2) == 0)
//     return "YES";
//     else
//     return "NO";

//  }


//-------------------------


// function gradingStudents(grades) {

//     const result = grades.map((values) => {
//         if (values < 38) {
//             return values;
//         }
//         else if (values % 5 < 3) {
//             return values;
//         }
//         else {
//             let extraMarks = 5 - (values % 5);
//             return values + extraMarks;
//         }
//     });
//     return result;
// }

//-------------------

//-----------------Number line jump----------
// function kangaroo(x1, v1, x2, v2) {
//     if (v1 < v2)
//     return "NO";
//     if((x2 - x1) % (v1 - v2) == 0)
//     return "YES";
//     else
//     return "NO";

//  }




////------------Bill division----


// function bonAppetit(bill, k, b) {
//     let total = bill.reduce((a, b) => a + b)
//     let anaBill = (total - bill[k]) / 2;
//     console.log(anaBill == b ? "Bon Appetit" : b - anaBill)
// }

//---------------------

// function birthday(s, d, m) {
//     let matches = 0;

//     for (let i = 0; i < s.length; i++) {
//         let newArr = s.slice(i, i + m);
//         let sum = newArr.reduce((a, b) => a + b)
//         if (sum == d) { matches++ }
//     }
//     return matches;

// }

// //--XX---------------------XX
// function hurdleRace(k, height) {
//     let heightMax = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] > k) {
//             let magic = diff + height[i] - k;
//             if (magic > max) { heightMax = magic }
//         }
//     }
//     return heightMax;
// }
//--------------

// function hurdleRace(k, height) {

//     let heightMax = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] > k) {
//             let diff = height[i] - k;
//             if (diff > heightMax) { heightMax = diff }
//         }
//     }
//     return heightMax;
// }

//------


// function timeConversion(s) {
//    let hours = s.slice(0, 2)
//    let minutes = s.slice(3, 5)
//    let second = s.slice(6, 8)
//    if (s.includes('A.M')) {
//       if (hours === '12') { hours = '00' }
//    }
//    else {
//       if (hours < 12 && hours > 6) {
//          hours = parseFloat(hours) + 12
//       }
//    }
//    return result = hours + ':' + minutes + ':' + second
// }

//-----------------




// n = 6,
//    k = 3,
//    ar = [1, 3, 2, 6, 1, 2],
//    function divisibleSumPairs(n, k, ar) {


//       let count = 0;
//       for (let i = 0; i < n - 1; i++) {
//          for (let j = i + 1; j < n; j++) {
//             if ((ar[i] + ar[j]) % k == 0) { count++ }
//          }
//       }
//       return count;
//    }

//---------------
// function gradingStudents(grades) {
// const result = grades.map((values)=>{
//    if(values < 38){
//        return values;
//    }   
//    else if(values %5 <3){
//        return values;
//    }
//    else{
//     let extraMarks =5-(values%5);
//     return values + extraMarks;   
//    }
//   });
//   return result;
//   }


// function divisibleSumPairs(n, k, ar) {


//    let count = 0;
//    for (let i = 0; i < n - 1; i++) {
//       for (let j = i + 1; j < n; j++) {
//          if ((ar[i] + ar[j]) % k == 0) { count++ }
//       }
//    }
//    return count;
// }

//----------------------------------
//-----------plus-mius--------------
// function plusMinus(arr) {
//    let plusVal = 0;
//    let negVal = 0;
//    let zero = 0;
//    let arrLength = arr.length;

//    for (let i = 0; i < arrLength; i++) {
//       if (arr[i] > 0) {
//          plusVal++;
//       } else if (arr[i] < 0) {
//          negVal++;
//       } else {
//          zero++;
//       }
//    }
//    let posAns = (plusVal / arrLength).toFixed(6);
//    let negAns = (negVal / arrLength).toFixed(6);
//    let zeroAns = (zero / arrLength).toFixed(6);

//    console.log(posAns);
//    console.log(negAns);
//    console.log(zeroAns);
// }

//--------------------




// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//    const totalApples = apples.map(num => num + a).filter(num => num >= s && num <= t).length;
//    const totalOranges = oranges.map(num => num + b).filter(num => num >= s && num <= t).length;
//    console.log(totalApples)
//    console.log(totalOranges)
// }

// //--------
// var n = matrix.length;
// var diag1 = 0;
// var diag2 = 0;
// for(var i=0; i<n; i++){
//     for(var j=0; j<n; j++){
//         // an element from the main diagonal
//         if(i === j) { 
//             diag1 += matrix[i][j];
//         }
//         // an element from the counterdiagonal
//         if(i + j === n - 1){
//             diag2 += matrix[i][j];
//         }
//     }
// }
// return Math.abs(diag1 - diag2);



//---------------------------------
// function angryProfessor(k, a) {

//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] <= 0) {
//             count += 1
//         }
//     }

//     return count >= k ? "NO" : "YES"
//----

// let appleCount = 0;
// let orangeCount = 0;
// for (let i = 0; i < apples.length; i++) {
//     if (a + apples[i] >= s && a + apples[i] <= t) {
//         appleCount++;
//     }
// }
// for (let j = 0; j < oranges.length; j++) {
//     if (b + oranges[j] <= t && b + oranges[j] >= s) {
//         orangeCount++;
//     }
// }
// console.log(appleCount);
// console.log(orangeCount);



//-----
// int viralAdvertising(int n) {

//    
//     let totalLikes = 0;let numberOfShares = 5;let currentLikes = 0;

//     /*
//     *   Calculating the likes on each day,
//     *   adding them to the total likes,
//     *   and updating the number of shares for next day
//     */
//     for(let i=0; i<n; i++) {
//         currentLikes = numberOfShares/2;
//         totalLikes += currentLikes;
//         numberOfShares = currentLikes*3;
//     }

//     // * Returning the total likes
//     return totalLikes;
// }


//-----------------
// let best = 0;
//     let worst = 0;
//     let bestScore = scores[0];
//     let worstScore = scores[0];
//     const lengthOfData = scores.length;
//     for(let i = 1; i < scores.length; i++) {
//         if (scores[i] > bestScore) {
//             bestScore = scores[i];
//             best++;
//             continue;
//         }
//         if (scores[i] < worstScore) {
//             worstScore = scores[i]
//             worst++;
//             continue;
//         }
//     }
//     return [best, worst];





///-------------
// function getTotalX(a, b) {
//    let count = 0;
//    let min_a = Math.min(...a);
//    for (let i = min_a; i < Math.max(...b); i += min_a) {
//       if (b.every((items) => items % i === 0)) {
//          if (a.every((items) => i % items === 0)) {
//             count += 1
//          }
//       }
//    }
//    return count;
// }


//----------------------------


// a = 2
// b = 6
// function first(a, b) {
//    let sum = a + b;
//    console.log(sum)
// }
// first(a, b)



//--------------------------


// let ar = [1, 2, 3, 4, 10, 11]
// let total = 0;
// function simpleArraySum(ar) {
//    for (let i = 0; i < ar.length; i++) {
//       total += ar[i]
//    }
//    console.log('The sum of array =>' + " " + total)
// }
// simpleArraySum(ar)

//-------------------------



// function staircase(n) {
//    for (let i = 1; i <= n; i++) {
//       let step = ''
//       for (let a = 0; a < n; a++) {
//          if (a < n - i) {
//             step += ' '
//          } else {
//             step += '#'
//          }
//       }
//       console.log(step)
//    }
// }
// staircase(5)


//------------------
// let candles = [1, 4, 2, 3, 4]
// let total = 0;
// function birthdayCakeCandles(candles) {
//    let highest = Math.max(...candles)
//    for (let i = 0; i < candles.length; i++) {
//       if (candles[i] === highest) {
//          total++;
//       }
//    }
//    console.log(total)
// }
// birthdayCakeCandles(candles)



//    return count;
// let aaqibKiString = "fsahjfksahkjfashifasgtuyasfgjhgsfacwangcvhvhjhzchnbxgcjgsxhjzhcdgafh qbddhaFEHGJsafdnFDGSFHGHGDHGSVDSDSAGHFcghdsfghsdghhjas X ZVCXBNZBNCVZXNCGJVCBNMXVACBXZACBVNBZXGCGNJGHCFXBAJSSAJRASGghfdsagdjshgfhjsdagfhjgdsfjhgfqywuiryqweiurhiukasdyiudsghkgsf";

// obj = {}

// for (let i = 0; i < aaqibKiString.length; i++) {
//    let totalString = aaqibKiString[i].toLowerCase();
//    if (obj[totalString]) {
//       obj[totalString] += 1
//    }
//    else {
//       obj[totalString] = 1
//    }
//    console.log(obj)
// }




// let a = [5, 6, 7]
// let b = [3, 6, 10]

// function compareTriplets(a, b) {
//     let alice = 0;
//     let bob = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             alice++;
//         }
//         if (a[i] < b[i]) {
//             bob++;
//         }
//     }
//     console.log("alice==>" + " " + alice + " " + "bob==>" + " " + bob)
// }
// compareTriplets(a, b)

//--------------------------------------



// let k = 3;
// let n = 6;
// let ar = [1, 3, 2, 6, 1, 2]

// function divisibleSumPairs(n, k, ar) {
//     let count = 0;
//     for (let a = 0; a < n; a++) {
//         for (let b = a + 1; b < n; b++) {
//             if ((ar[a] + ar[b]) % k == 0) {
//                 count++;
//             }
//         }
//     }
//     console.log(count)
// }
// divisibleSumPairs(n, k, ar)



//----------------------

// let arr = [9, 1, 3, 7, 5]
// function miniMaxSum(arr) {
//     arr.sort();
//     let min = arr[0]
//     let max = arr[0]
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             (min === arr[i])
//         }
//         sum++;
//     }
//     let maxNumber = sum - min
//     console.log('This is max number ==>' + " " + maxNumber + " ")
// }
// miniMaxSum(arr)

// let arr = [1, 3, 5, 7, 9]
// function miniMaxSum(arr) {
//     let min = arr[0]
//     let max = arr[0]
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             (min === arr[i])
//         }
//         sum++;

//     }
//     console.log(sum)
// }

//----------------------------------------------





// let arr = [9, 1, 3, 5, 7]
// function miniMaxSum(arr) {
//     arr.sort();
//     let mini = arr[0]
//     let maxi = arr[0]
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (mini > arr[i]) {
//             (mini = arr[i])
//         }
//         if (maxi < arr[i]) {
//             (maxi = arr[i])
//         }
//         sum += arr[i]

//     }
//     let maximumNumber = sum - mini;
//     let minimumNumber = sum - maxi;
//     console.log('This is maximum Sum ==> ' + maximumNumber + " " + 'This is minimum Sum ==> ' + minimumNumber)
// }
// miniMaxSum(arr)




//-------------
// let arr = [1, 2, 3, 4, 5, 6]
// let sum = 0;

// const totalSum = arr.reduce((accum, curr) => accum + curr, sum)

// console.log(totalSum)


//-------------





// let x1 = 0;
// let v1 = 2;
// let x2 = 5;
// let v2 = 3;
// function kangaroo(x1, v1, x2, v2) {
//-- let valueOne = x1 - x2;
//-- let valueTwo = v1 - v2;
//-- if ((valueOne % valueTwo) == 0) {
// --    return "YES"
// --}
// --else {
// --    return "NO"
// --}


//     if (v1 < v2) {
//         return "NO"
//     }
//     if ((x1 - x2) % (v1 - v2) == 0) {
//         return "YES"
//     }
//     else {
//         return "NO"
//     }
// }
// kangaroo(x1, v1, x2, v2)



// //------------



// let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// function aVeryBigSum(ar) {
//     let total = 0;
//     for (let i = 0; i < ar.length; i++) {
//         total += ar[i]
//     }
//     console.log(total)
// }
// aVeryBigSum(ar)


//-------------
let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (highestScore < scores[i]) {

        }
    }
}