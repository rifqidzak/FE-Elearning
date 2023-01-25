import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ForumDetailComponent } from "./forum-detail/forum-detail.component";
import { ForumStudentInsertComponent } from "./forum-student-insert/forum-student-insert.component";
import { ForumStudentComponent } from "./forum-student/forum-student.component";
import { ForumTeacherComponent } from "./forum-teacher/forum-teacher.component";
import { ForumRouting } from "./forum.routing";

@NgModule({
  declarations: [ ForumStudentComponent, ForumStudentInsertComponent, ForumDetailComponent, ForumTeacherComponent
  ],
  imports: [ RouterModule, ForumRouting

  ],
  exports: [  ForumStudentComponent, ForumStudentInsertComponent, ForumDetailComponent, ForumTeacherComponent
  ],
})
export class ForumModule {

}
