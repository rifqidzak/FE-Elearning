import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarNonAdminComponent } from './navbar-nonadmin/navbar-nonadmin.component';

@NgModule({
  declarations: [
    NavbarNonAdminComponent, FooterComponent, NavbarAdminComponent
  ],
  imports :[
    RouterModule, CommonModule,
  ],
  exports: [
    NavbarNonAdminComponent, FooterComponent, NavbarAdminComponent
  ],
})
export class NavbarModule { }
