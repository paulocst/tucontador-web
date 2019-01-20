import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountantComponent } from './components/accountant/accountant.component';
import { AccountantsComponent } from './components/accountants/accountants.component';
import { SocietyComponent } from './components/society/society.component';
import { SocietiesComponent } from './components/societies/societies.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  {path:'contadores', component:AccountantsComponent},
  {path:'contador/:id', component:AccountantComponent},
  {path:'sociedades', component:SocietiesComponent},
  //{path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '', component:HomeComponent, pathMatch: 'full'}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }