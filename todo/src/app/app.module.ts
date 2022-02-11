import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule],
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    // provideAnalytics(() => getAnalytics()),
    // providePerformance(() => getPerformance())],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     ScreenTrackingService,
     UserTrackingService
    ],

  bootstrap: [AppComponent],
})
export class AppModule {}
