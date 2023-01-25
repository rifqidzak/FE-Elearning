import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BaseUrl } from "../../../constant/base-url-enum";
import { StudyClassDetailInsertReqDataDto } from "../../../dto/studyclass-detail/studyclass-detail-insert-req-dto";
import { StudyClassesDto } from "../../../dto/studyclass/studyclasses-dto";
import { StudyClassDetailService } from "../../../service/studyclass-detail.service";
import { StudyClassService } from "../../../service/studyclass.service";

@Component({
  selector: "studyclass-student-enroll",
    templateUrl: "./studyclass-student-enroll.component.html",
})
export class StudyClassStudentEnrollComponent implements OnInit, OnDestroy {
  studyClassId!:number;
  studyClassGetAllSubscription?: Subscription;
  BaseUrl :string = BaseUrl.BASE_URL;
  studyClassDetailInsertReqDto : StudyClassDetailInsertReqDataDto= new StudyClassDetailInsertReqDataDto();
  studyClassDetailInsertSubscription ?: Subscription;
  studyClassesDto: StudyClassesDto = new StudyClassesDto();
  constructor(private studyClassService :StudyClassService, private studyClassDetaiService: StudyClassDetailService){}
  ngOnInit(): void {
    this.init();
  }

  init(){
    this.studyClassGetAllSubscription = this.studyClassService.getAll().subscribe(result =>{
      this.studyClassesDto = result;
    });
  }
  clickGetStudyClassId(studyClassId:number){
    this.studyClassId = studyClassId;
    this.studyClassDetailInsertReqDto._studyClassId = this.studyClassId;
  }

  clickSubmitEnroll(){
    this.studyClassDetailInsertSubscription = this.studyClassDetaiService.insert(this.studyClassDetailInsertReqDto).subscribe(result=>{
      this.init();
    })
  }

  ngOnDestroy(): void {
    this.studyClassGetAllSubscription?.unsubscribe();
  }

}
