import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CollectionListStudentComponent } from "./collection-list-student/collection-list-student.component";
import { CollectionStudentCompenent } from "./collection-student/collection-student.component";
import { CollectionTeacherScoringComponent } from "./collection-teacher-scoring/collection-teacher-scoring.component";
import { CollectionTeacherComponent } from "./collection-teacher/collection-teacher.component";
import { CollectionRouting } from "./collection.routing";




@NgModule({
  declarations: [CollectionListStudentComponent, CollectionStudentCompenent, CollectionTeacherComponent, CollectionTeacherScoringComponent
  ],
  imports: [CollectionRouting, RouterModule, CommonModule, FormsModule
  ],
  exports: [CollectionListStudentComponent, CollectionStudentCompenent, CollectionTeacherComponent, CollectionTeacherScoringComponent
  ],
})
export class CollectionModule {}
