// 자료구조와 알고리즘
// 자료구조 : 데이터를 담는 구조
// 알고리즘 : 문제를 해결하는 방법(절차)
// 빅오(O) : O(1), O(n), O(N**2), O(N**3) 
//           시간복잡도(시간), 공간복잡도(메모리)

const { arrayBuffer } = require("stream/consumers");

// while (1 < a) {
//     s += a
//     a++
// }

// while (1 < a) {
//     s += a
//     a++
//     while (1 < b) {
//         s += b
//         b++
//     }
// }


// 몸풀기 2문제

// https://codingdojang.com/scode/393?langby=javascript#answer-filter-area
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법

Array(10);
let x = Array(10)
x[2] = null
x[3] = undefined
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index)=>value+index);
'.'.repeat(10);
'.'.repeat(10).split('.');
'.'.repeat(9).split('.');
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index)=>value+index)+'';
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8');
//'128148123881'.split('8')
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8').length - 1;
(Array(10000).fill(1).map((value, index)=>value+index)+'').split('8').length - 1; // 4000개, 답
//'128148123881'.split(/8/g)


///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}

for (let i = 0; i < s.length; i++) {
    console.log(s[i+1] - s[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < s.length; i++) {
    console.log(s[i] - s[i-1]);
}

s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}
arr

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])

// const zip = a => a.map((v, i) => [v, i]);

let zip = (a, b) => a.map((value, index)=>[value, b[index]]);
zip = (a, b) => a.map((v, i)=>[v, b[i]]);


zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


// [1, 3, 4, 8, 13, 17, 20]
// [1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
// [3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(s.slice(0, s.length-1), s.slice(1))

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
    }
    return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]

//////// 쉬운 풀이 /////////

s  = [1, 3, 4, 8, 13, 17, 20];

zip = (a, b) => a.map((v, i)=>[v, b[i]]);
pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)

// 몸풀기 끝 //



// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

class Stack {
    constructor(){
        this.arr = []
        this.length = 0
    }


    push(data) {
        this.arr.push(data)
        this.length += 1
    }

    pop(index) {
        if (index > this.arr.length - 1){
            this.length -= 1
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        this.length -= 1
        return result
    }
    top (){
        return this.arr[this.arr.length-1]
    }

    bottom(){
        return this.arr[0]
    }

    display(){
        return this.arr
    }
}

let S = new Stack()
S.push(10)
S.push(20)
S.push(30)
S.push(40)
S.push(50)
S.push(60)
S.push(70)
S.pop(2)
console.log(S)
console.log(S.length)

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

let list = {
    head:{value:12,next: {
        value:12,
        next: {
            value:99,
            next:{
                value:37,
                next:null
            }
            }
        }
    }
}

console.log(list.head.value);

list = {
    head: {
        value:90,
        next: {
            value:2,
            next: {
                value:77,
                next : {
                    value:35,
                    next: {
                        value:21,
                        next : null
                    }
                }
            }
        }
    }
}

console.log(list.head.next.next.next.value);


class Node {
    constructor(data) {
        this.data = data
        this.next= null
    }
}
노드1= new Node(10);
노드2= new Node(20);
노드3= new Node(10);

노드1.next =  노드2

console.log(노드1.next.data);
class Linkedlist {
    constructor() {
        let init = new Node('init')
        this.head = init
        this.tail=init
        this.데이터수=0
        // this.데이터들 = ''
        this.데이터들=[]
    }

    길이() {
        return this.데이터수
    }
    toString() {
        // return 'helloworld'
        // return '[' + this.데이터들.slice(0, -2) + ']'
        // return '['+this.데이터들.toString()+']'
        let 순회용현재노드 = this.head.next;
        let 데이터들 = ''
        // for(let i=0;i<this.데이터수;i++) {
        //     데이터들 +=`${순회용현재노드.data}, `
        //     순회용현재노드 = 순회용현재노드.next
        // }
        // console.log(this.데이터들.toString());
        return '['+데이터들.slice(0,-2)+']';
        //return '['+this.데이터들.toString()+']'
    }

    fullData() {
        
        return JSON.parse(this.toString());
    }
    append(data) {
        let 새로운노드 = new Node(data);
        this.tail.next= 새로운노드
        this.tail = 새로운노드
        this.데이터수 += 1
        // this.데이터들 += `${data} ,`
        this.데이터들.push(data)
    }

