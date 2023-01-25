import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardStudentComponent } from "./dashboard-student/dashboard-student.component";
import { DashboardSuperAdminComponent } from "./dashboard-superadmin/dashboard.superadmin.component";
import { DashboardTeacherComponent } from "./dashboard-teacher/dashboard-teacher.component";
import { DashboardRouting } from "./dashboard.routing";

@NgModule({
    declarations: [DashboardSuperAdminComponent, DashboardTeacherComponent, DashboardStudentComponent
    ],
    imports: [DashboardRouting, RouterModule
    ],
    exports: [DashboardSuperAdminComponent, DashboardTeacherComponent, DashboardStudentComponent
    ],
})
export class DashboardModule{}
