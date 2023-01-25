import { CollectionQuizDataDto } from "./collection-quiz-data-dto";

export class CollectionQuizDto{
  private _data :CollectionQuizDataDto = new CollectionQuizDataDto();

  get data(){
    return this._data;
  }

  set data(val:CollectionQuizDataDto) {
    this._data = val;
  }

}
