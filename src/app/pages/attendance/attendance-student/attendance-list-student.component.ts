import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Type } from '../../../constant/type';
import { AttendanceExamInsertReqDataDto } from '../../../dto/attendance-exam/attendance-exam-insert-req-data-dto';
import { AttendanceQuizInsertReqDataDto } from '../../../dto/attendance-quiz/attendance-quiz-insert-req-data-dto';
import { AttendanceTheoryInsertReqDataDto } from '../../../dto/attendance-theory/attendance-theory-insert-req-data-dto';
import { ScheduleExamsDto } from '../../../dto/schedule-exam/schedule-exams-dto';
import { ScheduleQuizsDto } from '../../../dto/schedule-quiz/schedule-quizs-dto';
import { ScheduleTheoriesDto } from '../../../dto/schedule-theory/schedule-theories-dto';
import { AttendanceService } from '../../../service/attendance.service';
import { ScheduleService } from '../../../service/schedule.service';
import { StudyClassDetailService } from '../../../service/studyclass-detail.service';
@Component({
  selector: 'attendance-list',
  templateUrl: './attendance-list-student.component.html'
})
export class AttendanceListComponent implements OnInit, OnDestroy {
  studyClassDetailId !: number
  studyClassId !: number;
  studyClassName !: string;
  scheduleTheoriesDto: ScheduleTheoriesDto = new ScheduleTheoriesDto();
  scheduleQuizsDto: ScheduleQuizsDto = new ScheduleQuizsDto();
  scheduleExamsDto: ScheduleExamsDto = new ScheduleExamsDto();

  private scheduleExamsGetAllSubscription?: Subscription;
  private scheduleQuizsGetAllSubscription?: Subscription;
  private scheduleTheoriesGetAllSubscription?: Subscription;
  private studyClassDetailGetByIdSubscription?: Subscription;

  attendanceTheoryInsertReqDto :AttendanceTheoryInsertReqDataDto = new AttendanceTheoryInsertReqDataDto();
  attendanceQuizInsertReqDto :AttendanceQuizInsertReqDataDto = new AttendanceQuizInsertReqDataDto();
  attendanceExamInsertReqDto :AttendanceExamInsertReqDataDto = new AttendanceExamInsertReqDataDto();
  private attendanceInsertTheorySubscription?:Subscription;
  private attendanceInsertQuizSubscription?:Subscription;
  private attendanceInsertExamSubscription?:Subscription;

  theoryCheck :boolean = false;
  quizCheck :boolean = false;
  examCheck :boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private studyClassDetailService: StudyClassDetailService, private scheduleService: ScheduleService,
    private attendanceService: AttendanceService) { }

  ngOnInit(): void {
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
  }

  initTheory() {
    this.activatedRoute.params.subscribe(studyClassDetailId => {
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];
      this.studyClassDetailGetByIdSubscription = this.studyClassDetailService.getById(this.studyClassDetailId).subscribe(studyClassId => {
        this.studyClassId = studyClassId.data.id;
        this.studyClassName = studyClassId.data.className;
        this.scheduleTheoriesGetAllSubscription = this.scheduleService.getAllScheduleTheory(this.studyClassDetailId).subscribe(result => {
          this.scheduleTheoriesDto = result;
        })
      });
    });
  }

  initQuiz(){
    this.activatedRoute.params.subscribe(studyClassDetailId => {
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];
      this.studyClassDetailGetByIdSubscription = this.studyClassDetailService.getById(this.studyClassDetailId).subscribe(studyClassId => {
        this.studyClassId = studyClassId.data.id;
        this.studyClassName = studyClassId.data.className;
        this.scheduleQuizsGetAllSubscription = this.scheduleService.getAllScheduleQuiz(this.studyClassDetailId).subscribe(result => {
          this.scheduleQuizsDto= result;
        })
      });
    });
  }

  initExam(){
    this.activatedRoute.params.subscribe(studyClassDetailId => {
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];
      this.studyClassDetailGetByIdSubscription = this.studyClassDetailService.getById(this.studyClassDetailId).subscribe(studyClassId => {
        this.studyClassId = studyClassId.data.id;
        this.studyClassName = studyClassId.data.className;
        this.scheduleExamsGetAllSubscription = this.scheduleService.getAllScheduleExam(this.studyClassDetailId).subscribe(result => {
          this.scheduleExamsDto= result;
        })
      });
    });

  }

  clickAttendTheory(scheduleId: number){
    this.attendanceTheoryInsertReqDto._studyClassDetailId = this.studyClassDetailId
    this.attendanceTheoryInsertReqDto._scheduleId = scheduleId;
    this.attendanceInsertTheorySubscription = this.attendanceService.insertAttendanceTheory(this.attendanceTheoryInsertReqDto).subscribe(()=>{
      this.initTheory();
    })
  }

  clickAttendQuiz(scheduleId: number){
    this.attendanceQuizInsertReqDto._studyClassDetailId = this.studyClassDetailId
    this.attendanceQuizInsertReqDto._scheduleId = scheduleId;
    this.attendanceInsertQuizSubscription = this.attendanceService.insertAttendanceQuiz(this.attendanceQuizInsertReqDto).subscribe(()=>{
      this.initQuiz();
    })
  }

  clickAttendExam(scheduleId: number){
    this.attendanceExamInsertReqDto._studyClassDetailId = this.studyClassDetailId
    this.attendanceExamInsertReqDto._scheduleId = scheduleId;
    this.attendanceInsertExamSubscription = this.attendanceService.insertAttendanceExam(this.attendanceExamInsertReqDto).subscribe(()=>{
      this.initExam();
    })
  }

  ngOnDestroy(): void {
    this.studyClassDetailGetByIdSubscription?.unsubscribe();
    this.scheduleTheoriesGetAllSubscription?.unsubscribe();
    this.scheduleQuizsGetAllSubscription?.unsubscribe();
    this.scheduleExamsGetAllSubscription?.unsubscribe();
    this.attendanceInsertTheorySubscription?.unsubscribe();
    this.attendanceInsertQuizSubscription?.unsubscribe();
    this.attendanceInsertExamSubscription?.unsubscribe();
  }
}
