import { ScheduleTheoryDataDto } from "./schedule-theory-data-dto";

export class ScheduleTheoriesDto{
  private _data!: ScheduleTheoryDataDto[];

  get data(){
    return this._data;
  }

  set data(value : ScheduleTheoryDataDto[]){
    this._data = value;
  }
}
