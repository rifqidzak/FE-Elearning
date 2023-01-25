import { CollectionQuizDataDto } from "./collection-quiz-data-dto";

export class CollectionQuizsDto{
  private _data :CollectionQuizDataDto[] = []

  get data(){
    return this._data;
  }

  set data(val:CollectionQuizDataDto[]) {
    this._data = val;
  }

}
