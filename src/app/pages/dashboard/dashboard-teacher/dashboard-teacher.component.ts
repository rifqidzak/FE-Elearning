import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
  selector: 'dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html'
})
export class DashboardTeacherComponent implements OnInit {
  idUsers?: number;
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.idUsers = this.apiService.getAllData()?.id;
  }

}
