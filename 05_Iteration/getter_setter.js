class User{
    constructor(email,pasword){
        this.email=email;
        this.pasword=pasword
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val.toUpperCase()
    }
    get pasword(){
        return this._pasword.toUpperCase()
    }
    set pasword(val){
        this._pasword=val.toUpperCase()
    }
}

const man=new User("maishh@fb.com","231");

console.log(man.pasword);
console.log(man.email);