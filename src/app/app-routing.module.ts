import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MediaComponent } from './components/media/media.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
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

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'idols-and-temples', component: IdolsAndTemplesHomeComponent, children: [
    {path: '', component: IdolsAndTemplesComponent},
    {path: 'lakshmi-janardana', component: LakshmiJanardanaComponent},
    {path: 'dakshina-kali', component: DakshinaKaliComponent},
  ]},
  {path:'nearby-temples', component: NearbyTemplesComponent},
  {path:'media', component: MediaComponent},
  {path: 'donate-to-us', component: DonationHomeComponent, children:[
    {path: '', component: DonateToUsComponent},
    {path: 'online', component: OnlineComponent},
    {path: 'offline', component: OfflineComponent},
    {path: 'donations-form', component: DonationsFormComponent},
  ]},
  {path:'contact-us', component: ContactUsComponent},
  {path:'login', component: FirstComponentComponent, children:[
    {path:'', component: FirstComponentComponent},
    {path:'second', component: SecondComponentComponent}
  ]},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
