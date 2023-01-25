import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../constant/base-url-enum";
import { Type } from "../../../constant/type";
import { CollectionExamsDto } from "../../../dto/collection-exam/collection-exams-dto";
import { CollectionQuizsDto } from "../../../dto/collection-quiz/collection-quizs-dto";
import { StudyClassDto } from "../../../dto/studyclass/studyclass-dto";
import { CollectionService } from "../../../service/collection.service";
import { StudyClassService } from "../../../service/studyclass.service";

@Component({
  selector: "collection-teacher",
  templateUrl: "./collection-teacher.component.html",
})
export class CollectionTeacherComponent implements OnInit, OnDestroy {
  studyClassName!: string;
  studyClassId!: number;
  studyClassDto :StudyClassDto = new StudyClassDto();
  baseUrl: string = BaseUrl.BASE_URL;
  collectionQuizsDto: CollectionQuizsDto = new CollectionQuizsDto();
  collectionExamsDto: CollectionExamsDto = new CollectionExamsDto();

  private studyClassGetByIdSubscription!: Subscription;
  private collectionQuizGetByStudyClassIdSubscription?: Subscription;
  private collectionExamGetByStudyClassIdSubscription?: Subscription;
  quizCheck :boolean = false;
  examCheck :boolean = false;

  constructor(private activatedRoute:ActivatedRoute, private studyClassService : StudyClassService, private collectionService : CollectionService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(studyClassId=>{
      this.studyClassId = studyClassId['studyclass-id'];
      this.studyClassGetByIdSubscription = this.studyClassService.getById(this.studyClassId).subscribe(studyClassName=>{
        this.studyClassName = studyClassName.data.studyClassName;
        if(studyClassId['type'] == Type.QUIZ){
          this.quizCheck = true;
          this.examCheck = false;
          this.initQuiz();
        }else{
          this.quizCheck = false;
          this.examCheck = true;
          this.initExam();
        }
      })
    });
  }
  initQuiz(){
    this.collectionQuizGetByStudyClassIdSubscription = this.collectionService.getAllCollectionQuizByTeacherSide(this.studyClassId).subscribe(result=>{
      this.collectionQuizsDto = result;
    })
  }

  initExam(){
    this.collectionExamGetByStudyClassIdSubscription = this.collectionService.getAllCollectionExamByTeacherSide(this.studyClassId).subscribe(result=>{
      this.collectionExamsDto = result;
    })
  }

  ngOnDestroy(): void {
    this.studyClassGetByIdSubscription?.unsubscribe();
    this.collectionExamGetByStudyClassIdSubscription?.unsubscribe();
    this.collectionQuizGetByStudyClassIdSubscription?.unsubscribe();
  }


}
