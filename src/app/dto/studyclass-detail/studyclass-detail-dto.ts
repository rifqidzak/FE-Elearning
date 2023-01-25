import { StudyClassDetailDataDto } from "./studyclass-detail-data-dto";

export class StudyClassDetailDto{
  private _data !: StudyClassDetailDataDto;

  get data(){
    return this._data;
  }

  set data(data: StudyClassDetailDataDto){
    this._data = data;
  }
}
