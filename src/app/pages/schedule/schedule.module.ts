import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ScheduleInsertComponent } from "./schedule-insert/schedule-insert.component";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ScheduleRouting } from "./schedule.routing";

@NgModule({
  declarations: [
    ScheduleListComponent, ScheduleInsertComponent
  ],
  imports: [
    RouterModule, ScheduleRouting
  ],
  exports: [
    ScheduleListComponent, ScheduleInsertComponent
  ],
})
export class ScheduleModule {}
