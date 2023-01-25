import { AttendanceExamUpdateResDataDto } from "./attendance-exam-update-res-data-dto";

export class AttendanceExamUpdateResDto{
  private _data!: AttendanceExamUpdateResDataDto;
  private _message!: string;

  get data(){
    return this._data;
  }

  set data(val:AttendanceExamUpdateResDataDto){
    this._data = val;
  }
  get message(){
    return this._message;
  }

  set message(val:string){
    this._message = val;
  }

}
