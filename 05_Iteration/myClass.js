class User{
    constructor(usernam,email,pwd){
        this.usernam=usernam
        this.email=email
        this.pwd=pwd
    }
    encryptPassword(){
        return `${this.pwd}abca`
    }
    changeName(){
        return `re${this.usernam}vfd`
    }
}

const chai=new User("Mansih","Patadiya@gmail.com","123ert")
console.log(chai.encryptPassword());

const man=new User("Rahul","Rah@gmial.com","mnsas#12")
console.log(man.changeName());
