import { ScheduleTheoryDataDto } from "./schedule-theory-data-dto";

export class ScheduleTheoryDto{
  private _data!: ScheduleTheoryDataDto

  get data(){
    return this.data;
  }

  set data(value: ScheduleTheoryDataDto){
    this._data = value;
  }
}
