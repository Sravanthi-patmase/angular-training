import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { UserInfoComponent } from './user-info/user-info.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidebarModule } from 'ng-sidebar';
import { SidebarDirective } from './sidebar.directive';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ChartsModule } from 'ng2-charts';
import { AppHeaderComponent } from './app-header/app-header.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedServices } from './common/shared.service';
import { ColorDirectiveDirective } from './color-directive.directive';
import { LoginService } from './common/login.service';

import { TokenInterceptorService } from './common/http.interceptors';
// import { ClientDetailsComponent } from './client-details/client-details.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { SweetAlertService } from 'ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    LoginComponentComponent,
    SearchFilterPipe,
    UserInfoComponent,
    SidebarDirective,
    SideMenuComponent,
    AppFooterComponent,
    ProjectListComponent,
    AppHeaderComponent,
    EmpRegistrationComponent,
    ColorDirectiveDirective,
    // ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule
    // SweetAlert2Module.forRoot()
  ],
  providers: [
    // SweetAlertService
    SharedServices,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
