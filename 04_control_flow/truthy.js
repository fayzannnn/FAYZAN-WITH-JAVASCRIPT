 // fasley 

 // false , 0 , -0, "", bingint on ,null , undefined , nan 

 // trythy value 

 // "0", 'fasle' , " " , [] , { }, function(){}


 const userEmail =[]

 if(userEmail){
    console.log('got user email');
 }else{
    console.log("dont get user email");
    
 }

 if(userEmail.length == 0){
    console.log("arrray is empty ");
    
 }

const emptyobj={
}

if(Object.keys(emptyobj.length == 0)){
    console.log("object is empty");
    
}

// Nullish coalesing Operator(??)

let val1 ;
val1 = 5 ?? 10 
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined??15
console.log(val1);


val1 = null??10??15
console.log(val1);


// terniary Operator 

// syntax  =>    condition ? true : false 


const iceTeaPrice = 50
iceTeaPrice >=80 ? console.log("greater than 80"): console.log("less than 80 ");
iceTeaPrice <=80 ? console.log("greater than 80"): console.log("less than 80 ");

