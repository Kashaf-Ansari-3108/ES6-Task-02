// 1. write a function which returns array. call the function and destructure array values and print the value
// function myArray(){
//     return [1,2,3,4,5];
// }

// let arr = myArray();
// [no1,no2,no3,no4,no5] = arr;
// console.log(`${no1},${no2},${no3},${no4},${no5}`);



// 2. Make a car object with model, year, color. display all the values by destructuring
// let car = {
//     model: "Toyota",
//     year: "2002",
//     color:"Red"
// }
// let {model,year,color} = car;
// console.log(model);
// console.log(year);
// console.log(color);



// 3. use three variable name, greeting and display value using template literals
// let name = prompt('Enter your Name...');
// let greeting = 'Welcome!';
// let message = 'Congratulations on being part of our dynamic team!';
// console.log(`Here's a warm ${greeting} to you ${name} 
// ${message}`);


// 4. use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array
// const array = [1,2,3,4,5,6,7,8,9,10];
// let [no1,no2,no3,...rest] = array;
// console.log(no1);
// console.log(no2);
// console.log(no3);
// console.log(rest);



//5. if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"
// let speed = prompt("What's your car speed?");
// let carSpeed = (speed < 80)? "slow":
//                (speed > 120)? "fast": "moderate"
// console.log(`Car speed is ${carSpeed}`);