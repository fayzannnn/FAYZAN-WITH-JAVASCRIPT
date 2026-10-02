
// // for(let i=0;i<=10;i++){
// //     console.log(i);
    
// // }

// for(i=1;i<=10;i++){
//     if(i===5){
//         console.log("5 is the best number");       
//    }
//     console.log(i);
    
// }


//  for (let i =1 ; i<=10;i++){
//     console.log(`outer loop : ${i}`);
//  for (let j =1; j<=10 ; j++){
//      console.log(`inner loop ${j} and outer loop ${j}`);
//  }
//  }

// for(let i=1 ; i<=2 ; i++){
//     console.log(`outer loop ${i}`);
// for (let j=1 ; j<=10 ; j++)
//     console.log(i+"*"+j+"="+i*j);
    
    
// }


// BREAK

const myarr =["superman", "batman", "ironman", "spiderman","deadpool","hulk","thor","night fury","captain america"]

for (let i = 0 ; i<=myarr.length; i++){
    if(myarr[i] == "spiderman"){
        console.log("spidy found");
        break
    }
    console.log(myarr[i])
};
    
// CONTINUE

for (let i = 0 ; i<=myarr.length; i++){
    if(myarr[i] == "spiderman"){
        console.log("spidy found");
        continue
    }
    console.log(myarr[i])
};