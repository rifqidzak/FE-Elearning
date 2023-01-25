import { CollectionQuizInsertResDataDto } from "./collection-quiz-insert-res-data-dto";

export class CollectionQuizInsertResDto{
  private _data!: CollectionQuizInsertResDataDto;
  private _message!: string;

  get data(){
    return this._data;
  }

  set data(val: CollectionQuizInsertResDataDto){
    this._data = val;
  }

  get message(){
    return this._message;
  }

  set message(val: string){
    this._message = val;
  }
}
