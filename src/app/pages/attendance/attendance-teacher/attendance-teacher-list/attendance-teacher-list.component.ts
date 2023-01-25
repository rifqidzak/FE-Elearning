import { Component, OnDestroy, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Type } from "../../../../constant/type";
import { AttendanceExamUpdateReqDataDto } from "../../../../dto/attendance-exam/attendance-exam-update-req-data-dto";
import { AttendanceExamsDto } from "../../../../dto/attendance-exam/attendance-exams-dto";
import { AttendanceQuizUpdateReqDataDto } from "../../../../dto/attendance-quiz/attendance-quiz-update-req-data-dto";
import { AttendanceQuizsDto } from "../../../../dto/attendance-quiz/attendance-quizs-dto";
import { AttendanceTheoryUpdateReqDataDto } from "../../../../dto/attendance-theory/attendance-theory-update-req-data-dto";
import { AttendanceTheorysDto } from "../../../../dto/attendance-theory/attendance-theorys-dto";
import { AttendanceService } from "../../../../service/attendance.service";
import { StudyClassService } from "../../../../service/studyclass.service";

@Component({
  selector: "attendance-teacher-list",
  templateUrl: "./attendance-teacher-list.component.html",
})
export class AttendanceTeacherList implements OnInit, OnDestroy {
  studyClassId!: number;
  studyClassName!: string;

  attendanceTheorysDto: AttendanceTheorysDto = new AttendanceTheorysDto();
  attendanceQuizsDto: AttendanceQuizsDto = new AttendanceQuizsDto();
  attendanceExamsDto: AttendanceExamsDto = new AttendanceExamsDto();

  attendanceTheoryUpdateReqDataDto : AttendanceTheoryUpdateReqDataDto = new AttendanceTheoryUpdateReqDataDto();
  attendanceQuizUpdateReqDataDto : AttendanceQuizUpdateReqDataDto = new AttendanceQuizUpdateReqDataDto();
  attendanceExamUpdateReqDataDto : AttendanceExamUpdateReqDataDto = new AttendanceExamUpdateReqDataDto();

  private attendanceTheoryGetAllByTeacherSideSubscription?: Subscription;
  private attendanceQuizGetAllByTeacherSideSubscription?: Subscription;
  private attendanceExamGetAllByTeacherSideSubscription?: Subscription;
  private studyClassGetById?: Subscription;

  private attendanceTheoryUpdateSubscription?: Subscription;
  private attendanceQuizUpdateSubscription?: Subscription;
  private attendanceExamUpdateSubscription?: Subscription;

  theoryCheck :boolean = false;
  quizCheck :boolean = false;
  examCheck :boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private attendaceService: AttendanceService, private studyClassService: StudyClassService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result => {
      this.studyClassId = result['studyclass-id'];
      this.studyClassGetById = this.studyClassService.getById(this.studyClassId).subscribe(result => {
        this.studyClassName = result.data.studyClassName;
        this.activatedRoute.params.subscribe(result => {
          if(result['type'] == Type.THEORY){
            this.theoryCheck = true;
            this.quizCheck = false;
            this.examCheck = false;
            this.initTheory();
          }else if(result['type'] == Type.QUIZ){
            this.quizCheck = true;
            this.examCheck = false;
            this.theoryCheck = false;
            this.initQuiz();
          }else{
            this.quizCheck = false;
            this.examCheck = true;
            this.theoryCheck = false;
            this.initExam();
          }
        })
      })
    })

  }

  initTheory() {
    this.attendanceTheoryGetAllByTeacherSideSubscription = this.attendaceService.attendanceTheoryGetAllByTeacherSide(this.studyClassId).subscribe(result => {
      this.attendanceTheorysDto = result;
    })
  }

  initQuiz() {
    this.attendanceQuizGetAllByTeacherSideSubscription = this.attendaceService.attendanceQuizGetAllByTeacherSide(this.studyClassId).subscribe(result => {
      this.attendanceQuizsDto = result;
    })
  }

  initExam() {
    this.attendanceExamGetAllByTeacherSideSubscription = this.attendaceService.attendanceExamGetAllByTeacherSide(this.studyClassId).subscribe(result => {
      this.attendanceExamsDto = result;
    })
  }

  clickApprovingTheory(id:number, ver:number){
    this.attendanceTheoryUpdateReqDataDto._id = id;
    this.attendanceTheoryUpdateReqDataDto._ver = ver;
    this.attendanceTheoryUpdateSubscription = this.attendaceService.approvingTheory(this.attendanceTheoryUpdateReqDataDto).subscribe(result=>{
      this.initTheory();
    })
  }

  clickApprovingQuiz(id:number, ver:number){
    this.attendanceQuizUpdateReqDataDto._id = id;
    this.attendanceQuizUpdateReqDataDto._ver = ver;
    this.attendanceQuizUpdateSubscription = this.attendaceService.approvingQuiz(this.attendanceQuizUpdateReqDataDto).subscribe(result=>{
      this.initQuiz();
    })
  }

  clickApprovingExam(id:number, ver:number){
    this.attendanceExamUpdateReqDataDto._id = id;
    this.attendanceExamUpdateReqDataDto._ver = ver;
    this.attendanceExamUpdateSubscription = this.attendaceService.approvingExam(this.attendanceExamUpdateReqDataDto).subscribe(result=>{
      this.initExam();
    })
  }

  ngOnDestroy(): void {
    this.studyClassGetById?.unsubscribe();
    this.attendanceTheoryGetAllByTeacherSideSubscription?.unsubscribe();
    this.attendanceQuizGetAllByTeacherSideSubscription?.unsubscribe();
    this.attendanceExamGetAllByTeacherSideSubscription?.unsubscribe();
    this.attendanceTheoryUpdateSubscription?.unsubscribe()
    this.attendanceQuizUpdateSubscription?.unsubscribe()
    this.attendanceExamUpdateSubscription?.unsubscribe()
  }
}
