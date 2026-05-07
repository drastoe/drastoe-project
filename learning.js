// Variables
var name = 'Olamide'
console.log(name)

let age = '24 35 56'
console.log(age)

const country = 'Canada'
console.log(country)

// Data types
// strings
let baskellballName ='Kobe Bryant'
console.log(baskellballName)

// numbers
let code= 234;
console.log(code)
let price='2.34'
console.log(price)

// boolean
let IsGoat= true
console.log(IsGoat)

// undefined
let y;
console.log(y)

// null
let x = null
console.log(x)

// concatenation
const firstName='Tobiloba'
const lastName='Thomas'
const fullname = firstName+" "+lastName
console.log(fullname)

// Template literals
const Name ='Adeyemi'
const surname='Thomas'
const wholename = `${Name} ${surname}` 
console.log(wholename)

// operators
let a=10; let b=5;

let sum= a+b;
let sub= a-b;
let mult= a*b;
let div= a/b;
let expo= a**b;
let mod = a%b;
console.log(sum)
console.log(sub)
console.log(mult)
console.log(div)
console.log(expo)
console.log(mod)

// comparison operators
let c=5; let d="5"

console.log(c==d);
console.log(c===d);
console.log(c>35);
console.log(c<35);
console.log(c<=35);
console.log(c>=35);

let IsLoggedin = true;
let haspermission= false;

console.log(IsLoggedin && haspermission);
console.log(IsLoggedin || haspermission);

let time = 9;

if (time <  9){
    console.log("It is Night")
} else {
    console.log("It is morning") 
}
const old = 65-100;
if (old=>65) {
    console.log('you are bloomer')
} else {
    console.log("you are a millenial")
}

let no = 80;
if (no=80) {
    console.log("You are a grade A student")
} else(no<=75)
    console.log("You are a grade B student")

let p="Greeting"

switch (p) {
    case 'paragraph':
        console.log('It is a condition instruction')
        break;
        case 'Greeting': 
        console.log('I dont know what it is');
    default:
        console.log("Any other instruction")
}

let number = 37;
switch (number) {
    case 70-100:
        console.log('You are a grade A student')
        break;
        case 60-69:
            console.log('You are a grade B student')
        case 50-59:
            console.log('You are a grade C student')
            case 40-49:
                console.log('You are a grade D student')
                case 0-39:
                    console.log('You are a grade F student')
    default:
console.log('Any other number')
}