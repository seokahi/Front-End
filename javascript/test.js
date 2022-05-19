class 소시지 {
    constructor(taste1,el) {
        this.taste1 = taste1;
        this.taste2 - el;
    }

    taste = function() {
        console.log(`${this.taste1}와 ${this.taste2}맛이 난다!`);
    }
}

class 소시지확장 extends 소시지 {
    constructor() {
        super();

    }
    tasteSossage= function() {
        console.log(`${this.taste1}와 ${this.taste2}맛이 난다!`);
        console.log(`불맛이나여`);
    }
    }


    let tastes = new 소시지("파","아아");
    let tastess = new 소시지확장();