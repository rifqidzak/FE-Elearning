import { AttendanceTheoryDataDto } from "./attendance-theory-data-dto";

export class AttendanceTheoryDto{
  private _data:AttendanceTheoryDataDto  = new AttendanceTheoryDataDto();

  get data(){
    return this._data;
  }

  set data(value:AttendanceTheoryDataDto){
    this._data = value;
  }
}
