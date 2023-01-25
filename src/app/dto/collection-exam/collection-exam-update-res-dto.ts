import { CollectionExamUpdateResDataDto } from "./collection-exam-update-res-data-dto";

export class CollectionExamUpdateResDto{
  private _data!: CollectionExamUpdateResDataDto;
  private _message!: string;

  get data(): CollectionExamUpdateResDataDto {
    return this._data;
  }

  set data(data: CollectionExamUpdateResDataDto) {
    this._data = data;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }
}
