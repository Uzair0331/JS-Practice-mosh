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
let x = 10;
let y = 20;
if (x > y) {
  console.log("X num is Geater");
} else if (x === y) {
  console.log("X num is equal to Y");
} else {
  console.log("X num is smaller");
}

//----------------------------
let num1 = 30;
let num2 = 20;
if (num1 < num2) {
  console.log("num2 is greater then num1");
} else if (num1 === num2) {
  console.log("Num1 is equal to num2");
} else {
  console.log("Num 1 is Greater then num2");
}