    insert(index,data) {
        let 순회용현재노드 = this.head.next;
        for(let i=0;i<index-1;i++) {
            순회용현재노드 = 순회용현재노드.next
        }

        let 새로운노드 = new Node(data);
        새로운노드.next =순회용현재노드.next
        순회용현재노드.next= 새로운노드
        this.데이터수 +=1
    }
}

l = new Linkedlist()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)

console.log(l.head.next.data);
console.log(l.길이());
console.log(l.tail);
console.log(l.toString());
console.log(l.fullData());
console.log(l.insert(3,1000));
console.log(l.fullData());

//double

// 더블 링크드 리스트의 기본 형태


list = {
    head: null
}

let list1 = {value:12, next:null, pre:null}
let list2 = {value:99, next:null, pre:null}
let list3 = {value:37, next:null, pre:null}
let list4 = {value:2, next:null, pre:null}
list1.next = list2
list2.next = list3
list3.next = list4
list1.pre = list.head
list2.pre = list1
list3.pre = list2
list4.pre = list3
list.head = list1

// list4.pre.pre.value

class Node {
    constructor(data){
        this.data = data
        this.pre = null
        this.next = null
    }
}

class DoubleLinkedList {
    // ... 중략 ...
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        새로운노드.pre = this.tail
        this.tail = 새로운노드
    }
    // ... 중략 ...
}

l = new DoubleLinkedList()
l.append(1)

//클래스 상속
// class Arr extends Array {
//     attack(){
//         console.log('공격!')
//     }
// }
//정렬
let 전 = [199,22,33,12,32,64,72,222,233];
let 후 = []

전 = [199, 22,33,32,64,72,222,233];
후 = [12]

전 = [199,33,32,64,72,222,233];
후 = [12,22]

전 = [199, 33,64,72,222,233];
후 = [12,22,32]

전 = [199,64,72,222,233];
후 = [12,22,32,33]

전 = [199,72,222,233];
후 = [12,22,32,33,64]

전 = [199,222,233];
후 = [12,22,32,33,64,72]

전 = [222,233];
후 = [12,22,32,33,64,72,199]

전 = [233];
후 = [12,22,32,33,64,72,199,222]

전 = [];
후 = [12,22,32,33,64,72,199,222,233]


//선택정렬
let 입력값 = [199,22,33,12,32,64,72,222,233];
let 정렬된배열 =[]
let  길이 = 입력값.length;

for(let i =0;i< 길이;i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값),1);
}

//길이 생략 가능
입력값 = [199,22,33,12,32,64,72,222,233];
정렬된배열 =[]
while(!!입력값.toString()) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값),1);
}

let Arr = [199,22,33,12,32,64,72,222,233];
정렬된배열 =[]

function selectionSort(arr) {
    for (let i=0;i<arr.length;i++) {
        let min_index = i;
        for(let j=i+1;j<arr.length;j++) {
            if(arr[min_index]> arr[j]) {
                min_index=j;    
            }
        }
        let temp =arr[min_index]
        arr[min_index] = arr[i]
        arr[i]= temp
    }
    return arr
}

console.log(selectionSort(Arr));

//삽입정렬
전 = [199,22,33,12,32,64,72,222,233];
후 = []

전 = [199,22,33,12,32,64,72,222,233];
후 = [199]

전 = [199,22,33,12,32,64,72,222,233];
후 = [22,199]

전 = [199,22,33,12,32,64,72,222,233];
후 = [12,22,199]

array = [199,22,33,12,32,64,72,222,233];
정렬된배열 = [];
배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값) 
{
    for (const i in 정렬된배열) {
        if(정렬된배열[i]>삽입값) {
            return i;
        }
    }

    return 정렬된배열.length
}
for(let i=0;i<array.length;i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이들어갈인덱스(정렬된배열,삽입값)
    정렬된배열.splice(인덱스,0,삽입값);
}

console.log(정렬된배열);

입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
정렬된배열 = [];
배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

//병합정렬
입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    let 결과값 = []

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    while (그룹하나.length != 0 && 그룹둘.length != 0){
        if (그룹하나[0] < 그룹둘[0]){
            결과값.push(그룹하나.shift())
        } else {
            결과값.push(그룹둘.shift())
        }
    }

    while (그룹하나.length != 0){
        결과값.push(그룹하나.shift())
    }

    while (그룹둘.length != 0){
        결과값.push(그룹둘.shift())
    }

    return 결과값
    
}

console.log(병합정렬(입력값))