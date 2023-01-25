import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { RoleCode } from "../../constant/role-code-enum";
import { LoginReqDto } from "../../dto/login/login-req-dto";
import { ApiService } from "../../service/api.service";
import { LoginService } from "../../service/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent{
  private loginSubscription?: Subscription;
  loginReqDto = new LoginReqDto();
  constructor(private LoginService: LoginService, private apiService: ApiService, private router: Router) { }

  submit(): void {
    this.loginSubscription = this.LoginService.login(this.loginReqDto).subscribe(result => {
      this.apiService.saveData(result)

      if (result.roleCode == RoleCode.ROL01) {
        this.router.navigateByUrl("/dashboard/superadmin")
      }
      else if (result.roleCode == RoleCode.ROL02) {
        this.router.navigateByUrl("/dashboard/student")
      } else {
        this.router.navigateByUrl("/dashboard/teacher")
      }
    })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
