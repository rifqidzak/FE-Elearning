import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentAdminComponent } from "../../components/content/content-admin/content-admin.component";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { StudyClassDetailListComponent } from "./studyclass-detail-list/studyclass-detail-list.component";
import { StudyClassDetailMenuComponent } from "./studyclass-detail-menu/studyclass-detail-menu.component";
import { StudyClassStudentEnrollComponent } from "./studyclass-student-enroll/studyclass-student-enroll.component";
import { StudyClassSuperAdminListComponent } from "./studyclass-superadmin/studyclass-superadmin-list/studyclass-superadmin-list.component";
import { StudyClassSuperAdminUpdateComponent } from "./studyclass-superadmin/studyclass-superadmin-update/studyclass-superadmin-update.component";
import { StudyClassSuperAdminInsertComponent } from "./studyclass-superadmin/studyclass-superamin-insert/studyclass-superadmin-insert.component";
import { StudyClassTeacherListComponent } from "./studyclass-teacher/studyclass-teacher-list/studyclass-teacher-list.component";
import { StudyClassTeacherMenuComponent } from "./studyclass-teacher/studyclass-teacher-menu/studyclass-teacher-menu.component";


const routes: Routes = [
  {
    path: "superadmin",
    component: ContentAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassSuperAdminListComponent
      }
    ]
  },
  {
    path: "superadmin/insert",
    component: ContentAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassSuperAdminInsertComponent
      }
    ]
  },
  {
    path: "superadmin/update/:id",
    component: ContentAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassSuperAdminUpdateComponent
      }
    ]
  },
  {
    path: "student",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassStudentEnrollComponent
      }
    ]
  },
  {
    path: "student/detail/list/:id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassDetailListComponent
      }
    ]
  },
  {
    path: "student/detail/menu/:study-class-detail-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassDetailMenuComponent
      }
    ]
  },
  {
    path: "teacher/:teacher-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassTeacherListComponent
      }
    ]
  },
  {
    path: "teacher/detail/:study-class-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: StudyClassTeacherMenuComponent
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
export class StudyClassRouting { }
