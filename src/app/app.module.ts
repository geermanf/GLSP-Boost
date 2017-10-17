import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material';

import {TabViewModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Components/home.component';
import { FaqComponent } from './FAQ/Components/faq.component';
import { ContactComponent } from './Contacto/Components/contact.component';
import { FormComponent } from './Contacto/Components/form.component';
import { TerminosComponent } from './Terminos/Components/terminos.component';
import { BoostComponent } from './Boost/Components/boost.component';

import { NetasComponent } from './Boost/Module/netas.component';
import { PrimerasComponent } from './Boost/Module/primeras.component';
import { SubirComponent } from './Boost/Module/subir.component';
import { Tab } from './Boost/Components/tab.component';
import { TabsComponent } from './Boost/Components/tabs.component';



import { DivisionService } from './Boost/Services/division.service';
import { AppService } from './Contacto/Services/contacto.service';

import {PartialModule} from './Partials/partials.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ScrollToModule.forRoot(),
    RouterModule,
    TabViewModule,
    MatSelectModule,

    AppRoutingModule,
    PartialModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    BoostComponent,
    FormComponent,
    TerminosComponent,

    NetasComponent,
    PrimerasComponent,
    SubirComponent,
    TabsComponent,
    Tab,
  ],
  exports: [FormComponent, NetasComponent, PrimerasComponent, SubirComponent],
  providers: [AppService, DivisionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
