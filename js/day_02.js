// TB = 1024 GB
// GB
// MB
// KB
// B = 8 bytes (64bit)  

// let hk1 = 9;
// console.log(typeof hk1);

// console.log(Math.random()); // [0; 1)

let a = 10;
let b = 90;
let c = 13;

console.log("Bieu thuc trong can:", Math.pow(b, 2) - 4*a*c);

console.log("ket qua can:", (Math.sqrt(Math.pow(b, 2) - 4*a*c)));

let x = (- b + (Math.sqrt(Math.pow(b, 2) - 4*a*c))) / (2*a) ;

console.log("Tong:", x);