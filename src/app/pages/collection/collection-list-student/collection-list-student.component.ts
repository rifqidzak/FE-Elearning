import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../constant/base-url-enum";
import { Type } from "../../../constant/type";
import { AttendanceExamsDto } from "../../../dto/attendance-exam/attendance-exams-dto";
import { AttendanceQuizsDto } from "../../../dto/attendance-quiz/attendance-quizs-dto";
import { AttendanceService } from "../../../service/attendance.service";
import { StudyClassDetailService } from "../../../service/studyclass-detail.service";

@Component({
  selector: 'collection-list-student',
  templateUrl: './collection-list-student.component.html',
})
export class CollectionListStudentComponent {
  baseUrl = BaseUrl.BASE_URL;
  studyClassName!: string;
  studyClassDetailId!: number;
  attendanceQuizsDto: AttendanceQuizsDto = new AttendanceQuizsDto();
  attendanceExamsDto: AttendanceExamsDto = new AttendanceExamsDto();
  private attendanceQuizGetAllByStudentSubscription?: Subscription
  private attendanceExamGetAllByStudentSubscription?: Subscription
  private studyClassGetByIdSubscription ?:Subscription;

  quizCheck :boolean = false;
  examCheck :boolean = false;
  constructor(private activatedRoutes: ActivatedRoute, private attendanceService: AttendanceService, private studyClassDetailService : StudyClassDetailService) { }
  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(result => {

      if(result['type'] == Type.QUIZ){
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
    this.activatedRoutes.params.subscribe(studyClassDetailId => {
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];

      this.studyClassGetByIdSubscription = this.studyClassDetailService.getById(studyClassDetailId['studyclass-detail-id']).subscribe(result =>{
        this.studyClassName = result.data.className;
      })

      this.attendanceQuizGetAllByStudentSubscription = this.attendanceService.attendanceQuizGetAllByStudentSide(studyClassDetailId['studyclass-detail-id']).subscribe(result => {
        this.attendanceQuizsDto = result;
      })
    })
  }

  initExam() {
    this.activatedRoutes.params.subscribe(studyClassDetailId => {
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];

      this.studyClassGetByIdSubscription = this.studyClassDetailService.getById(studyClassDetailId['studyclass-detail-id']).subscribe(result =>{
        this.studyClassName = result.data.className;
      })

      this.attendanceExamGetAllByStudentSubscription = this.attendanceService.attendanceExamGetAllByStudentSide(studyClassDetailId['studyclass-detail-id']).subscribe(result => {
        this.attendanceExamsDto = result;
      })
    })
  }
  ngOnDestroy(): void {
    this.attendanceQuizGetAllByStudentSubscription?.unsubscribe();
    this.studyClassGetByIdSubscription?.unsubscribe();
    this.attendanceExamGetAllByStudentSubscription?.unsubscribe();
  }
}
