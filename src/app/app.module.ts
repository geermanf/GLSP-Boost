import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Components/home.component';
import { FaqComponent } from './FAQ/Components/faq.component';
import { ContactComponent } from './Contacto/Components/contact.component';
import { FormComponent } from './Contacto/Components/form.component';
import { BoostComponent } from './Boost/Components/boost.component';
import { TerminosComponent } from './Terminos/Components/terminos.component';



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
  ],
  exports: [FormComponent],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
