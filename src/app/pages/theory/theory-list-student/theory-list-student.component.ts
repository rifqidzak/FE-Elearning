import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseUrl } from '../../../constant/base-url-enum';
import { AttendanceTheorysDto } from '../../../dto/attendance-theory/attendance-theorys-dto';
import { AttendanceService } from '../../../service/attendance.service';
import { StudyClassDetailService } from '../../../service/studyclass-detail.service';
@Component({
  selector: 'theory-list-student',
  templateUrl: './theory-list-student.component.html',
})
export class TheoryListStudentComponent implements OnInit, OnDestroy {
  baseUrl = BaseUrl.BASE_URL;
  studyClassName!: string;
  studyClassDetailId!: number;
  attendanceTheorysDto : AttendanceTheorysDto = new AttendanceTheorysDto();
  private attendanceGetAllByStudentSubscription ?:Subscription;
  private studyClassGetByIdSubscription ?:Subscription;
  constructor(private activatedRoutes :ActivatedRoute, private attendanceService :AttendanceService, private studyClassDetailService :StudyClassDetailService){}
  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(studyClassDetailId =>{
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];
      this.studyClassGetByIdSubscription = this.studyClassDetailService.getById(studyClassDetailId['studyclass-detail-id']).subscribe(result =>{
        this.studyClassName = result.data.className;
      })


      this.attendanceGetAllByStudentSubscription = this.attendanceService.attendanceTheoryGetAllByStudentSide(studyClassDetailId['studyclass-detail-id']).subscribe(result =>{
        this.attendanceTheorysDto = result;
        console.log(this.attendanceTheorysDto);
      })
    })
  }
  ngOnDestroy(): void {
    this.attendanceGetAllByStudentSubscription?.unsubscribe();
    this.studyClassGetByIdSubscription?.unsubscribe
  }


}
