// const person ={ name: "Jack William", age: 23, job: "student", gfName: "Rose shetty"} 
 
// //    const gfName = person.gfName;

// //   const job = person.job;

// const { job, salary, gfName } = person;


// console.log(gfName, job, salary);

// const friends = ['sakib khan', 'shank shanon', 'shahrukh Khan', 'salman Khan', 'amir khan', 'john Ebraham'];
// const [chotoFriend, boroFriend, girlFriend, ...restFriends] = friends;
// console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'pti',
        leader: 'Sk Palas'
    }
}

const { leader } = complexObject.info;
console.log(leader);