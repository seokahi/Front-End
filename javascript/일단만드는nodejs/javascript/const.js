const hello = "first hello";
// hello = "second hello";

//hello = "second hello"; 에러
if(true) {
    //중괄호 스코프를 가짐,
    const hello ="second";
    console.log(hello); //second
}

console.log(hello);//first hello
