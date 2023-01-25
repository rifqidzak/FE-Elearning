import { AttendanceExamInsertResDataDto } from "./attendance-exam-insert-res-data-dto";
export class AttendanceExamInsertResDto {
  private _data !: AttendanceExamInsertResDataDto;
  private _message!: string;
  get data() {
    return this._data;
  }
  set data(val: AttendanceExamInsertResDataDto) {
    this._data = val;
  }
  get message() {
    return this._message;
  }
  set message(val: string) {
    this._message = val;
  }
}
