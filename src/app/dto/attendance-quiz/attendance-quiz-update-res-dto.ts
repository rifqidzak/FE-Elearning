import { AttendanceQuizUpdateResDataDto } from "./attendance-quiz-update-res-data-dto";

export class AttendanceQuizUpdateResDto{
  private _data!: AttendanceQuizUpdateResDataDto;
  private _message!: string;

  get data(){
    return this._data;
  }

  set data(val:AttendanceQuizUpdateResDataDto){
    this._data = val;
  }
  get message(){
    return this._message;
  }

  set message(val:string){
    this._message = val;
  }

}
