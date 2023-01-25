import { ScheduleExamDataDto } from "./schedule-exam-data-dto";

export class ScheduleExamsDto{
  private _data!: ScheduleExamDataDto[];

  get data(){
    return this._data;
  }

  set data(value : ScheduleExamDataDto[]){
    this._data = value;
  }
}
