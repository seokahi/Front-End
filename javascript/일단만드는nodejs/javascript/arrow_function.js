const foo = () => {
    console.log("arrow function");
}
//위와 동일
// funtion foo() {
//     console.log("arrow function");
// }

//x가 들어왔을 때 x를 반환
const foo2 = (x) => {
    return x;
}
//바로 return 시 이렇게 적어도 됨. 단, 여러 줄일 땐 중괄호 사용
// const foo2 = (x) =>x;

const foo3 =(x,y) =>x+y;

const foo4 =(x,y) =>{
    console.log("2줄 이상");
    return  x+y;
}
foo();
conosole.log(foo2(3));
conosole.log(foo3(1,5));