import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }         from '../list/list.component';
import { ListCompleteComponent } from '../list-complete/list-complete.component';
import { ListIncompleteComponent } from '../list-incomplete/list-incomplete.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/list',
      pathMatch: 'full',
  },{
    path: 'list',
    component: ListComponent,
  },{
    path: 'complete',
    component: ListCompleteComponent,
  },{
    path: 'incomplete',
    component: ListIncompleteComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
