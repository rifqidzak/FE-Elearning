export class AttendanceQuizUpdateReqDataDto{
  private id!:number;
  private ver!:number;

  get _id():number {
    return this.id;
  }

  set _id(val:number) {
    this.id = val;
  }

  get _ver():number {
    return this.ver;
  }

  set _ver(val:number) {
    this.ver = val;
  }
}
