// const tinderU=new Object();
// const tinderU = {};
// tinderU.name = "nanish"
// tinderU.age = 20
// tinderU.isLogin = false

// console.log(tinderU);
// console.log(Object.keys(tinderU));
// const regU = {
//     email: 'someone@gmial.com',
//     fullname: {
//         unm: {
//             fname: "manish",
//             lname: "patadiya"
//         }
//     }
// }


// console.log(regU.fullname);

// const obj1={1:"1",2:"#"}
// const obj2={3:"445",4:"vb"}
// const obj3={obj1,obj2}
// const o3=Object.assign(obj1,obj2);
// const o3={...obj1,obj2}

// console.log(o3);

const user={    
        id1:1,
        wmail:"main@gmial.com"   
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// check where it has given named value or not !
console.log(user.hasOwnProperty('id1'));


let man="amanisboy that is good"
console.log(man);
let a=man.toLocaleString()
console.log(a);