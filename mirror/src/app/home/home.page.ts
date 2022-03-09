import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Brightness } from '@ionic-native/brightness/ngx';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  screenWidth: number;
  screenHeight: number;
  screenBrightness: number;
  setBrightness: number;
  frameOne = true;
  frameTwo = true;
  frameThree = true;

  cameraPreviewOptions: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: this.cameraPreview.CAMERA_DIRECTION.FRONT,
    tapPhoto: false,
    toBack: true
  };

  constructor(private platform: Platform, private brightness: Brightness, private cameraPreview: CameraPreview  )
  {

  }
  ngOnInit(): void {
   this.platform.ready().then(()=> {
     //Reading the screen width and height
    //  console.log(window.screen.width);
    //  console.log(window.screen.height);
     this.cameraPreview.startCamera(this.cameraPreviewOptions).then((res)=> console.log(res)).catch(err => console.log(err));
     this.screenWidth = window.outerWidth; //another method to read screen width
     this.screenHeight = window.outerHeight; //another method to read screen height: ;
    //  this.brightness.setBrightness(0.5)
   });
  }
  changeFrame()
  {
    if(this.frameOne)
    {
      this.frameOne = false;
      this.frameTwo = true;
      this.frameThree = false;
      return;
    }
    if(this.frameTwo)
    {
      this.frameOne = false;
      this.frameTwo = false;
      this.frameThree = true;
      return;
    }
    if(this.frameThree)
    {
      this.frameOne = true;
      this.frameTwo = false;
      this.frameThree = false;
      return;
    }
  }
onChange(event)
{
  console.log(event);
  this.setBrightness = event.detail.value;
  this.brightness.setBrightness(this.setBrightness);
}
}
