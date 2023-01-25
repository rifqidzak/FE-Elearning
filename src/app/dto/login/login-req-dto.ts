export class LoginReqDto{
    private email! :string;
    private password! :string;

    get _email(){
        return this.email;
    }

    set _email(email:string){
        this.email = email;
    }

    get _password(){
        return this.password;
    }

    set _password(password:string){
        this.password = password;
    }
}