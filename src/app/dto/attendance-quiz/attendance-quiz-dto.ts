import { AttendanceQuizDataDto } from "./attendance-quiz-data-dto";

export class AttendanceQuizDto{
  private _data!:AttendanceQuizDataDto;

  get data(){
    return this._data;
  }

  set data(value:AttendanceQuizDataDto){
    this._data = value;
  }
}
