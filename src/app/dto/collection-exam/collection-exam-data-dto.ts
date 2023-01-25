export class CollectionExamDataDto {
  private _note!: string;
  private _score!: number;
  private _examName!: number;
  private _examStart!: string;
  private _examFinish!: string;
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

  public get examName(): number {
    return this._examName;
  }

  public set examName(examName: number
  ) {
    this._examName = examName;
  }

  public get examStart(): string {
    return this._examStart;
  }

  public set examStart(examStart: string
  ) {
    this._examStart = examStart;
  }

  public get examFinish(): string {
    return this._examFinish;
  }

  public set examFinish(examFinish: string
  ) {
    this._examFinish = examFinish;
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

  public set ver(ver: number
  ) {
    this._ver = ver;
  }

}
