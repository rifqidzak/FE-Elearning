import { CollectionQuizUpdateResDataDto } from "./collection-quiz-update-res-data-dto";
export class CollectionQuizUpdateResDto {
  private _data!: CollectionQuizUpdateResDataDto;
  private _message!: string;

  get data(): CollectionQuizUpdateResDataDto {
    return this._data;
  }

  set data(data: CollectionQuizUpdateResDataDto) {
    this._data = data;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }
}
