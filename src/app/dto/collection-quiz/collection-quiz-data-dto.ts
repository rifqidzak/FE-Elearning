export class CollectionQuizDataDto {
  private _note!: string;
  private _score!: number;
  private _quizName!: number;
  private _quizStart!: string;
  private _quizFinish!: string;
  private _studentName!: string;
  private _fileId!: number;
  private _id!: number;
  private _ver!: number;

  public get note(): string {
    return this._note;
  }

  public set note(note: string
  ) {
    this._note = note;
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number
  ) {
    this._score = score;
  }

  public get quizName(): number {
    return this._quizName;
  }

  public set quizName(quizName: number
  ) {
    this._quizName = quizName;
  }

  public get quizStart(): string {
    return this._quizStart;
  }

  public set quizStart(quizStart: string
  ) {
    this._quizStart = quizStart;
  }

  public get quizFinish(): string {
    return this._quizFinish;
  }

  public set quizFinish(quizFinish: string
  ) {
    this._quizFinish = quizFinish;
  }

  public get studentName(): string {
    return this._studentName;
  }

  public set studentName(studentName: string
  ) {
    this._studentName = studentName;
  }

  public get fileId(): number {
    return this._fileId;
  }

  public set fileId(fileId: number
  ) {
    this._fileId = fileId;
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

  public set ver(ver: number) {
    this._ver = ver;
  }





}
