import { StudyClassDataDto } from "./studyclass-data-dto";

export class StudyClassDto{
  private _data!: StudyClassDataDto;

  public get data(): StudyClassDataDto{
    return this._data;
  }

  public set data(value: StudyClassDataDto){
    this._data = value;
  }
}
