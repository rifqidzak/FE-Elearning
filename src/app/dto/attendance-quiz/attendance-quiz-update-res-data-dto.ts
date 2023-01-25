export class AttendanceQuizUpdateResDataDto{
  private _ver! :number;

  get ver():number{
    return this._ver;
  }

  set ver(value:number){
    this._ver = value;
  }
}
