import { ScheduleQuizDataDto } from "./schedule-quiz-data-dto";

export class ScheduleQuizsDto{
  private _data!: ScheduleQuizDataDto[];

  get data(){
    return this._data;
  }

  set data(value : ScheduleQuizDataDto[]){
    this._data = value;
  }
}
