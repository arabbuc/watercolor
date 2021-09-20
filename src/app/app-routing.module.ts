import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { WcardComponent } from './components/wcard/wcard.component';
const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'about',component:SobremiComponent},
  {path:'contact',component:WcardComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] })
export class AppRoutingModule { }