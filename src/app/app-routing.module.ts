import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './application/error/error.component';
import { HomeComponent } from './application/home/home.component';
import { TutorialsComponent } from './application/tutorials/tutorials.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UpdateComponent } from './application/crud/update/update.component';

const routes: Routes = [
  {path:'tutorial',
  children:[
    {path:':id', component: TutorialsComponent}
  ]},
  {path:'update/:Param', component: UpdateComponent},
  {path:'crud', component: ReadComponent},
  {path:'fun', component: FunComponent},
  {path:'contact', component: ContactComponent},
  {path:'form', component: ReactiveComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
