import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { ScheduleInsertComponent } from "./schedule-insert/schedule-insert.component";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";

const routes: Routes = [
  {
    path: ":studyclass-id",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ScheduleListComponent
      }
    ]
  },
  {
    path: ":studyclass-id/insert",
    component: ContentNonAdminComponent,
    children: [
      {
        path: "",
        component: ScheduleInsertComponent
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
export class ScheduleRouting { }
