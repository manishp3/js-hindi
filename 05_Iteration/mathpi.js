// Object.getOwnPropertyDescriptor(Math)
// console.log(Math.PI);
// Math.PI=54
// // console.log(Math.PI+1);

// const desc=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(desc);


const chai ={
    name:"gigner",
    price:50,
    isAvalable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    
    enumerable:false,    
})

for (let [key,val] of Object.entries(chai)) {
    console.log(`${key} and ${val}`);
}