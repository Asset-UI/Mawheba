import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneralViewComponent} from './layout/general-view/general-view.component';

const routes: Routes = [
  { path: 'GVC', component: GeneralViewComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
