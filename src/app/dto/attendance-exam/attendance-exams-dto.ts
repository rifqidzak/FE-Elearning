import { AttendanceExamDataDto } from "./attendance-exam-data-dto";

export class AttendanceExamsDto{
  private _data!:AttendanceExamDataDto[];

  get data(){
    return this._data;
  }

  set data(value:AttendanceExamDataDto[]){
    this._data = value;
  }
}
