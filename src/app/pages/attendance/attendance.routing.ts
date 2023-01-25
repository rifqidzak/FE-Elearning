import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { AttendanceListComponent } from "./attendance-student/attendance-list-student.component";
import { AttendanceTeacherList } from "./attendance-teacher/attendance-teacher-list/attendance-teacher-list.component";


const routes: Routes = [
    {
        path: "student/:type/:studyclass-detail-id",
        component: ContentNonAdminComponent,
        children: [
            {
                path: "",
                component: AttendanceListComponent
            }
        ]
    },
    {
      path: "student/:type/:studyclass-detail-id",
      component: ContentNonAdminComponent,
      children: [
          {
              path: "",
              component: AttendanceListComponent
          }
      ]
    },
    {
      path: "student/:type/:studyclass-detail-id",
      component: ContentNonAdminComponent,
      children: [
          {
              path: "",
              component: AttendanceListComponent
          }
      ]
    },
    {
      path: "teacher/:type/:studyclass-id",
      component: ContentNonAdminComponent,
      children: [
          {
              path: "",
              component: AttendanceTeacherList
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
export class AttendanceRouting{}
