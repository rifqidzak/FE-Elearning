import { Component } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: 'navbar-admin',
    templateUrl: './navbar-admin.component.html'})
export class NavbarAdminComponent{
  constructor(private apiService :ApiService){}

  logout(){
    this.apiService.logout()
  }
}
