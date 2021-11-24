import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SideMenuComponent  } from './side-menu/side-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';

// const routes: Routes = [];
const routes: Routes = [ 
                              {
                                // path:"clients", loadChildren:'./clients/clients.module#ClientsModule'
                                path: 'clients',
                                loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
                              },
                              {path: "login",component: LoginComponentComponent},
                              {path: "sideMenu",component: SideMenuComponent },
                              {path: "empReg",component: EmpRegistrationComponent },
                              {path: "",redirectTo:"/login", pathMatch: "full"},
                              {path: "userInfo/:id", component: UserInfoComponent},

                              // {path:"sideMenu", component: SideMenuComponent,children:[
                                {path: "FirstComponentComponent", component: FirstComponentComponent},
                                {path: "secondComponentComponent", component: SecondComponentComponent},
                                {path: "projectlist", component: ProjectListComponent },
                              // ]}
                        ] 
                      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
