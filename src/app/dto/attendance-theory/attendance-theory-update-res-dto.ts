import { AttendanceTheoryUpdateResDataDto } from "./attendance-theory-update-res-data-dto";

export class AttendanceTheoryUpdateResDto{
  private _data!: AttendanceTheoryUpdateResDataDto;
  private _message!: string;

  get data(){
    return this._data;
  }

  set data(val:AttendanceTheoryUpdateResDataDto){
    this._data = val;
  }
  get message(){
    return this._message;
  }

  set message(val:string){
    this._message = val;
  }

}
