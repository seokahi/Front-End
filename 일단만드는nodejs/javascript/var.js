var hello = "hello";
var hello = "hello hello";
//이게 가능 => 같은 변수를 선언하는게 위험 잘못된 코드를 작성할 수 있음..
// if (true) {
//     var hello = "hello hello";
//     //중괄호 안에 있는 hello는 function scope 가 아니기 때문에 위의 var가 hellohello로 바뀜.
// }
// function sayHello() {
//     var hello = "helo hello"; //이건 function scope안에 있음
//     console.log(hello); 
// }
sayHello();
console.log(hello);