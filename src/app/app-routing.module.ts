import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaComponent } from './components/corona/corona.component';

const routes: Routes = [
  { path: '', component: CoronaComponent },
  { path: 'corona', component: CoronaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
