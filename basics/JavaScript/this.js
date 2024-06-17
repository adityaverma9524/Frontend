'use strict' 
/** => this inside function refers to the object to which that method depends
 * not to the windows(global object)*/ 
console.log(this);

function chechThis() {
    console.log(this);
}

const checkArrow = () => {
    console.log(this);
}

chechThis();
checkArrow();

const user1 = {
    userName: 'John',
    userAge: 12,

    work: function() {
        console.log(this);
    }
};

user1.work();

const user2 = {
    userName: 'Harry'
};

user2.work = user1.work;

// console.log(user2);
user2.work();
