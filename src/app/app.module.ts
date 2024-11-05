import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MediaComponent } from './components/media/media.component';
import { DonateToUsComponent } from './components/donate-to-us/donate-to-us.component';
import { IdolsAndTemplesComponent } from './components/idols-and-temples/idols-and-temples.component';
import { NearbyTemplesComponent } from './components/nearby-temples/nearby-temples.component';
import { DonationHomeComponent } from './components/donate-to-us/donation-home/donation-home.component';
import { OnlineComponent } from './components/donate-to-us/online/online.component';
import { OfflineComponent } from './components/donate-to-us/offline/offline.component';
import { DonationsFormComponent } from './components/donate-to-us/donations-form/donations-form.component';
import { IdolsAndTemplesHomeComponent } from './components/idols-and-temples/idols-and-temples-home/idols-and-temples-home.component';
import { LakshmiJanardanaComponent } from './components/idols-and-temples/lakshmi-janardana/lakshmi-janardana.component';
import { DakshinaKaliComponent } from './components/idols-and-temples/dakshina-kali/dakshina-kali.component';
import { FirstComponentComponent } from './components/login/first-component/first-component.component';
import { SecondComponentComponent } from './components/login/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    MediaComponent,
    DonateToUsComponent,
    IdolsAndTemplesComponent,
    NearbyTemplesComponent,
    DonationHomeComponent,
    OnlineComponent,
    OfflineComponent,
    DonationsFormComponent,
    IdolsAndTemplesHomeComponent,
    LakshmiJanardanaComponent,
    DakshinaKaliComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
