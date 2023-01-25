import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../constant/base-url-enum";
import { StudyClassesDetailDto } from "../../../dto/studyclass-detail/studyclasses-detail-dto";
import { ApiService } from "../../../service/api.service";
import { StudyClassDetailService } from "../../../service/studyclass-detail.service";

@Component({
  selector: "studyclass-detail-list",
    templateUrl: "./studyclass-detail-list.component.html",
})
export class StudyClassDetailListComponent implements OnInit, OnDestroy  {
  BaseUrl = BaseUrl.BASE_URL;
  studyClassesDetailDto : StudyClassesDetailDto = new StudyClassesDetailDto();
  studyClassesDetailGetAllSubscriptions?: Subscription
  constructor(private studyClassDetailService: StudyClassDetailService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result =>{
      this.studyClassesDetailGetAllSubscriptions = this.studyClassDetailService.getAllByStudent(result['id']).subscribe(studyClasses=>{
        this.studyClassesDetailDto = studyClasses;
      })
    })
  }
  ngOnDestroy(): void {
    this.studyClassesDetailGetAllSubscriptions?.unsubscribe();
  }

}
