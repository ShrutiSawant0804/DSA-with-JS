let x = 10.2345;

console.log(`Math floor value of ${x} is ${Math.floor(x)}`);
console.log(`Math round value of ${x} is ${Math.round(x)}`);
console.log(`Math ceil value of ${x} is ${Math.ceil(x)}`);
console.log(`Math trunc value of ${x} is ${Math.trunc(x)}`);
console.log(`Math pow value of 8^5 is ${Math.pow(8, 5)}`);
console.log(`Math square value of ${x} is ${Math.sqrt(x)}`);
console.log(`Math maximun value in 71, 52, 84 is ${Math.max(71, 52, 84)}`);
console.log(`Math minimum value in 71, 52, 84 is ${Math.min(71, 52, 84)}`);

console.log(`Generate random number ${Math.random()}`); // it will never go till 1 
console.log(`generate random 4 digit number ${Math.trunc(Math.random()*9999)+1000}`); // 4 digit number (used to genarate OTP)
console.log(`Math toFixed  ${x.toFixed(2)}`); // how manydigit you want after decimal
console.log(`Math absolute value of ${x} is ${Math.abs(x)}`);
console.log(`Math absolute value of -16 is ${Math.abs(-16)}`); // always gives the positive value 


