export class ScheduleExamDataDto{
  private _id!: number;
  private _ver!: number;
  private _examName!: string;
  private _startExam!: string;
  private _finishExam!: string;

  get id(){
    return this._id;
  }

  set id(val: number){
    this._id = val;
  }

  get ver(){
    return this._ver;
  }

  set ver(val: number){
    this._ver = val;
  }

  get examName(){
    return this._examName;
  }

  set examName(val: string){
    this._examName = val;
  }

  get startExam(){
    return this._startExam;
  }

  set startExam(val: string){
    this._startExam = val;
  }

  get finishExam(){
    return this._finishExam;
  }

  set finishExam(val: string){
      this._finishExam = val;
  }
}
