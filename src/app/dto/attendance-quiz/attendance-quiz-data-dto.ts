export class AttendanceQuizDataDto {
  private _id!: number;
  private _ver!: number;
  private _studentName!: string;
  private _attendTime!: string;
  private _quizName!: string;
  private _startQuiz!: string;
  private _finishQuiz!: string;
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

  public get quizName(): string {
    return this._quizName;
  }

  public set quizName(quizName: string
  ) {
    this._quizName = quizName;
  }

  public get startQuiz(): string {
    return this._startQuiz;
  }

  public set startQuiz(startQuiz: string
  ) {
    this._startQuiz = startQuiz;
  }

  public get finishQuiz(): string {
    return this._finishQuiz;
  }

  public set finishQuiz(finishQuiz: string
  ) {
    this._finishQuiz = finishQuiz;
  }

  public get approve(): string {
    return this._approve;
  }

  public set approve(approve: string) {
    this._approve = approve;
  }


}
