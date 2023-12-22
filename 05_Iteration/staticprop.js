class User{
    constructor(usrnm){
        this.usrnm=usrnm
    }
    logMe(){
        console.log(`userName: ${this.usrnm}`);
    }
    createId(){
        return `${this.usrnm} + 123`;
    }
    
}
const ht=new User("HItesh");
console.log(ht.createId());
