// const a =10
// let b =20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
var c = 400
const b =500
if(true){
    let a = 30
    const b = 20
    var c = 40
}

console.log(a);
console.log(b);
console.log(c);



var A = 300
if(true){
    var A =10
    const b = 20
    console.log("inner:",A);
}
console.log(A);



function one(){
    const username = "fayzan"
    function two(){
        const website = "youtube.com"
    console.log(website);
    }
    two()
    console.log(username);
}
one()


if(true){
    const username ="fayzan"
    if(username == "fayzan"){
       const website = 'youtube' 
       console.log(username + website);
       
    }
    // console.log(website);
}
// console.log(usrname);


console.log(addone(5));

function addone(num){
    return num+1
}


console.log(addTwo(5));
 const addTwo = function(num){        // reason we cannot acces the function because we use const 
    return num+2
}
