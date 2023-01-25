export class ScheduleQuizDataDto{
  private _id!: number;
  private _ver!: number;
  private _quizName!: string;
  private _startQuiz!: string;
  private _finishQuiz!: string;

  get id(){
    return this._id;
  }

  set id(val: number){
    this._id = val;
  }

  get ver(){
    return this._ver;
  }

  set ver(val: number){
    this._ver = val;
  }

  get quizName(){
    return this._quizName;
  }

  set quizName(val: string){
    this._quizName = val;
  }

  get startQuiz(){
    return this._startQuiz;
  }

  set startQuiz(val: string){
    this._startQuiz = val;
  }

  get finishQuiz(){
    return this._finishQuiz;
  }

  set finishQuiz(val: string){
      this._finishQuiz = val;
  }
}
