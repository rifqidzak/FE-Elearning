import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { CollectionListStudentComponent } from "./collection-list-student/collection-list-student.component";
import { CollectionStudentCompenent } from "./collection-student/collection-student.component";
import { CollectionTeacherScoringComponent } from "./collection-teacher-scoring/collection-teacher-scoring.component";
import { CollectionTeacherComponent } from "./collection-teacher/collection-teacher.component";


const routes: Routes = [
  {
    path: "student/:type/:studyclass-detail-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: CollectionListStudentComponent
      }
    ]
  },
  {
    path: "student/:type/:studyclass-detail-id/:schedule-id/collection",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: CollectionStudentCompenent
      }
    ]
  },
  {
    path: "teacher/:type/:studyclass-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: CollectionTeacherComponent
      }
    ]
  },
  {
    path: "teacher/:type/:studyclass-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: CollectionTeacherComponent
      }
    ]
  },
  {
    path: "teacher/:type/scoring/:studyclass-id/:collection-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: CollectionTeacherScoringComponent
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
export class CollectionRouting { }
