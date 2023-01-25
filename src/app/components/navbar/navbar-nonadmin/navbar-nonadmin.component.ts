import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseUrl } from "../../../constant/base-url-enum";
import { RoleCode } from "../../../constant/role-code-enum";
import { ApiService } from "../../../service/api.service";

@Component({
  selector: 'navbar-nonadmin',
  templateUrl: './navbar-nonadmin.component.html'
})
export class NavbarNonAdminComponent implements OnInit {
  constructor(private apiService: ApiService, router: Router) {}
  BaseUrl :string = BaseUrl.BASE_URL;
  checkTeacher: boolean = false;
  checkStudent: boolean = false;
  IdPhoto?: number;
  nameUsers?: string;
  idUsers?: number;
  ngOnInit(): void {
    this.init();
  }

  init(){
    this.idUsers = this.apiService.getAllData()?.id;
    this.IdPhoto = this.apiService.getAllData()?.photoId;
    this.nameUsers = this.apiService.getAllData()?.fullName;
    if (this.apiService.getAllData()?.roleCode == RoleCode.ROL02) {
      this.checkStudent = true;
    } else {
      this.checkTeacher = true;
    }
  }

  logout(){
    this.apiService.logout()
  }
}
