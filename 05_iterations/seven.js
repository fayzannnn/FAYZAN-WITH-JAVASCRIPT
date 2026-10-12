///map  

const myarr = [1,2,3,4,5,6,7,88,9,10]

const newarr = myarr.map((num)=>num+10)
console.log(newarr);


const newwarr = myarr.map((num)=>{
    return num+20
})
console.log(newwarr);



//chaining


const chainingarr = myarr.map((num)=>num*10).map((num)=>num+1)
console.log(chainingarr);


// reduce method 


const shoppingCart = [{
    itemname:"javascript",
    price:9999
},
{
    itemname:"PHP",
    price:9999
},
{
    itemname:"java",
    price:9999
},
{
    itemname:"python",
    price:9999
},
{
    itemname:"c++",
    price:9999
}]

const totalPrice = shoppingCart.reduce((acc , item)=>acc+item.price ,0)
console.log(totalPrice);
