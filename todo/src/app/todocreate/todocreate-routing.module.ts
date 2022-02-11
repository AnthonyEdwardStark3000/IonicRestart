import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodocreatePage } from './todocreate.page';

const routes: Routes = [
  {
    path: '',
    component: TodocreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodocreatePageRoutingModule {}
