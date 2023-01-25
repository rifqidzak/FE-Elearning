import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { ForumDetailComponent } from "./forum-detail/forum-detail.component";
import { ForumStudentInsertComponent } from "./forum-student-insert/forum-student-insert.component";
import { ForumStudentComponent } from "./forum-student/forum-student.component";
import { ForumTeacherComponent } from "./forum-teacher/forum-teacher.component";


const routes: Routes = [
  {
    path: "student/:studyclass-detail-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ForumStudentComponent
      }
    ]
  },
  {
    path: "student/:studyclass-detail-id/insert",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ForumStudentInsertComponent
      }
    ]
  },
  {
    path: ":studyclass-detail-id/detail",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ForumDetailComponent
      }
    ]
  },
  {
    path: ":forum/:studyclass-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ForumTeacherComponent
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
export class ForumRouting { }
