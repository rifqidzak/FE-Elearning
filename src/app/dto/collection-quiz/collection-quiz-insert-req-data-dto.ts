import { FileInsertReqDto } from "../files/file-insert-req-data-dto";

export class CollectionQuizInsertReqDataDto{
  private scheduleId!: number;
  private file :FileInsertReqDto = new FileInsertReqDto();

  get _scheduleId(): number {
    return this.scheduleId;
  }

  set _scheduleId(value: number) {
    this.scheduleId = value;
  }

  get _file(): FileInsertReqDto {
    return this.file;
  }
  set _file(value: FileInsertReqDto) {
    this.file = value;
  }
}
