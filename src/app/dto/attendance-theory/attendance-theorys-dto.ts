import { AttendanceTheoryDataDto } from "./attendance-theory-data-dto";

export class AttendanceTheorysDto{
  private _data:AttendanceTheoryDataDto[] = [];

  get data(){
    return this._data;
  }

  set data(val:AttendanceTheoryDataDto[]) {
    this._data = val;
  }
}
