// 객체, 메소드

let boy = {
    name: "Mike",
    showName: function(){
        console.log(this.name)
    }
};

let man = boy;
// man.name = "Tom"
boy = null;
man.showName();

console.log('----------------');

let girl = {
    name: "Nike",
    sayThis: () => {
        console.log(this);
    }
};
// 이 this는 girl을 가리키는게 아니라 윈도우 전역변수를 가리킴
// 객체 메소드를 작성할 때는 화살표 함수로 작성 하지 않는게 좋음

girl.sayThis();