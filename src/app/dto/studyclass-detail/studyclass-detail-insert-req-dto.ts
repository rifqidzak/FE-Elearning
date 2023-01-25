export class StudyClassDetailInsertReqDataDto{
  private studyClassId!: number;

  get _studyClassId(): number {
    return this.studyClassId;
  }

  set _studyClassId(studyClassId: number) {
    this.studyClassId = studyClassId;
  }
}
