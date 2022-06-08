const obj ={a:1,b:2};
const array = [1,2];
const [one,two] =array;
// 이게 번거로워서 비구조화 할당을 만듬
// const a=  obj.a;
// const b = obj.b;


// console.log(a);
// console.log(b);

//이렇게 하면 a,b와 동일한 키값을 가져오게 됨
const {a,b} = obj;


console.log(a);
console.log(b);

console.log(one);
console.log(two);

