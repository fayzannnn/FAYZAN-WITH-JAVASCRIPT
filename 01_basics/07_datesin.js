 const mydates = new Date ()

//  console.log(mydates);

//  console.log(mydates.toString());

// console.log(mydates.toLocaleString());

// console.log( mydates.toLocaleDateString());

// console.log( typeof mydates.toLocaleDateString());

// console.log( typeof mydates);

// console.log( mydates.toDateString());


// let createDate = new Date(2026,8,23)
// console.log(createDate.toDateString());

 let mycreateDate = new Date(2026,8,23,3,27)
// console.log(mycreateDate.toLocaleString());

// let my1createDate = new Date(2026,0,23)
// console.log(my1createDate.toLocaleString());

// let my2createDate = new Date(2026,2,23)
// console.log(my2createDate.toLocaleString());

 
 
// let myTimeStap = Date.now()
// console.log(myTimeStap);

// console.log(mycreateDate.getTime());


// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);

console.log(newDate.getDate());

console.log(newDate.getMonth());

console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{ weekday:"short"}));
