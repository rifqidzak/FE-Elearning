export class CollectionExamUpdateReqDataDto{
  private note!: string;
  private score!: number;
  private id!: number;
  private ver!: number;

  get _note(){
    return this.note;
  }

  set _note(note: string){
    this.note = note;
  }

  get _score(){
    return this.score;
  }

  set _score(score: number){
    this.score = score;
  }

  get _id(){
    return this.id;
  }

  set _id(id: number){
    this.id = id;
  }

  get _ver(){
    return this.ver;
  }

  set _ver(ver: number){
    this.ver = ver;
  }

}
