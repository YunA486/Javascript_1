// 논리 연산자

// ||(OR) : 여러 개 중 하나라도 true면 true, 즉 모든 값이 false 일때만 false를 반환
// &&(AND) : 모든 값이 true면 true 즉 하나라도 false면 false를 반환
// !(NOT) : true면 false, false면 true

const name = "Mike";
const age = 30;

// OR
if(name === 'Tom' || age > 19){
    console.log('통과');
}

// AND
if(name === 'Mike' && age > 19){
    console.log('통과');
} else{
    console.log('돌아가.');
}

// NOT

// const ages = prompt('나이가..?');
// const isAdult = age > 19;

// if(!isAdult){
//     console.log('돌아가..');
// }

// 우선순위
// AND가 OR보다 높음

// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const names = 'Jane';
const isAdults = true;

if(gender === 'M' && (names === 'Mike' || isAdults)){
    console.log('통과');
}else{
    console.log('돌아가.');
}