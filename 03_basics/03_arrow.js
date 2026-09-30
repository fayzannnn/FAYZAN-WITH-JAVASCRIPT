// const user ={
//     username:"fayzan",
//     price : 199,

//  welcomeMessage: function() {
//     console.log(`${this.username} welcome to javascript`);
//     console.log(this);
    
// }
// }
// // user.username = "sam"
//  user.welcomeMessage() 


function chai (){
    let username = "fayzan"
    // console.log(`${this.username}, welcome to gang bruh`);
    
}
chai()                 // o/p undefine  bcoz this can obly be use in object not in fun 
                       //  eventhough we use variable to store function
                    
const chaii = function(){
    let username = "fayzan"
    // console.log(`${this.username} welocme`);
    
}
chaii()


const addTWo = (num1 , num2) =>{
    return num1+num2
}
console.log(addTWo(3,5));


const addThree = (num1,num2,num3) => num1+num2+num3;
console.log(addThree(3,5,8));

// not need to use 'return' if we are not using '{}'  

const addThreee = (num1,num2,num3) => (num1+num2+num3);
console.log(addThreee(3,5,8));

const obj = ( num1,num2)=>({
    username:"fayzan"
})
console.log(obj());
