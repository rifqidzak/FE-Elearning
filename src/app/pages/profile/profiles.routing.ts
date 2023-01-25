import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentAdminComponent } from "../../components/content/content-admin/content-admin.component";
import { ProfilesChangePasswordComponent } from "./profiles-change-password/profiles-change-password.component";
import { ProfilesChangePhotoComponent } from "./profiles-change-photo/profiles-change-photo.component";
import { ProfilesShowComponent } from "./profiles-show/profiles-show.component";

const routes : Routes = [
    {
        path:'',
        component: ContentAdminComponent,
        children: [
          {
            path: "",
            component: ProfilesShowComponent
          }
        ]
    },
    {
        path:'change-password',
        component: ContentAdminComponent,
        children: [
          {
            path: "",
            component: ProfilesChangePasswordComponent
          }
        ]
    },
    {
        path:'change-photo',
        component: ContentAdminComponent,
        children: [
          {
            path: "",
            component: ProfilesChangePhotoComponent
          }
        ]
    },

]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfilesRouting{}
