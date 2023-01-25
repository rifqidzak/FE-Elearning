import { AttendanceQuizDataDto } from "./attendance-quiz-data-dto";

export class AttendanceQuizsDto{
  private _data !:AttendanceQuizDataDto[];

  get data(){
    return this._data;
  }

  set data(val:AttendanceQuizDataDto[]) {
    this._data = val;
  }
}
