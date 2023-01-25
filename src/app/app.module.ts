import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { FilterTokenInterceptor } from './filter/filter-token.interceptor';
import { StudyClassModule } from './pages/studyclass/studyclass.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    StudyClassModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  exports:[
    AppComponent, LoginComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: FilterTokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
