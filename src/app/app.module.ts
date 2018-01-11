import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftpaneComponent } from './components/leftpane/leftpane.component';
import { ContentpaneComponent } from './components/contentpane/contentpane.component';
import { WelcomeComponent } from './components/contentcomponents/welcome/welcome.component';
import { ProfileComponent } from './components/contentcomponents/profile/profile.component';
import { UpgradeComponentComponent } from './components/upgrade-component/upgrade-component.component';

const ROUTES : Routes = [
  { path: 'updates', component: UpgradeComponentComponent },
  { path: '', component: ContentpaneComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftpaneComponent,
    ContentpaneComponent,
    WelcomeComponent,
    ProfileComponent,
    UpgradeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
