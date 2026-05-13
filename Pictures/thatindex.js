let age="36"
console.log(age)

// strings
let measurement ='Taperule'
console.log(measurement)

let profession="Doctor"
console.log(profession)

let J = 'Alpabets'
console.log(J)

// null
let y = null;

// undefined
let x;
console.log(x)



// number
let numbers="1,2,3,4,5"
console.log(numbers)

let no=2;
let price=3.55
console.log(no)
console.log(price)

// template literals
let firstname = "Mirabel"
let surname = "Cosmos"
const fullname = `${firstname} ${surname}`
console.log(fullname)

// boolean
let isGoat= true
console.log(isGoat)

// comparison operators
let Haspermission= false
let IsLoggedin =true
console.log(IsLoggedin || Haspermission)
console.log(IsLoggedin&&Haspermission)

// operators
let m= 25;
let n= 10;

let mult = m*n;
console.log(mult)

let sub= m-n;
console.log(sub)

let sum = m+n;
console.log(sum)

let expo= m**n;
console.log(expo)

let mod = m%n;
console.log(mod)

let div = m/n;
console.log(div)

// if, else, else if conditions
let temperature = 30;
if (temperature<=30) {
    console.log("it is cold");
}
let agetag=16;
if (age<16) {
    console.log("you can vote")
} else {
    console.log("you cannot vote")
}
let isRaining= true;
if (isRaining = false) {
    console.log("Take an umbrella")
} else {
    console.log("Don't take an umbrella")
}

let grade=85;
if (grade<=70) {
    console.log(" grade A student")
} else if(grade=>80){
    console.log("grade B student")
} else if(grade=>70){
console.log("grade C student")
} else{
    console.log("grade D student")
}
// switch expression
let day= "Sunday"
switch (day) {
    case "Monday":
        console.log("Start of the week")
        break;
    case "Friday":
        console.log('Weekend is near')
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend is here")
                break;
    default:
    console.log("Any regular day")
}

// for loop (to know how many times we want to loop)
// count from 1 to 5
for (let i=1; i <= 5; i++) {
    console.log("Count:"+i);   
}

// for even numbers
for(let i=2; i<=10; i+=2){
    console.log(i)
}
// count from 10 to 1
for(let i=10; i >= 1; i--){
    console.log(i);
}
// while loop(we do not know how many times we want to loop)
let i = 2;
while (i < 8) {
    console.log(i);
    i++;
}

// 19 = 7pm
let time= 19
if (time >= 19) {
    console.log("It is night")
} else {
 console.log("It is daylight")   
}
// tenary operators
const Rainy="10";
const Sunny= "9"

const supercede = Rainy > Sunny ? "supercede" : "not supercede";
console.log(supercede);

if (Rainy > Sunny) {
    console.log("It supercede")
} else{
    console.log("Not supercede")
}

let month="Augustr"
switch (month) {
    case 'January':
        console.log('Start of the month')
        break;
        case 'June':
            console.log('Half of the year')
            break;
            case 'December':
                console.log('Last month of the year')
                break;
    default:
        console.log('Any other month')
        break;
}
for(let i = 0; i < 8; i++)
console.log('i');

let house = "8"

if(house === "5"){
    console.log('It is for mubarak')
} else if(house ==="8"){
    console.log('It is for hajia')
} else if(house ==="10"){
    console.log('It is for rasheed')
}else{
    console.log('it is for jubril')
}

let home = '15'

switch (home) {
    case '5':
        console.log('It is for mubarak')
        break;
        case '10':
            console.log('it is for jubril')
            break;
            case '15':
                console.log('it is for rasheed')
                break;
                case '20':
                    console.log('it is for hajia')
                break;
    default:
        console.log('Any other person')
        break;
}
// template literals
let firstName ="Abigail"
let lastName = "Field"
const wholename = `${firstName} ${lastName}`
console.log(wholename)

// string concatetination
let name = "Rasheed"
let surName = "Sanni-Thomas"
const names =name+" "+ surName;
console.log(names)

const arr1=[1,2,3,4];
console.log(arr1);

const arr2 = new Array(5,6,7,8);
console.log(arr2)

const fruit=["apple","Banana","Pawpaw"];
console.log(fruit[2]);
console.log(fruit[0]);

const nums = [1,2,3];
nums.push(4)
nums.unshift(3) 
console.log(nums)

const number=[1,2,3,4];
console.log(number.includes(3))
console.log(number.indexOf(4));
console.log(number.find((n) => n > 3));
console.log(number.filter((n)=>n >1))

// mapping method
const old = [12, 8, 15];
const result= old.map((n)=> n *2);
console.log(result)

const num = [1,2,3,4];
let answer= num.filter((n)=> n>2);
console.log(answer)

const btn = document.getElementById("btn");
const not = document.getElementById("not");

btn.addEventListener("click" , () =>{
    not.style.color="blue";
    not.textContent ="form submitted"
});

const tread=document.getElementById("tread");
tread.addEventListener("mouseover" ,() =>{
    tread.style.backgroundColor ="green"
    tread.style.color ="white";
});