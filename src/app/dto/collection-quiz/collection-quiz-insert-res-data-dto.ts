export class CollectionQuizInsertResDataDto{
  private _id !: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
