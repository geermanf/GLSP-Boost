import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from '@angular/common';

import { HomeComponent } from './Home/Components/home.component';
import { FaqComponent } from './FAQ/Components/faq.component';
import { ContactComponent } from './Contacto/Components/contact.component';
import { BoostComponent } from './Boost/Components/boost.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'buy-boost', component: BoostComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {}
