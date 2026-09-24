
const mysym = Symbol("key1")


const JS_user = {
  name:"fayzan",
  lastname : "shikalgar",
  Email:"fayzan@gmail.com",
  Age: 22,
  location:"mumbai",
  isloggedIn: true,
  lastLoggedIn:['monday','wednesday'],
  [mysym]: "mykey 1"
}

// console.log(JS_user.Email);
console.log(JS_user['Email']);

console.log(JS_user[mysym]);

JS_user.Email = "fayzan@gpt.com"

console.log(JS_user['Email']);

// Object.freeze(JS_user)        use to freeze the object no changes can be done after that 

JS_user.name = "babu"

console.log(JS_user['name']);


JS_user.greeting = function(){
    console.log("heelo js user ");    
}
console.log(JS_user.greeting());

JS_user.greetingtwo = function(){
    console.log(`hello js user ${this.name} for using object`);
}

console.log(JS_user.greetingtwo());
