//pending 대기
//pulfilled 이행
// rejected 실패
// 1. pedning 프로미스 호출되면 나오는 상태
// function sayHello() {
//     return new Promise((resolve,reject) => {
//         //sayhello가 실행되고 난 다음  어떤 태스크 진행할지 resolve(성공) 와 reject(실패) 로 구분 지어 만듬
//         const hello = "hello";
//         resolve(hello);
//     });
// }

// sayHello().then((resolveData)=> {
//     console.log(resolveData);
// })

//에러난경우
// function sayHello() {
//     return new Promise((resolve,reject) => {
//         //sayhello가 실행되고 난 다음  어떤 태스크 진행할지 resolve(성공) 와 reject(실패) 로 구분 지어 만듬
//         reject(new Error());
//         });
// }

// sayHello().then((resolveData)=> {
//     console.log(resolveData);
//     return resolveData;
// }).then((resolveData)=> {
//     console.log(resolveData);
// })
// .catch((error) => {
//     console.log(error);
// })

// function sayHello() {
//     return new Promise((resolve,reject) => {
//         const hello = "hello";
//         resolve(hello);
//         });
// }

// sayHello().then((resolveData)=> {
//     console.log(resolveData);
//     return resolveData;
// }).then((resolveData)=> {
//     console.log(resolveData);
// })
// .catch((error) => {
//     console.log(error);
// })

//then 많이 쓰면 복잡 => async await이 나옴

function sayHello() {
    return new Promise((resolve,reject) => {
        const hello = "hello";
        resolve(hello);
        });
}

async function test () {
    // 비동기라 밑에 있는게 바로 실행될 수 있기 때문에 await을 써서 동기를 해줌
    const hello1 = await sayHello();
    console.log(hello1);
}

test();