// 비교 연산자

console.log(10>5);
console.log(10 == 5);   // 동등 연산자
console.log(10 != 5);

// 동등 연산자
const a = 1;
const b = "1";

console.log(a == b);    // True
console.log(a === b);   // 타입까지 비교, 되도록 이 연산자 사용

// 조건문

// if, else if, else

const age = 19;

if(age > 19){
    console.log('환영합니다.');
}else if(age === 19){
    console.log('수능 잘 치세요!');
}else{
    console.log('안녕히 가세요.');
}