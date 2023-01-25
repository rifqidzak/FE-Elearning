export class AttendanceTheoryDataDto {
  private _id!: number;
  private _ver!: number;
  private _studentName!: string;
  private _attendTime!: string;
  private _theoryName!: string;
  private _startTheory!: string;
  private _finishTheory!: string;
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

  public set id(id: number
  ) {
    this._id = id;
  }

  public get ver(): number {
    return this._ver;
  }

  public set ver(ver: number
  ) {
    this._ver = ver;
  }

  public get studentName(): string {
    return this._studentName;
  }

  public set studentName(studentName: string
  ) {
    this._studentName = studentName;
  }

  public get attendTime(): string {
    return this._attendTime;
  }

  public set attendTime(attendTime: string
  ) {
    this._attendTime = attendTime;
  }

  public get theoryName(): string {
    return this._theoryName;
  }

  public set theoryName(theoryName: string
  ) {
    this._theoryName = theoryName;
  }

  public get startTheory(): string {
    return this._startTheory;
  }

  public set startTheory(startTheory: string
  ) {
    this._startTheory = startTheory;
  }

  public get finishTheory(): string {
    return this._finishTheory;
  }

  public set finishTheory(finishTheory: string
  ) {
    this._finishTheory = finishTheory;
  }

  public get approve(): string {
    return this._approve;
  }

  public set approve(approve: string) {
    this._approve = approve;
  }



}
