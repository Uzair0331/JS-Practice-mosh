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
let info={
Name :'jhon',
location : 'USA',
phone : 9286416518,    
}
console.log(info)

//------------------------------------------
function wc23(team1,team2) {
console.log('Match B/W'+" "+team1+" "+'&'+" "+team2)    
}
wc23('eng','sri')

//-----------------------------------------
let num = max(4,3)
console.log(num)

function max(x,y) {
return(x > y)? x : y    
}
//---------------------------------------
let photo = high(600,700)
console.log(photo)
function high(width,height) {
if (width > height) {
console.log('width is high')
return(width)    
}    
else if(width === height){
console.log('width and height are same')
return(width)
}
else{
console.log('height is high')
return(height)    
}
}
//---------------------------------------
let watch=time(19)
console.log(watch)

function time(hour) {
if (hour >=6 & hour <12) {
console.log('good morning')
return(hour)    
}    
else if(hour >=12 & hour <16){
console.log('good afternoon')
return(hour)
}
else if(hour >=16 & hour <19){
console.log('good evening')
return(hour)
}
else{
 console.log('good night')   
 return(hour)
}
}

//---------------------------
let person=elligble(18)
console.log(person)

function elligble(age) {
if (age >=18) {
console.log('elligble age,your age is')    
return(age)
}    
else{
console.log('under age,your age is')
return(age)    
}
}
//-----------------------------
let member = approve(89)
console.log(member)

function approve(person) {
 return(person >=90)? 'Gold':'Silver'   
}