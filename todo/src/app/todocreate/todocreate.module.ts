import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodocreatePageRoutingModule } from './todocreate-routing.module';

import { TodocreatePage } from './todocreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodocreatePageRoutingModule
  ],
  declarations: [TodocreatePage]
})
export class TodocreatePageModule {}
