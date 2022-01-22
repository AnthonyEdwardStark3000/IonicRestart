import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLighton = false;
  constructor(
    private flashLight: Flashlight,
    private platform: Platform,
    private alertcontroller: AlertController)
  {

   }

  ngOnInit() {
  }

  lightOn(){
    this.isLighton =!this.isLighton;
    this.platform.ready().then(()=>{
      if(this.flashLight.available)
      {
        console.log('Yes it is available');
        this.flashLight.switchOn();
      }
      else
      {
        console.log('No it is unavailable');
        this.showAlert();
      }
    });
  }
  lightOff(){
    this.isLighton =!this.isLighton;
    this.flashLight.switchOff();
  }
  async showAlert()
  {
    const alert= await this.alertcontroller.create({
      header: 'Error',
      message: 'Flashlight is not available',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
