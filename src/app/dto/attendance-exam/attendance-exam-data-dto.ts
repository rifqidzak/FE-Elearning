export class AttendanceExamDataDto {
  private _id!: number;
  private _ver!: number;
  private _studentName!: string;
  private _attendTime!: string;
  private _examName!: string;
  private _startExam!: string;
  private _finishExam!: string;
  private _approve!: string;
  private _scheduleId!: string;
  private _fileId!:number[];

  get fileId(){
    return this._fileId;
  }

  set fileId(value:number[]){
    this._fileId = value;
  }

  get scheduleId(): string {
    return this._scheduleId;
  }

  set scheduleId(value: string) {
    this._scheduleId = value;
  }
  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get ver(): number {
    return this._ver;
  }

  public set ver(ver: number) {
    this._ver = ver;
  }

  public get studentName(): string {
    return this._studentName;
  }

  public set studentName(studentName: string) {
    this._studentName = studentName;
  }

  public get attendTime(): string {
    return this._attendTime;
  }

  public set attendTime(attendTime: string) {
    this._attendTime = attendTime;
  }

  public get examName(): string {
    return this._examName;
  }

  public set examName(examName: string) {
    this._examName = examName;
  }

  public get startExam(): string {
    return this._startExam;
  }

  public set startExam(startExam: string) {
    this._startExam = startExam;
  }

  public get finishExam(): string {
    return this._finishExam;
  }

  public set finishExam(finishExam: string) {
    this._finishExam = finishExam;
  }

  public get approve(): string {
    return this._approve;
  }

  public set approve(approve: string) {
    this._approve = approve;
  }

}
