export class StudyClassDataDto{
  private _id!:number;
  private _ver!:number;
  private _studyClassCode!:string;
  private _studyClassName!:string;
  private _teacherName!:string;
  private _photoStudyClass!:number;
  private _isActive !:string;
  private _description!:string;

  get description(){
    return this._description;
  }

  set description(value:string) {
    this._description = value;
  }

  get id(){
    return this._id;
  }

  set id(value:number){
    this._id = value;
  }

  get ver(){
    return this._ver;
  }

  set ver(value:number){
    this._ver = value;
  }

  get studyClassCode(){
    return this._studyClassCode;
  }

  set studyClassCode(value:string){
    this._studyClassCode = value;
  }

  get studyClassName(){
    return this._studyClassName;
  }

  set studyClassName(value:string){
    this._studyClassName = value;
  }

  get teacherName(){
    return this._teacherName;
  }

  set teacherName(value:string){
    this._teacherName = value;
  }

  get photoStudyClass(){
    return this._photoStudyClass;
  }

  set photoStudyClass(value:number){
    this._photoStudyClass = value;
  }

  get isActive(){
    return this._isActive;
  }

  set isActive(value:string){
    this._isActive = value;
  }
}
