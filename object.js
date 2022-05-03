// 객체

const superman = {
    name : 'clark',
    age : 30,
}

console.log(superman.name);
console.log(superman['age']);

superman.hairColor = 'black';
superman['hobby'] = 'football';
delete superman.age;

console.log(superman);


function makeObject(name, age){
    return{
        name,
        age,
        hobby : 'football'
    }
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike)
console.log('birthday' in Mike)

function isAdult(user){
    if(!('age' in user) ||  // user에 age가 없거나
            user.age < 20){ // 20살 미만이거나
        return false;
    }
    return true;
}

const Mikel = {
    name : 'Mike',
    age : 30
};

const Jane = {
    name : "Jane"
};

console.log(isAdult(Jane))

// 객체 for ... in

const Nike = {
    name : "Nike",
    age : 30
};

for(x in Nike){
    console.log(Nike[x])    // Nike['age']
}