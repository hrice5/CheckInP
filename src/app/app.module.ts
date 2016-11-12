import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { RegistrationPage } from '../pages/registration/registration';
import { MapPage } from '../pages/map/map';
import { UserPage } from "../pages/user/user";


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
  
    ChatPage,
    RegistrationPage,
    MapPage,
    UserPage,

    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    ChatPage,
    RegistrationPage,
    MapPage,
    UserPage,
    
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
