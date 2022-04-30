// 형변환

// String() -> 문자형으로 변환
// Number() -> 숫자형으로 변환
// Boolean() -> 불린형으로 변환

// const mathScore = prompt("수학 점수는?");
// const engScore = prompt("영어 점수는?");
// const result = (mathScore + engScore) / 2;

// console.log(result);

// prompt로 입력 받은 값은 문자열
// 90, 80 입력하면 170이 아니라 9080으로 됨
// 나누기는 자동 형변환 됨

const cmathScore = 90;
const cengScore = 80;
const cresult = (cmathScore + cengScore) / 2;

console.log(cresult);

// String()
// 문자열로 변환 됨
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

// Number()
console.log(
    Number("1234"),
    Number(true),   // 1
    Number(false),   // 0
    Number(null),   // 0
    Number(undefined)   //NaN
)
// 주의사항
// Number("1234sdafkls") -> NaN
// Number("문자")   -> NaN
// Number(0) -> false
// Number('0')  -> true
// Number('')   -> false
// Number(' ')  -> true

// Boolean()
// fasle : 숫자0, 빈 문자열('', ""), null, undefined, NaN

// true
console.log(
    Boolean(1),
    Boolean(123),
    Boolean("javascript")
)

// false
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)
