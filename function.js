// 함수

// 유지보수 쉬움.

// function showError(){
//     alert('에러가 발생했습니다. 새로고침 해주세요.');
// }

// showError();

// 매개변수가 있는 함수

let msg = `Hello`;  // 전역 변수 (global varable)
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    // let msg = `Hello`;  // 지역 변수 (local varable)
    if(name){
        msg += `, ${name}`;
    }
    console.log('함수 내부')
    console.log(msg);
}

// sayHello(); // undefined
sayHello('Mike');
console.log('함수 호출 후')
console.log(msg);

// 전역 변수와 지역 변수

let sgm = "welcome";
console.log(sgm)

function sayHelloo(name){
    let sgm = "Hello"
    console.log(sgm + ' ' + name);
}

sayHelloo('Mike');
console.log(sgm);

// 지역변수 사용을 추천

function sayHelloFriend(name = 'friend'){
    // let newName = name || 'friend';
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHelloFriend();
sayHelloFriend('Jane');

// return 으로 값 반환

function add(num1, num2){
    return num1 + num2;
}

const result = add(2, 3);
console.log(result);

// 함수
// 한번에 한작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// showError(에러를 보여줌), getName(이름을 얻어옴), createUserData(유저데이터 생성), checkLogin(로그인 여부 체크)