import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentAdminComponent } from "../../components/content/content-admin/content-admin.component";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { DashboardStudentComponent } from "./dashboard-student/dashboard-student.component";
import { DashboardSuperAdminComponent } from "./dashboard-superadmin/dashboard.superadmin.component";
import { DashboardTeacherComponent } from "./dashboard-teacher/dashboard-teacher.component";


const routes: Routes = [
    {
        path: "superadmin",
        component: ContentAdminComponent,
        children: [
            {
                path: "",
                component: DashboardSuperAdminComponent
            }
        ]
    },
    {
      path: "teacher",
      component: ContentNonAdminComponent,
      children: [
          {
              path: "",
              component: DashboardTeacherComponent
          }
      ]
  },
  {
    path: "student",
    component: ContentNonAdminComponent,
    children: [
        {
            path: "",
            component: DashboardStudentComponent
        }
    ]
},
];
@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule
    ]
})
export class DashboardRouting{}
