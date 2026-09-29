function sayname(){
    console.log("f");
    console.log("a");
    console.log("y");
    console.log("z");
    console.log("a");
    console.log("n");
}
sayname()

// function addTwoNumber(number1,number2){
//     console.log("result:",number1+number2);
    
// }
// addTwoNumber(3,5)

function addTwoNumber(number1,number2){

let result = number1+number2
return result
}
const result = addTwoNumber(1,5)
console.log("result:",result);
 

function userNameLogin(username){
    return`${username} just logged in`
}
const name = userNameLogin("fayzan")
console.log(name);


function lastNameLogin (lastname){
    if(!lastname){
        console.log(`please enter your last name `);
        return
    }
    return`${lastname} succesfull`
}
const lastName = lastNameLogin()
console.log(lastName);


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400,500));


// const user={
//     username: "fayzan",
//     price:199

// }

function handleObject(anyobject){
    return`usrname name is ${anyobject.username} and its price is ${anyobject.price}`
}

const output = handleObject({username:"fayzan",price:199})
console.log(output);



// const myarr =[100,200,300,400]
function secondValue(arr){
    return arr[1]
}

console.log(secondValue([100,200,300,400]));
