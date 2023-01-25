import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudyClassDetailService } from '../../../service/studyclass-detail.service';

@Component({
    selector:'quiz-menu-student',
    templateUrl: './quiz-menu-student.component.html'
})
export class QuizMenuStudentComponent implements OnInit, OnDestroy{
  studyClassDetailId !:number;
  studyClassName? :string;
  private studyClassDetailServiceSubscription?: Subscription;
  constructor(private activatedRoute :ActivatedRoute, private studyClassDetailService:StudyClassDetailService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(studyClassDetailId =>{
      this.studyClassDetailId = studyClassDetailId['studyclass-detail-id'];
      this.studyClassDetailServiceSubscription = this.studyClassDetailService.getById(studyClassDetailId['studyclass-detail-id']).subscribe(result=>{
        this.studyClassName = result.data.className;
      });
    });
  }

  ngOnDestroy(): void {
    this.studyClassDetailServiceSubscription?.unsubscribe();
  }
}
