import {Component, OnDestroy, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../service/api.service';
import { StudyClassDetailService } from '../../../service/studyclass-detail.service';
@Component({
  selector: 'studyclass-detail-menu',
  templateUrl: './studyclass-detail-menu.component.html',
})
export class StudyClassDetailMenuComponent implements OnInit, OnDestroy{
  userId? :number;
  studyClassDetailId? :number;
  studyClassName? :string;
  private studyClassDetailServiceSubscription?: Subscription;
  constructor(private apiService : ApiService, private activatedRoute :ActivatedRoute, private studyClassDetailService:StudyClassDetailService){}

  ngOnInit(): void {
    this.userId = this.apiService.getAllData()?.id;
    this.activatedRoute.params.subscribe(studyClassId =>{
      this.studyClassDetailId = studyClassId['study-class-detail-id'];
      this.studyClassDetailServiceSubscription = this.studyClassDetailService.getById(studyClassId['study-class-detail-id']).subscribe(result=>{
        this.studyClassName = result.data.className;
      });
    })
  }
  ngOnDestroy(): void {
    this.studyClassDetailServiceSubscription?.unsubscribe();
  }
}
