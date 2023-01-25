import { CollectionExamInsertResDataDto } from "./collection-exam-insert-res-data-dto";

export class CollectionExamInsertResDto{
  private _data!: CollectionExamInsertResDataDto;
  private _message!: string;

  get data(){
    return this._data;
  }

  set data(val: CollectionExamInsertResDataDto){
    this._data = val;
  }

  get message(){
    return this._message;
  }

  set message(val: string){
    this._message = val;
  }
}
