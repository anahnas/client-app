import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationService} from './registration/registration.service';
import {LoginService} from './login/login.service';
import {CcadminComponent} from './ccadmin/registerClinicAdmin/ccadmin.component';
import {CcadminRegisterClinicComponent} from './ccadmin/registerClinic/ccadminregisterclinic.component';
import {CcadminService} from './ccadmin/registerClinicAdmin/ccadmin.service';
import {FooterComponent} from './basic-components/footer/footer.component';
import {CcadminregisterclinicService} from './ccadmin/registerClinic/ccadminregisterclinic.service';
import {CcadminInfoComponent} from './ccadmin/adminInfo/ccadminInfo.component';
import {CcadminPassComponent} from './ccadmin/passwordChanging/ccadminPass.component';
import {CcadminCreateDrugCodeComponent} from './ccadmin/drugCode/ccadminCreateDrugCode.component';
import {CcadminCreateDrugCodeService} from './ccadmin/drugCode/ccadminCreateDrugCode.service';
import {RequestsComponent} from './requests/requests.component';
import {RequestsService} from './requests/requests.service';
import {Interceptor} from './intercepter/Interceptor';
import {AcceptComponent} from './accept/accept.component';
import {AcceptService} from './accept/accept.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'requests', component: RequestsComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'ccadmin', component: CcadminComponent},
  { path: 'registerClinic', component: CcadminRegisterClinicComponent},
  {path: 'ccadminInfo', component: CcadminInfoComponent},
  {path: 'ccadminPass', component: CcadminPassComponent},
  {path: 'ccadminDrug', component: CcadminCreateDrugCodeComponent},
  {path: 'accept', component: AcceptComponent},
  {path: 'accept/:id', component: AcceptComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    RequestsComponent,
    RegistrationComponent,
    CcadminComponent,
    CcadminRegisterClinicComponent,
    CcadminInfoComponent,
    CcadminPassComponent,
    CcadminCreateDrugCodeComponent,
    AcceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RegistrationService,
    LoginService,
    RequestsService,
    LoginService,
    CcadminService,
    CcadminregisterclinicService,
    CcadminCreateDrugCodeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AcceptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
