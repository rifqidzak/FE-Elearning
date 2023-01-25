import { CollectionExamDataDto } from "./collection-exam-data-dto";

export class CollectionExamsDto{
  private _data: CollectionExamDataDto[] = [];

  get data(): CollectionExamDataDto[]{
    return this._data;
  }

  set data(value: CollectionExamDataDto[]){
    this._data = value;
  }

}
