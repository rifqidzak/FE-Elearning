
import { StudyClassDetailDataDto } from "./studyclass-detail-data-dto";

export class StudyClassesDetailDto{
  private _data!: StudyClassDetailDataDto[];
  get data(): StudyClassDetailDataDto[]{
    return this._data;

  }
  set data(value: StudyClassDetailDataDto[]){
    this._data = value;
  }

}
