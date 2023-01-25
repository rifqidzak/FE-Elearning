import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AttendanceListComponent } from "./attendance-student/attendance-list-student.component";
import { AttendanceTeacherList } from "./attendance-teacher/attendance-teacher-list/attendance-teacher-list.component";
import { AttendanceRouting } from "./attendance.routing";




@NgModule({
  declarations: [AttendanceListComponent, AttendanceTeacherList
  ],
  imports: [AttendanceRouting, RouterModule, CommonModule, FormsModule
  ],
  exports: [AttendanceListComponent, AttendanceTeacherList
  ],
})
export class AttendanceModule {}
