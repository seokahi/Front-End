let hello = "first";
hello = "second";
// let hello = "second"; 이건 불가능
if(true) {
    //중괄호스코프를 가지고 있음
    let hello = "second hello";
    console.log(hello); //seconde hello
}
console.log(hello); //second