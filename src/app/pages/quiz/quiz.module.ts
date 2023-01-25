import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuizMenuStudentComponent } from "./quiz-menu-student/quiz-menu-student.component";
import { QuizRouting } from "./quiz.routing";
@NgModule({
  declarations: [QuizMenuStudentComponent
  ],
  imports: [QuizRouting, RouterModule
  ],
  exports: [QuizMenuStudentComponent
  ],
})
export class QuizModule {}
