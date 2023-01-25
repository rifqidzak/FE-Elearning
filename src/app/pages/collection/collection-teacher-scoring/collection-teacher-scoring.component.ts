import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../constant/base-url-enum";
import { Type } from "../../../constant/type";
import { CollectionExamDto } from "../../../dto/collection-exam/collection-exam-dto";
import { CollectionExamUpdateReqDataDto } from "../../../dto/collection-exam/collection-exam-update-req-data-dto";
import { CollectionQuizDto } from "../../../dto/collection-quiz/collection-quiz-dto";
import { CollectionQuizUpdateReqDataDto } from "../../../dto/collection-quiz/collection-quiz-update-req-data-dto";
import { CollectionService } from "../../../service/collection.service";
import { StudyClassService } from "../../../service/studyclass.service";

@Component({
  selector: "collection-teacher-scoring",
  templateUrl: "./collection-teacher-scoring.component.html",
})
export class CollectionTeacherScoringComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private studyClassService: StudyClassService, private collectionService: CollectionService) { }

  baseUrl: string = BaseUrl.BASE_URL;
  studyClassId!: number;
  studyClassName!: string;
  collectionId!: number;
  collectionQuizDto: CollectionQuizDto = new CollectionQuizDto();
  collectionExamDto: CollectionExamDto = new CollectionExamDto();
  collectionQuizUpdateReqDataDto: CollectionQuizUpdateReqDataDto = new CollectionQuizUpdateReqDataDto();
  collectionExamUpdateReqDataDto: CollectionExamUpdateReqDataDto = new CollectionExamUpdateReqDataDto();
  private StudyClassGetByIdSubscription?: Subscription;
  private collectionQuizGetByIdSubscription?: Subscription;
  private collectionExamGetByIdSubscription?: Subscription;
  private scoringQuizSubscription?: Subscription;
  private scoringExamSubscription?: Subscription;
  quizCheck :boolean = false;
  examCheck :boolean = false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.studyClassId = params['studyclass-id'];
      this.collectionId = params['collection-id'];
      this.StudyClassGetByIdSubscription = this.studyClassService.getById(this.studyClassId).subscribe(result => {
        this.studyClassName = result.data.studyClassName
      })
      if(params['type'] == Type.QUIZ){
        this.quizCheck = true;
        this.examCheck = false;
        this.initQuiz();
      }else{
        this.quizCheck = false;
        this.examCheck = true;
        this.initExam();
      }
    })

  }
  initQuiz() {
    this.collectionQuizGetByIdSubscription = this.collectionService.getByIdCollectionQuiz(this.collectionId).subscribe(result => {
      this.collectionQuizDto = result;
      this.collectionQuizUpdateReqDataDto._ver = this.collectionQuizDto.data.ver;
      this.collectionQuizUpdateReqDataDto._id = this.collectionQuizDto.data.id;
    })
  }
  initExam() {
    this.collectionExamGetByIdSubscription = this.collectionService.getByIdCollectionExam(this.collectionId).subscribe(result => {
      this.collectionExamDto = result;
      this.collectionExamUpdateReqDataDto._ver = this.collectionExamDto.data.ver;
      this.collectionExamUpdateReqDataDto._id = this.collectionExamDto.data.id;
    })
  }

  submitQuiz() {
    this.scoringQuizSubscription = this.collectionService.scoringQuiz(this.collectionQuizUpdateReqDataDto).subscribe(() => {
      this.initQuiz();
    })
  }

  submitExam() {
    this.scoringExamSubscription = this.collectionService.scoringExam(this.collectionExamUpdateReqDataDto).subscribe(() => {
      this.initExam();
    })
  }

  ngOnDestroy(): void {
    this.StudyClassGetByIdSubscription?.unsubscribe();
    this.collectionQuizGetByIdSubscription?.unsubscribe();
    this.collectionExamGetByIdSubscription?.unsubscribe();
    this.scoringQuizSubscription?.unsubscribe();
    this.scoringExamSubscription?.unsubscribe();
  }
}
