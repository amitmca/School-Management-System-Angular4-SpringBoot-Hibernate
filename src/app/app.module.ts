import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ChangetextDirective } from './changetext.directive';
import {SqrtPipe} from './pipes/app.sqrt';
import {CallRestApiService} from './services/call-rest-api.service';
import {StudentdetailserviceService} from './services/studentdetailservice/studentdetailservice.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { Http, HttpModule } from '@angular/http';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
 import { DynamicCompRendererDirective } from './directives/dynamic-comp-renderer.directive';
import { StudentEnrollComponent } from './student/student-enroll/student-enroll.component';
import { SubjectComponent } from './subject/subject.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChangetextDirective,
    SqrtPipe,
    LoginComponent,
    HomeComponent,
    StudentdetailComponent,
    TeacherComponent,
    TeacherDetailComponent,
     DynamicCompRendererDirective,
    StudentEnrollComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'student',
          component: StudentComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'studentdetail',
          component: StudentdetailComponent
        },
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'teacher',
          component: TeacherComponent
        },
        {
          path: 'student/enroll',
          component: StudentEnrollComponent
        },
        {
          path: 'subject',
          component: SubjectComponent
        },
        {
          path: 'admin',
          loadChildren: 'app/admin/admin.module#AdminModule'
        },
      ]
    )
  ],

  providers: [CallRestApiService, StudentdetailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
