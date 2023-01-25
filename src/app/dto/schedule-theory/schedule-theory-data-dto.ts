export class ScheduleTheoryDataDto{
  private _id!: number;
  private _ver!: number;
  private _theoryName!: string;
  private _startTheory!: string;
  private _finishTheory!: string;

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

  get theoryName(){
    return this._theoryName;
  }

  set theoryName(val: string){
    this._theoryName = val;
  }

  get startTheory(){
    return this._startTheory;
  }

  set startTheory(val: string){
    this._startTheory = val;
  }

  get finishTheory(){
    return this._finishTheory;
  }

  set finishTheory(val: string){
      this._finishTheory = val;
  }
}
