for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

for (const key in loggedInUser) {
console.log(key);
console.log(loggedInUser[key]); 
}

let isFinished = false;

while (!isFinished) {
   isFinished = confirm('Do you want t quit?');
}

console.log('Done');