import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from "../../../../service/api.service";
import { StudyClassService } from "../../../../service/studyclass.service";

@Component({
  selector: "studyclass-teacher-menu",
  templateUrl: "./studyclass-teacher-menu.component.html",
})
export class StudyClassTeacherMenuComponent implements OnInit , OnDestroy {
  constructor(private apiService :ApiService, private activatedRoute :ActivatedRoute, private studyClassService :StudyClassService){}

  idUsers ?: number;
  studyClassId !: number;
  studyClassName!: string;
  studyClassSubscription?: Subscription;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result=>{
      this.studyClassId = result['study-class-id'];
      this.studyClassSubscription = this.studyClassService.getById(result['study-class-id']).subscribe(result =>{
        this.studyClassName = result.data.studyClassName;
      })
    });
    this.idUsers = this.apiService.getAllData()?.id;
  }

  ngOnDestroy(): void {
    this.studyClassSubscription?.unsubscribe();
  }
}
