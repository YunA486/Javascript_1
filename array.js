// 배열 : 순서가 있는 리스트

let days = ["mon", "tue", "wed"];

// days[1] = '화요일'

days.push("thu");
days.unshift("sun");

console.log(days);

for(let index = 0; index < days.length; index++){
    console.log(days[index]);
}

console.log('-----------')

for(let day of days){
    console.log(day);
}