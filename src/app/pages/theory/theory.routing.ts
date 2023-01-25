import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { TheoryListStudentComponent } from "./theory-list-student/theory-list-student.component";
import { TheoryMenuStudentComponent } from "./theory-menu-student/theory-menu-student";


const routes: Routes = [
  {
    path: "student/:studyclass-detail-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: TheoryMenuStudentComponent
      }
    ]
  },
  {
    path: "student/:studyclass-detail-id/list",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: TheoryListStudentComponent
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
export class TheoryRouting { }
