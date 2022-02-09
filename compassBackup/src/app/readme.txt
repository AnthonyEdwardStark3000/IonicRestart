1.Done basic design @ home.page.html
2.Installed device orientation plugins for cordova
Refer :-
https://ionicframework.com/docs/native/device-orientation

3. Imported this @ app.module.ts
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx';
4.Added it in the proviers array of @ app.module.ts
5.Added the import @ home.page.ts
6.Created a constructor in @ home.page.ts and injected it , inject Platform as well inorder to implement it.
7. Let the class @ home.page.ts implement OnInit to implement basic operations on loading of the page
8.Assign an variable and read the value during rotation (i.e) magneticHeading
9.Move towards the image rotation hint :- having an Id for them will be helpful to rotate them individually.
10.Method rotateCompass is created in home.page.ts to manage the image rotation.
11.Casting it to an html element , select the image by id and using the transform property of css.
12.For creating dynamic dirction instead of static N create another variable @home.page.ts
13.Create method getCardinal and implement it. call it in deviceSubscription and deviceCompassinfo()
14.Using Ng coordinates i.e angular coordinates to get the lattitude and longitude.And API to get the lat and long of user.
15.visit npmjs.com and check for the angular coordinates.
    // "angular-coordinates": "^1.0.0",
