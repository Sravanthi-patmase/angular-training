import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'load-clientDetails', component: ClientDetailsComponent
}]

@NgModule({
  declarations: [ ClientDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientsModule { }
