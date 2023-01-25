import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarModule } from '../navbar/navbar.module';
import { ContentAdminComponent } from './content-admin/content-admin.component';
import { ContentNonAdminComponent } from './content-nonadmin/content-nonadmin.component';

@NgModule({
  declarations: [
    ContentNonAdminComponent, ContentAdminComponent
  ],
  imports: [
    RouterModule, NavbarModule
  ],
  exports: [
    ContentNonAdminComponent, ContentAdminComponent
  ],
})
export class ContentModule { }
