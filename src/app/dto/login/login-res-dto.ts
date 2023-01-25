export class LoginResDto{
    private _id!:number;
    private _token!:string;
    private _roleCode! :string;
    private _fullName !: string;
    private _photoId! :number;
    private _ver!: number;

    public get ver(){
        return this._ver;
    }

    public set ver(val: number){
        this._ver = val;
    }

    public get id(){
        return this._id;
    }

    public set id(id:number){
        this.id = id;
    }

    public get token(){
        return this._token;
    }

    public set token(token:string){
        this.token = token;
    }

    public get roleCode(){
        return this._roleCode;
    }

    public set roleCode(roleCode:string){
        this.roleCode = roleCode;
    }

    public get fullName(){
        return this._fullName;
    }

    public set fullName(fullName:string){
        this.fullName = fullName;
    }

    public get photoId(){
        return this._photoId;
    }

    public set photoId(photoId:number){
        this.photoId = photoId;
    }


}
