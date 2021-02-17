let object = { name: 'RajiniKanth', age: 33, hasPets: false };
let keys = { name: 'RajiniKanth', age: 25, hasPets: true };
let isroObj = { name: 'ISRO', age: 35, role: 'Scientist' };
let arr = ['GUVI', 'I', 'am', 'a geek'];
let arr1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
let array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
var expected1 = { foo: 6, bar: 5 };
var actual1 = { foo: 5, bar: 6 };

var students = [
    { name: 'Siddharth Abhimanyu', age: 21 }, { name: 'Malar', age: 25 },
    { name: 'Maari', age: 18 }, { name: 'Bhallala Deva', age: 17 },
    { name: 'Baahubali', age: 16 }, { name: 'AAK chandran', age: 23 }, { name: 'Gabbar Singh', age: 33 }, { name: 'Mogambo', age: 53 },
    { name: 'Munnabhai', age: 40 }, { name: 'Sher Khan', age: 20 },
    { name: 'Chulbul Pandey', age: 19 }, { name: 'Anthony', age: 28 },
    { name: 'Devdas', age: 56 }
];
function returnMinors(arr) {
    let minors = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].age < 20) {
            minors.push(arr[i].name);
        }
    }
    return minors;
}


var securityQuestions = [
    {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
    },
    {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
    },
    {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
    }
];

function chksecurityQuestions(securityQuestions, question, ans) {
    for (i in securityQuestions) {
        if (securityQuestions[i].question === question && securityQuestions[i].expectedAnswer === ans) {
            return true;
        } else {
            return false;
        }
    }
}
//Test case1:
var ques = 'What was your first pet’s name?';
var ans = 'FlufferNutter';

//Test case2:
var ques1 = 'What was your first pet’s name?';
var ans1 = 'DufferNutter';

function assertObjectsEqual(actual, expected, testName) {
    return JSON.stringify(actual) === JSON.stringify(expected) ? 'Passed' :
        `FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;
}

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];

    for (let i = 0; i < array.length; i++) {
        let newObject = {};
        for (let j = 0; j < array[i].length; j++) {
            let key = array[i][j][0];
            let value = array[i][j][1];
            newObject[key] = value;
        }
        tranformEmployeeList.push(newObject);
    }
    return tranformEmployeeList;
}

function fromListToObject(arr) {
    var newObject = {};
    for (i = 0; i < arr1.length; i++) {
        newObject[arr1[i][0]] = arr1[i][1]
    }
    return newObject;
}

function transformFirstAndLast(arr) {
    var newObject = {};
    newObject[arr[0]] = arr[arr.length - 1];
    return newObject;
}
function printAllValues(obj) {
    return Object.values(obj);
}

function printAllKeys(obj) {
    return Object.keys(obj);
}
function convertListToObject(obj) {
    return Object.entries(obj);
}

console.log("printAll values: " + printAllValues(object));
console.log("printAll keys: " + printAllKeys(keys));
console.log("convert List To Object:" + convertListToObject(isroObj));
console.log(transformFirstAndLast(arr));
console.log(fromListToObject(arr1));
console.log(transformEmployeeData(array));
console.log(assertObjectsEqual(expected, actual, 'mytest'));
console.log(assertObjectsEqual(expected1, actual1, 'mytest'));
console.log(chksecurityQuestions(securityQuestions, ques, ans));
console.log(chksecurityQuestions(securityQuestions, ques1, ans1));
console.log(returnMinors(students));