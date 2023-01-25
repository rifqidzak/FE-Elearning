import { CollectionExamDataDto } from "./collection-exam-data-dto";

export class CollectionExamDto{
  private _data: CollectionExamDataDto = new CollectionExamDataDto();

  get data(): CollectionExamDataDto{
    return this._data;
  }

  set data(value: CollectionExamDataDto){
    this._data = value;
  }

}
