/* eslint-disable @angular-eslint/contextual-lifecycle */
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule implements OnInit {
  constructor(private screenOrientation: ScreenOrientation, private platform: Platform){}
  ngOnInit(): void {
    this.platform.ready().then(()=>{// get current
          console.log('Current position');
          console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
        });
       }
}
