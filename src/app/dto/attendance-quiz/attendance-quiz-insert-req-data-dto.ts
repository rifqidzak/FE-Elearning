export class AttendanceQuizInsertReqDataDto{
  private studyClassDetailId!:number;
  private scheduleId!:number;

  get _studyClassDetailId():number{
    return this.studyClassDetailId;
  }

  set _studyClassDetailId(value:number){
    this.studyClassDetailId = value;
  }

  get _scheduleId():number{
    return this.scheduleId;
  }

  set _scheduleId(value:number){
    this.scheduleId = value;
  }
}
