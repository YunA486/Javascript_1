const name = "Mike";    // 문자형 String
const age = 30;

// String 사용방법 3가지
const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";    // '를 써야 될 때는 ""로 감싸기
console.log(message)
const message2 = 'I\'m a boy.'; // \쓰면 ''안에 ' 인식
console.log(message2)

const message3 = `My name is ${name}`;  // `는 변수를 쓸 때 사용, "", '' 사용하면 변수 그대로 출력
console.log(message3)

const message4 = `나는 ${30+1}살 입니다.`;  // 표현식도 가능
console.log(message4)

const first = "나는 ";
const second = " 입니다.";

console.log(first + name + second); // 문자열 합치기

console.log(first + age + "살" + second);   // 문자열 숫자형 합치면 숫자도 문자열로 바뀜

// -----------------------------------
// 숫자형

const PI = 3.14;

console.log(1 + 2);     // 더하기
console.log(10 - 3);    // 빼기
console.log(3 * 2);     // * 곱하기
console.log(6 / 3);     // / 나누기
console.log(6 % 4);     // % 나머지

const x = 1/0;      // Infinity값 뜸
console.log(x);

const y = name/2;   // NaN = Not a Number
console.log(y);

// Boolean

const a = true; // 참
const b = false;    // 거짓

console.log(name == 'Mike') // true
console.log(age > 40)   // false

// null 과 undefined

let ages;   // undefined : 변수를 선언만 하고 값을 넣지 않으면 생김
console.log(ages)

let user = null;    // null : 존재하지 않음
console.log(user)

// typeof 연산자

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);   // object형 / null은 객체가 아님
console.log(typeof undefined);