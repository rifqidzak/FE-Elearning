import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExamMenuStudentComponent } from "./exam-menu-student/exam-menu-student.component";
import { ExamRouting } from "./exam.routing";

@NgModule({
  declarations: [ExamMenuStudentComponent
  ],
  imports: [ExamRouting, RouterModule
  ],
  exports: [ExamMenuStudentComponent
  ],
})
export class ExamModule {}
