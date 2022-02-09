import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
// import { TransformationType, Direction } from 'angular-coordinates';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  compassDegree: number;
  deviceSubscription: Subscription;
  cardinalPosition: string;
  // direction: Direction;
  // type: TransformationType;

  constructor(private deviceOrientation: DeviceOrientation, private platform: Platform) { }

  ngOnInit(){
  this.deviceCompassInfo();
  }

//unsubscription on exit.
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.deviceSubscription.unsubscribe();
  }


  deviceCompassInfo(){
   // Get the device current compass heading
this.deviceOrientation.getCurrentHeading().then(
  (data: DeviceOrientationCompassHeading) => {
    this.compassDegree = Math.floor(data.magneticHeading);
    this.cardinalPosition = this.getCardinals(this.compassDegree);
  },
  (error: any) => console.log(error)
);

// Watch the device compass heading change
this.deviceSubscription = this.deviceOrientation.watchHeading().subscribe(
  (data: DeviceOrientationCompassHeading) =>{
    this.rotateCompass(data.magneticHeading);
    this.compassDegree = Math.floor(data.magneticHeading);
    this.cardinalPosition = this.getCardinals(this.compassDegree);
  }
);
  }

  rotateCompass(deg){
    //casting the image to a html property
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (<HTMLElement>document.querySelector('#Compass')).style.transform = `rotate(${-deg}deg)`;
  }

  getCardinals(angle)
  {
     const directions = 8;
     const degree = 360 / directions;
     angle = angle+ degree /2;
     if(angle >=0* degree && angle <1* degree)
     {
       return 'N';
     }
     if(angle >=1* degree && angle <2* degree)
     {
       return 'NE';
     }
     if(angle >=2* degree && angle <3* degree)
     {
       return 'E';
     }
     if(angle >=3* degree && angle <4* degree)
     {
       return 'SE';
     }
     if(angle >=4* degree && angle <5* degree)
     {
       return 'S';
     }
     if(angle >=5* degree && angle <6* degree)
     {
       return 'SW';
     }
     if(angle >=6* degree && angle <7* degree)
     {
       return 'W';
     }
     if(angle >=7* degree && angle <8* degree)
     {
       return 'NW';
     }
     return 'N';
  }

}
