// 1.
var petArray = ["cat", "cow", "dog"];

// 2.
console.log(petArray[1]);

// 3. 
petArray.push("sheep");

// 4. 
var numberOfPets = petArray.length;

console.log(numberOfPets);

// 5. 
var catObject = {
    name: "Kim",
    colour: "brown",
    age: 4 
}

// 6. 
console.log(catObject.age);

// 7. 
var catArray = [ 
    {
        name: "Kim",
        colour: "brown",
        age: 4 
    }
]

// 8. 
for(var index = 0; index < catArray.length; index++) {
    console.log(catArray[index].name);
    console.log(catArray[index].colour);
    console.log(catArray[index].age);
}

// 9. 
function logToConsole(testArgument) {
    console.log(testArgument);
}

// 10.
logToConsole("donkey");