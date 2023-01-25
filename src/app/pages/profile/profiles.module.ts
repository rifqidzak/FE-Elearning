import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"; 
import { ProfilesChangePasswordComponent } from "./profiles-change-password/profiles-change-password.component";
import { ProfilesChangePhotoComponent } from "./profiles-change-photo/profiles-change-photo.component";
import { ProfilesShowComponent } from "./profiles-show/profiles-show.component";
import { ProfilesRouting } from "./profiles.routing";

@NgModule({
    declarations :[
        ProfilesShowComponent, ProfilesChangePasswordComponent, ProfilesChangePhotoComponent
    ],
    imports :[
        ProfilesRouting, RouterModule
    ],
    exports : [
        ProfilesShowComponent, ProfilesChangePasswordComponent, ProfilesChangePhotoComponent
    ]
})
export class ProfilesModule{}