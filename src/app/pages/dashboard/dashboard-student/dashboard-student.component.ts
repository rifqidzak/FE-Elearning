import { Component } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
  selector: 'dashboard-student',
  templateUrl: './dashboard-student.component.html'
})
export class DashboardStudentComponent{
  idUsers?: number;
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.idUsers = this.apiService.getAllData()?.id;
  }
}
