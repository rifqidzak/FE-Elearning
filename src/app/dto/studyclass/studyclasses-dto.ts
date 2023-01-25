import { StudyClassDataDto } from "./studyclass-data-dto";

export class StudyClassesDto{
  _data !:StudyClassDataDto[];

  get data(){
    return this._data;
  }

  set data(val:StudyClassDataDto[]) {
    this._data = val;
  }
}
