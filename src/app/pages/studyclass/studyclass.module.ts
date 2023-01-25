import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StudyClassDetailListComponent } from "./studyclass-detail-list/studyclass-detail-list.component";
import { StudyClassDetailMenuComponent } from "./studyclass-detail-menu/studyclass-detail-menu.component";
import { StudyClassStudentEnrollComponent } from "./studyclass-student-enroll/studyclass-student-enroll.component";
import { StudyClassSuperAdminListComponent } from "./studyclass-superadmin/studyclass-superadmin-list/studyclass-superadmin-list.component";
import { StudyClassSuperAdminUpdateComponent } from "./studyclass-superadmin/studyclass-superadmin-update/studyclass-superadmin-update.component";
import { StudyClassSuperAdminInsertComponent } from "./studyclass-superadmin/studyclass-superamin-insert/studyclass-superadmin-insert.component";
import { StudyClassTeacherListComponent } from "./studyclass-teacher/studyclass-teacher-list/studyclass-teacher-list.component";
import { StudyClassTeacherMenuComponent } from "./studyclass-teacher/studyclass-teacher-menu/studyclass-teacher-menu.component";
import { StudyClassRouting } from "./studyclass.routing";

@NgModule({
  declarations: [StudyClassSuperAdminListComponent, StudyClassSuperAdminInsertComponent,
    StudyClassSuperAdminUpdateComponent, StudyClassStudentEnrollComponent, StudyClassDetailListComponent,
    StudyClassDetailMenuComponent, StudyClassTeacherListComponent, StudyClassTeacherMenuComponent
  ],
  imports: [StudyClassRouting, RouterModule, CommonModule, FormsModule
  ],
  exports: [StudyClassSuperAdminListComponent, StudyClassSuperAdminInsertComponent,
    StudyClassStudentEnrollComponent, StudyClassStudentEnrollComponent, StudyClassDetailListComponent,
    StudyClassDetailMenuComponent, StudyClassTeacherListComponent, StudyClassTeacherMenuComponent
  ],
})
export class StudyClassModule { }
