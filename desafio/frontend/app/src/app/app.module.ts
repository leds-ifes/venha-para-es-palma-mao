import { HttpClient, HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CandidatoPage} from'../pages/candidato/candidato';
import { ConcursoPage } from './../pages/concurso/concurso';
import { HttpProvider } from '../providers/http/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CandidatoPage,
    ConcursoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CandidatoPage,
    ConcursoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    HttpClient
  ]
})
export class AppModule {}
