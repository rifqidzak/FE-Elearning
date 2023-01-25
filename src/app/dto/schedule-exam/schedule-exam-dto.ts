import { ScheduleExamDataDto } from "./schedule-exam-data-dto";

export class ScheduleExamDto{
  private _data!: ScheduleExamDataDto

  get data(){
    return this.data;
  }

  set data(value: ScheduleExamDataDto){
    this._data = value;
  }
}
