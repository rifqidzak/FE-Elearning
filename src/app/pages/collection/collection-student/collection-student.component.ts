import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Type } from "../../../constant/type";
import { CollectionExamInsertReqDataDto } from "../../../dto/collection-exam/collection-exam-insert-req-data-dto";
import { CollectionQuizInsertReqDataDto } from "../../../dto/collection-quiz/collection-quiz-insert-req-data-dto";
import { ApiService } from "../../../service/api.service";
import { CollectionService } from "../../../service/collection.service";
import { FileService } from "../../../service/files.service";
import { StudyClassDetailService } from "../../../service/studyclass-detail.service";

@Component({
  selector: 'collection-student',
  templateUrl: './collection-student.component.html',
})
export class CollectionStudentCompenent implements OnInit, OnDestroy {
  studyClassName !: string;
  studyClassId!: string;
  collectionQuizInsertReqDataDto: CollectionQuizInsertReqDataDto = new CollectionQuizInsertReqDataDto();
  collectionExamInsertReqDataDto: CollectionExamInsertReqDataDto = new CollectionExamInsertReqDataDto();
  private collectionQuizInsertSubscription?: Subscription;
  private collectionExamInsertSubscription?: Subscription;
  private studyClassGetByIdSubscription?: Subscription;

  quizCheck :boolean = false;
  examCheck :boolean = false;

  constructor(private studyClassDetailService: StudyClassDetailService, private activatedRoute: ActivatedRoute, private fileService: FileService, private collectionService: CollectionService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(studyClassDetailId => {
      this.studyClassGetByIdSubscription = this.studyClassDetailService.getById(studyClassDetailId['studyclass-detail-id']).subscribe(result => {
        this.studyClassName = result.data.className;
        this.studyClassId = studyClassDetailId['studyclass-detail-id'];
        if(studyClassDetailId['type'] == Type.QUIZ){
          this.quizCheck = true;
          this.examCheck = false;
          this.initQuiz();
        }else{
          this.quizCheck = false;
          this.examCheck = true;
          this.initExam();
        }
      })
    })
  }

  initQuiz() {
    this.activatedRoute.params.subscribe(scheduleId => {
      this.collectionQuizInsertReqDataDto._scheduleId = scheduleId['schedule-id'];
    })
  }

  initExam() {
    this.activatedRoute.params.subscribe(scheduleId => {
      this.collectionExamInsertReqDataDto._scheduleId = scheduleId['schedule-id'];
    })
  }

  fileUploadQuiz(event: any) {
    const fileName = event.target.files[0].name;
    const regex = new RegExp('[^.]+$');
    const extension = fileName.match(regex)[0];
    this.fileService.fileUpload(event).then(result => {
      this.collectionQuizInsertReqDataDto._file._extension = extension;
      this.collectionQuizInsertReqDataDto._file._file = result[1];
    })
  }

  fileUploadExam(event: any) {
    const fileName = event.target.files[0].name;
    const regex = new RegExp('[^.]+$');
    const extension = fileName.match(regex)[0];
    this.fileService.fileUpload(event).then(result => {
      this.collectionExamInsertReqDataDto._file._extension = extension;
      this.collectionExamInsertReqDataDto._file._file = result[1];
    })
  }

  submitQuiz() {
    this.collectionQuizInsertSubscription = this.collectionService.insertQuiz(this.collectionQuizInsertReqDataDto).subscribe(()=>{
      this.initQuiz();
    })
  }

  submitExam() {
    this.collectionExamInsertSubscription = this.collectionService.insertExam(this.collectionExamInsertReqDataDto).subscribe(()=>{
      this.initExam();
    })
  }

  ngOnDestroy(): void {
    this.studyClassGetByIdSubscription?.unsubscribe();
    this.collectionExamInsertSubscription?.unsubscribe();
    this.collectionQuizInsertSubscription?.unsubscribe();
  }

}
