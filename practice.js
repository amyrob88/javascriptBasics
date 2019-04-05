/*for (i=44;i<67;i++) {
    console.log(i);
}*/
/*console.log("hello");
console.log(42)
console.log(6.28)
console.log(true)

console.log("I am Amy")
console.log(30)
console.log(5.5)
console.log(true)

console.log("i am Amy".length)*/

/*console.log("hello world".toUpperCase())
console.log("hello world".toLowerCase())
console.log("hello world".trim())

console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

var paragraph = "the best marvel film is ant man.";

var searchterm = "man"

console.log("The Index Of the first" + searchterm + "from the end" + paragraph.lastIndexOf(searchterm))

console.log("hi my name is amy".search ("amy"))
console.log("hi my name is amy".lastIndexOf("amy"))
console.log("hi my name is amy".slice("hi"))
console.log("hi my name is amy".substring(5,10))
console.log("hi my name is amy".substr(2,8))
console.log("hi my name is amy".replace("amy", "Amy"))
console.log("hi my name is amy".concat(" and i am awesome"))*/

/*console.log("All Around the World".substr(7,1).toUpperCase())

console.log("All Around the World".toUpperCase().charAt(7))*/

/*let name = "Amy";
console.log(name);
var surname = "Roberts";
console.log(surname);

let age = 30;
console.log(age);

const DOB = "05/09/1988";
console.log(DOB);


let favouritedrink = "coffee"
console.log(`my favourite drink is ${favouritedrink}`)*/


/*let name = "Amy"
console.log(`Hi I am ${name}`)

let age=30
console.log(`I am ${age}`)

let colour ="Red"
console.log(`My favourite colour is ${colour}`)*/

/*let space1 = "x";
let space2 = " ";
let space3 = "o";
let space4 = "o";
let space5 = " ";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = "x";

console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space5} | ${space4} | ${space4} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space9} | ${space7} | ${space8} `)
console.log("   |   |   ")

let row1 = "space1"+"space2"+"space3"

if (row1 == "x" && row1 == "o") {
    console.log("winner")
}

else {
    console.log("loser")
}

const naughtsAndCrosses = (space1, space2, space3, space4, space5, space6, space7, space8, space9) =>{
    console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space5} | ${space4} | ${space4} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space9} | ${space7} | ${space8} `)
console.log("   |   |   ")
}

naughtsAndCrosses("0", "x", " ", "0", " ", "x", " ", "0", "x")*/

/*let name = "Amy"

if (name = "Amy")
{
    console.log("your name is Amy")
}
else if (name == "Scarlett") {
    console.log("your name is Scarlett")
}
else {
    console.log("what is your name?")
}


let myNumber = 5;

if (myNumber == 5) {
    console.log(myNumber)
}
else {
    console.log("your number is wrong")
}*/

/*if(1=== '1') {
    console.log(true)
}
else {
    console.log(false)
}

if (i= '1') {
    console.log(true)
}
else {
    console.log(false)
}*/

/*const age = 18;
let country = UK
if (age > 17) {
    console.log("I can serve you")
}
else {
    console.log("You aren't old enough")
}*/


/*let password = ("millie05")
let length = password.length

if (length < 8 ) {
    console.log("password to short")
}
else {
    console.log("password accepted")
}

/*let num = (11)

if (num % 5 ==0 || num % 3 ==0) {
    console.log("this number is divisible by 3 or 5")
}
else{
    console.log("this number is not divisible by 3 or 5")
}*/


/*let num = (35)

if (num % 3 ==0 || num % 5 ==0) {
    console.log("fizz")
}
else{ 
    console.log("buzz")
}*/

/*let time = (10)
placeOfWork =("I am in work")
TownOfHome = ("I am commuting")



if (time < 8 || time > 8) {
    console.log("I am in work")
}
else{
    console.log("I am commuting")
}*/

/*var number = "1001";
var items = number .split( "" );
var isPalindrome = items .join( "" ) === items.reverse() .join( "" );

if(isPalindrome) {
    console.log("number is palindrome");
}
else {
    console.log("number is not palindrome");
}*/
/*const sayHi = () => {
    console.log(`hello` ${name}`);
}
sayHi();

/*const cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawing ${amount} from account number ${accnum}`)
}
cashWithdrawal(300, 50449921);
//cashWithjdrawal(30, 50449921);
//cashWithdrawal(200, 50447921);*/

/*const drinksOrder = (size, typeOfDrink) => {
    console.log(`ordering:${size} ${typeOfDrink}`)
}

drinksOrder("large", "latte")
drinksOrder("small", "cola")*/

/*const addUp = (num1, num2) => {
    return num1 + num2
}
let answer = addUp(4,5)

console.log(addUp(answer, 5))*/

/*const factorial = (n) => {
    if ((n === 0) || (n === 1)) { return 1;
    } 
    else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));*/

   /* var actualPin = 1234;
    var balance = 200;
    
    const pinValidation = (actualPin, enterPin) => {
        if(actualPin == enterPin) {
            return true;
        }
        else {
            console.log("Please check PIN and try again.")
            return false;
        }
    }
    
    const balanceChecker = (balance, withdrawalAmount) => {
        if(balance >= withdrawalAmount) {
            return true;
        }
        else {
            console.log("wrong PIN, please try again.")
            return false;
        }
    }
    
    const myATM = (enterPin, withdrawalAmount) => {
        if(pinValidation(actualPin, enterPin) && balanceChecker(balance, withdrawalAmount)) {
            console.log(`Amount dispensed £${withdrawalAmount}`)       
        }
        else {
            console.log("Amount requested exceeds available balance, please try again.")
        }
    }
    
    myATM(1243,100);*/

/*let favouriteColours = [`red`, `black`, `purple`];
favouriteColours.push("blue");
console.log(favouriteColours);

/*const multiply = (num1,num2) => {
    return num1*num2;}
    console.log(multiply(2,3));

let person= {
    name: "Amy",
    age: 30,
    favouriteDrink:["coffee", "water", "rum"]
};
person[`favebiscuits`] = [`cookies`, `chocolate`]
person[`faveSongs`] = [`pink`, `greatest show man`]
console.log(person);*/

/*let person = {
    name: "Amy",
    age: 30,
    favouriteDrinks: [`water`, `coffee`, `rum`]
    friendlyGreeting () {
        return "hi, how are you?" },
    meanGreeting () {
        return "not you, go away" }
    }*/


     /*let rabbit = {
         name: "sherlock",
         colour: "black and white",
         ears: "uppy"

         bunHop () {
             return "sherlock is hopping"}
        bunChew () {
            return "sherlock is chewing"}
     }
     console.log("bunHop")*/




     /*for(i = 9; i >= 0;i--) {
         console.log(i)
     }*/

     
     


     
/*let favouriteFilms = [`nightmare before christmas`, `the greatest showman`, `van helsing`];
favouriteFilms.push("beauty and the beats", "the rocky horror picture show");
for (FilmIndex = 0; FilmIndex < favouriteFilms.length; FilmIndex++) {
    console.log(favouriteFilms[FilmIndex])
}*/



     


     
    
    






































