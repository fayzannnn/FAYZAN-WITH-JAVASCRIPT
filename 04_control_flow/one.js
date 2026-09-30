const temperature = 33
if(temperature >50){
    console.log(`${temperature} is greater than 50`);    
} else if(temperature === 41){
    console.log(`${temperature} is equal to 41`);    
}
else{
    console.log(`${temperature} is less than 50`);
    
}



const score = 500 
if( score > 300){
 const power = "fly";
 console.log(`power unlocked: ${power}`);
}
//  console.log(`power unlocked: ${power}`);
 

const balance = 600
if(balance<500){
    console.log(`${balance} is less than 500`);
}
else if(balance<750){
    console.log(`${balance} is less than 750`);
}
else if (balance<950){
    console.log(`${balance}is less than 950`);
    
}
else{
    console.log(`equal to ${balance}`);
    
}


const userLoggedIn = true
const debitCard = false
if(userLoggedIn && debitCard){
    console.log("allow user to buy course"); 
}
else{
    console.log("complete your payment mode ");
    
}


const LoggedInFromEmail = true
const LOggedInFromGoogle = false 
if(LoggedInFromEmail || LOggedInFromGoogle){
    console.log("user logged in");
    
}