import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentModule } from "./components/content/content.module";
import { LoginComponent } from "./components/login/login.component";
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(users => users.UsersModule)
  },

  {
    path: 'studyclass',
    loadChildren: () => import('./pages/studyclass/studyclass.module').then(studyclass => studyclass.StudyClassModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./pages/profile/profiles.module').then(profile => profile.ProfilesModule)
  },
  {
    path: 'theory',
    loadChildren: () => import('./pages/theory/theory.module').then(theory => theory.TheoryModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./pages/attendance/attendance.module').then(attendance => attendance.AttendanceModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then(quiz => quiz.QuizModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then(collection => collection.CollectionModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./pages/exam/exam.module').then(exam => exam.ExamModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then(forum => forum.ForumModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then(schedule => schedule.ScheduleModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule, ContentModule
  ]
})
export class AppRouting { }
