import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TheoryListStudentComponent } from "./theory-list-student/theory-list-student.component";
import { TheoryMenuStudentComponent } from "./theory-menu-student/theory-menu-student";
import { TheoryRouting } from "./theory.routing";



@NgModule({
  declarations: [TheoryListStudentComponent, TheoryMenuStudentComponent
  ],
  imports: [TheoryRouting, RouterModule, CommonModule
  ],
  exports: [TheoryListStudentComponent, TheoryMenuStudentComponent
  ],
})
export class TheoryModule {}
