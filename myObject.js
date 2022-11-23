let me = {
    name: 'Alyona',
    residency: 'Lviv',
    gender: 'female',
    age: 27,
    currentOccupation: 'unemployed',
    desiredOccupation: 'front-end developer',
    favoriteDogBreed: 'labrador',
    missingProperty: 'imagination',
    introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.desiredOccupation}`);
    },
    describeMysels(){
    console.log(`I'm ${this.name} and I don't have ${this.missingProperty}`);
    }
    }
    
    me.introduce();
    me.prognose();
    me.describeMysels();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyself = me.describeMysels.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyself, 3000); 