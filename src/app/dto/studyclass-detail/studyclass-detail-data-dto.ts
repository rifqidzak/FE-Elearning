export class StudyClassDetailDataDto{
  private _teacherName!: string;
  private _className!: string;
  private _classCode!: string;
  private _studyClassId!: number;
  private _photoClassId!: number;
  private _id!:number;
  private _ver!: number;
  private _description!: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get teacherName(){
    return this._teacherName;
  }

  set teacherName(value: string){
    this._teacherName = value;
  }

  get className(){
    return this._className;
  }

  set className(value: string){
    this._className = value;
  }

  get classCode(){
    return this._classCode;
  }

  set classCode(value: string){
    this._classCode = value;
  }

  get studyClassId(){
    return this._studyClassId;
  }

  set studyClassId(value: number){
    this._studyClassId = value;
  }

  get photoClassId(){
    return this._photoClassId;
  }

  set photoClassId(value: number){
    this._photoClassId = value;
  }

  get id(){
    return this._id;
  }

  set id(value: number){
    this._id = value;
  }

  get ver(){
    return this._ver;
  }

  set ver(value: number){
    this._ver = value;
  }
}
