// 연산자

// + 더하기, - 빼기, * 곱하기 / 나누기 % 나머지

// % 나머지 연산자
// 홀수 : X % 2 = 1
// 짝수 : Y % 2 = 0

// 어떤 값이 들어와도 5를 넘기면 안될 때
// X % 5 = 0 ~ 4 사이의 값만 반환

// 거듭제곱

const Num = 2 ** 3;
console.log(Num);   // 8

// 우선순위
// *, / > +, -

// 줄여 쓰기
let num = 10;
// num = num + 5;
num += 5;   // 15
// +=, -=, *=, /=, %=

// 증가 연산자, 감소 연산자

num++;
num--;

let result = num++; // 증가시키기 전 값을 result에 넣음
result = ++num; // 증가 시킨 값을 result에 넣음

console.log(result);