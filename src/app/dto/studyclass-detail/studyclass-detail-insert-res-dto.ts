export class StudyClassDetailInsertResDto{
  private _data!: StudyClassDetailInsertResDto;
  private _message!: string;

  get data(): StudyClassDetailInsertResDto{
    return this._data;
  }

  set data(val: StudyClassDetailInsertResDto){
    this._data = val;
  }

  get message(): string{
    return this._message;
  }

  set message(val: string){
    this._message = val;
  }
}
