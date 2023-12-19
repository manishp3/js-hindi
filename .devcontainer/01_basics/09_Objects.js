// singleton
// objects literal

const mySym=Symbol("key1");
const jsuser={
    name:"manish",
    age:23
    // [mySym]:"mukjklfs"
    // height:167,
    // isLogin:false,
    // day:["sunday","monday"],
    // mail:"Manish@gmial.com"
}

// console.log(jsuser[mySym]);
// console.log(jsuser);
jsuser.mail="Hitesh@gmai.com"
console.log(jsuser);

let n="mabnsu"
jsuser.greetin=function(){
    console.log(`ello JS jsuser ,${n}`);
}
console.log(jsuser.greetin());