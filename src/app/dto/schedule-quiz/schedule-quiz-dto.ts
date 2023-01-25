import { ScheduleQuizDataDto } from "./schedule-quiz-data-dto";

export class ScheduleQuizDto{
  private _data!: ScheduleQuizDataDto

  get data(){
    return this.data;
  }

  set data(value: ScheduleQuizDataDto){
    this._data = value;
  }
}
