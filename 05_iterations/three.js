// for of 


const greeting = "hello wolrd"

for(const greet of greeting){
    console.log(`each char is ${greet}`);
}


// Map 

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATE OF AMERICA')
map.set('JAP','JAPAN')
console.log(map);

for(const[key,value]of map){
    console.log(key,":",value);
    
}

