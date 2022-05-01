// 반복문
// 동일한 작업을 여러번 반복

for(let i = 0; i <= 10; i ++){
    console.log(i);
}

console.log('----------------')

let j = 0;

while(j<10){
    console.log(j);
    j++;
}

console.log('----------------')

// while(true){    // true는 무한반복
//     let answer = confirm('계속 할까요?');
//     if(!answer){
//         break;
//     }
// }

console.log('----------------')

for(let i = 0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i);
}