// const firsName = 'Nik'
// const lastName = 'Kovalenko'
// const age = 30
// const height = 180
// const gender =  'man'

// console.log(firsName, lastName, age, 'y.o', height, gender)

// for (let i = 1; i <= 10; i++){
//     console.log(`Пройден ${i} круг`)
// }

// const number = [1,2,3,4,5]

// // console.log(number [1]) 

// for (let i = 0; i < number.length; i++){
//     console.log(number [i] + 1)
// }



// const users = ['John', 'Alex', 'Ann', 'Max']

// function checkUsers(array, item){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === item) {
//             return `Hello`
//         }
//     }
// }

// console.log(checkUsers(users, 'Alex'))

// const numbers = [5, 12, 8, 25, 3, 15]

// function checkNumbers(array, item){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > 10) {
//             return `${item}`
//         }
//     }
// }

// console.log(checkNumbers(numbers, 12))

// function sumNumbers(firsNumber, lastNumber){
//     return firsNumber + lastNumber

//     }
// console.log(sumNumbers(5, 10))

// function calculate(firstNumber, lastNumber, operator) {
//     if (operator === 'plus') {
//         return firstNumber + lastNumber
//     }
//     if (operator === 'minus') {
//         return firstNumber - lastNumber
//     }
//     if (operator === 'multiply') {
//         return firstNumber * lastNumber
//     }
//     if (operator === 'divide') {
//         return firstNumber / lastNumber
//     }
// }

// const result1 = calculate(2, 3, 'minus')    
// const result2 = calculate(5, 7, 'plus')   
// const result3 = calculate(4, 6, 'multiply')
// const result4 = calculate(8, 2, 'divide') 

// console.log(result1, result2, result3, result4)


const user = {
    name: 'Nikita',
    age: 24,
    city: 'Moscow',
};

console.log(user)

const users = [
    { 
        name: 'John', 
        age: 30, 
        isAdmin: true
    },
    { 
        name: 'Alex', 
        age: 25, 
        isAdmin: false
    },
    {
        name: 'Ann', 
        age: 22, 
        isAdmin: false
    },
    { 
        name: 'Max', 
        age: 27, 
        isAdmin: true
    },
    { 
        name: 'Kate', 
        age: 20, 
        isAdmin: false
    }

    
]

function sayHello(userName) {
    return `Hello ${userName}`;
}

console.log(sayHello('Max'));

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUsersCount++;
    }
}

console.log(`Количество простых пользователей: ${simpleUsersCount}`);