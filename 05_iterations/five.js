//for each 


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

myObject.forEach((element) => {
    console.log(element.languagename,element.languageprice);
    
});