const tinderuser = new Object()

// console.log(tinderuser);


const tinderuserr = {}
tinderuserr.name = "fayzan",
tinderuserr.lastname = "shikalgar",
tinderuserr.email = "fayzan@gmail.com",
tinderuserr.isLoggedIn = false
// console.log(tinderuserr);

const regularUser = {
    Email: "some@gmail.com",
    Fullname:{
        username:{
            first:"fayzan",
            last: "shikalgar"
        }
    }
}

// console.log(regularUser.Fullname.username.first);
// console.log(regularUser.Fullname.username.last);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);


// another method through spread operator

const objj3 = {...obj1,...obj2};
// console.log(objj3);


// console.log(Object.keys(tinderuserr));


// console.log(Object.entries(tinderuserr));


// console.log(Object.hasOwnProperty('isLoggedIn'));


const cousre ={
    coursename:"full stack",
    price: 75000,
    courseInstuctor:"fayzan"
}

// console.log(cousre.courseInstuctor);

const {courseInstuctor} = cousre
console.log(courseInstuctor);

const{courseInstuctor : Instuctor} = cousre
console.log(Instuctor);
