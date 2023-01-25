import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentNonAdminComponent } from "../../components/content/content-nonadmin/content-nonadmin.component";
import { ExamMenuStudentComponent } from "./exam-menu-student/exam-menu-student.component";


const routes: Routes = [
    {
        path: "student/:studyclass-detail-id",
        component: ContentNonAdminComponent,
        children: [
            {
                path: "",
                component: ExamMenuStudentComponent
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
export class ExamRouting{}
