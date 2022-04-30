// alert : 알려줌

alert('삭제 되었습니다. ');

// prompt : 입력 받음

const name = prompt("이름을 입력하세요.", "김");
// 취소를 누르면 null값이 들어감
// , "김" : 기본값으로 설정 가능(디폴트값)

// alert("환영합니다, " + name + "님");
alert(`안녕하세요, ${name}님, 환영합니다.`);

// confirm : 확인 받음

const isAdult = confirm("당신은 성인 입니까?");
// 확인을 누르면 true, 취소를 누르면 false

// 단점
// 1. 스크립트 일시 정지
// 2. 스타일링 X(위치와 모양을 정할 수 없음, 브라우저마다 다름)