// 함수 선언문, 표현식
// 함수 선언문 : 어디서든 호출 가능, 더 자유롭고 편함

// 함수 표현식
// showError();

// let showError = function(){
//     console.log('error')
// }
// -> 실행 안됨

// 함수 선언문
showError2();

function showError2(){
    console.log('error')
}

// 화살표 함수
let showError3 = () => {
    console.log("error");
}

const sayHEllo = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

const add = (num1, num2) => {
    num1 + num2;
}
// -> const add = (num1, num2) => num1 + num2;
