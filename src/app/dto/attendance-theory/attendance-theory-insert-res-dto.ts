import { AttendanceTheoryInsertResDataDto } from "./attendance-theory-insert-res-data-dto";

export class AttendanceTheoryInsertResDto {
  private _data !: AttendanceTheoryInsertResDataDto;
  private _message!: string;
  get data() {
    return this._data;
  }
  set data(val: AttendanceTheoryInsertResDataDto) {
    this._data = val;
  }
  get message() {
    return this._message;
  }
  set message(val: string) {
    this._message = val;
  }
}
