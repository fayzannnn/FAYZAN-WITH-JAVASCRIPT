const myObject = [{
    languagename : "javasccript",
    languageprice: 7999,
},
   {  languagename : "c++",
    languageprice: 7999
},
  {   languagename : "python",
    languageprice: 9999
},
   {  languagename : "java",
    languageprice: 8999
}]

 const value = myObject.forEach((element) => {
    console.log(element.languagename,element.languageprice);
    return element  
});

console.log(value);     /// error bcause store in another
                        // variable 



// filter opertaor 

const myarr =[1,23,44,5,6,7,9,0,65,4,3]

const newarr = myarr.filter((item)=>item>5)
console.log(newarr);




const newitems =[]
myarr.forEach((item)=>{
    if(item >5){
        newitems.push(item)
    }
})
console.log(newitems);
