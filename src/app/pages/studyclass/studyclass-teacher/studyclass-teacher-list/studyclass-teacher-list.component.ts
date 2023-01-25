import { ThisReceiver } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../../constant/base-url-enum";
import { StudyClassesDto } from "../../../../dto/studyclass/studyclasses-dto";
import { StudyClassService } from "../../../../service/studyclass.service";

@Component({
  selector: "studyclass-teacher-list",
  templateUrl: "./studyclass-teacher-list.component.html",
})
export class StudyClassTeacherListComponent implements OnInit, OnDestroy {
  BaseUrl :string = BaseUrl.BASE_URL;
  studyClassesDto : StudyClassesDto = new StudyClassesDto();
  private studyClassGetAllByTeacherSubscription?: Subscription;
  constructor(private studyClassService :StudyClassService, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result =>{
      this.studyClassGetAllByTeacherSubscription = this.studyClassService.getByTeacherSide(result['teacher-id']).subscribe(result =>{
        this.studyClassesDto = result;
      })
    })
  }
  ngOnDestroy(): void {
    this.studyClassGetAllByTeacherSubscription?.unsubscribe();
  }
}
