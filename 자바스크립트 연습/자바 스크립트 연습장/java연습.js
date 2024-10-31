const a = 5;  // 보통 const를 기본으로 사용하고 업데이트를 할 변수가 존재 할 경우 let을 사용한다.
const b = 2;  // const로 선언한 변수는 절대 업데이트를 할 수 없다.
const amIFat = null; // null은 아무것도 없다는 뜻 , 자연적으로 발생하지는 않는다. > 의도적으로 값이 없다는 것을 알려주는 상태
let something; // 변수에 아무것도 기입하지 않았기 때문에 undefined를 반환한다, undefined는 공간은 만들어 졌지만 값은 기입되지 않은 상태, 메모리에는 있지만 값은 없다.
let myName = "nico"; 
// const는 바뀌지 않는다. 그렇기 때문에 바뀔 필요가 없는 경우에 const로 변수 선언
// let의 경우애는 변수가 바뀔 가능성을 생각하고 변수를 선언할 때 필요하다.
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+ myName)
console.log(myName);
console.log(something);

myName = "nicolas"; // 위에서 한번 변수가 선언 되었기 때문에 이번에는 let이나 const를 할 필요가 없다. 
console.log("your new name is "+myName);

// 배열에서 아이템 가져오기
const daysOfWeek = ["mon","tue","wed","thu","fri","sat",]; // array
console.log(daysOfWeek);

// 배열에 아이템 추가하기 
daysOfWeek.push("sun");
console.log(daysOfWeek);
 
// Object 만들기
const player = {
    name : "nico",
    points : 10,
    handsome : false,
    fat: true,
};

console.log(player);
player.lastName = "potato";   // const로 만들어 졌지만 Object 내부의 변환은 가능하다.
console.log(player);

// function 만들기
function sayHello(nameOfPerson,age){
    console.log("Hello my name is "+ nameOfPerson+"and I'm "+age+" years old")
};
sayHello('nico',11);
sayHello('Lynn',21);
sayHello('song',23);

// 더하기 계산기 만들기
function plus(a,b){
    console.log(a+b)
};

plus(3,4);

const Hello = {
    name : "nico",
    sayHi : function(otherPersonsName){
        console.log("Hello "+otherPersonsName+" nice to meet you!")
    },
};

Hello.sayHi("lynn");
console.log(Hello.name);

// 종합 계산기
const Calculatoin ={
    plus : function(a,b){
        console.log(a+b)
    },
    minus : function(a,b){
        console.log(a-b)
    },
    multi : function(a,b){
        console.log(a*b)
    },
    divi : function(a,b){
        console.log(a/b)
    },
    spuare : function(a,b){
        console.log(a**b)
    },
};

Calculatoin.plus(3,4);
Calculatoin.minus(10,4);
Calculatoin.multi(99,4);
Calculatoin.divi(15,7);
Calculatoin.spuare(42,5);

// return문

const age = 96;
function KoreanAge(ageForeigner){
    return ageForeigner +2
};
const KrAge = KoreanAge(age);
console.log(KrAge); 


const Calculatoin_1 ={
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    multi : function(a,b){
        return a*b;
    },
    divi : function(a,b){
        return a/b;
    },
    spuare : function(a,b){
        return a**b;
    },
};

const result_1 = Calculatoin.plus(3,4)
console.log(result_1) 

const age1 = parseInt(prompt("How old are you?")) // prompt : 프롬프트로 띄우고 값도 받기 (input역할) , parseInt() 어떤 값이든 숫자로 바꿔주기.
console.log(typeof age1,typeof "123")
console.log(isNaN(age1)) // boolean값을 리턴한다.

if(isNaN(age1) || age1 < 0){
    console.log("please write a real positive number");
} else if(age1 < 18) {
    console.log("You are too young.");
} else if(age1 >= 18 && age1 <=50) {  // and는 && 로 표기 or은 ||로 표기 같음은 === , 다름은 !==
    console.log("Drink a lot");
} else{
    console.log("You can drink");
}

