import { AttendanceQuizInsertResDataDto } from "./attendance-quiz-insert-res-data-dto";

export class AttendanceQuizInsertResDto {
  private _data !: AttendanceQuizInsertResDataDto;
  private _message!: string;
  get data() {
    return this._data;
  }
  set data(val: AttendanceQuizInsertResDataDto) {
    this._data = val;
  }
  get message() {
    return this._message;
  }
  set message(val: string) {
    this._message = val;
  }
}
