import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {DropdownModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Components/home.component';
import { FaqComponent } from './FAQ/Components/faq.component';
import { ContactComponent } from './Contacto/Components/contact.component';
import { FormComponent } from './Contacto/Components/form.component';
import { TerminosComponent } from './Terminos/Components/terminos.component';
import { ContratoComponent } from './Terminos/Components/contrato.component';
import { BoostComponent } from './Boost/Components/boost.component';
import { WorkComponent } from './Work/Components/work.component';
import { FormWorkComponent } from './Work/Components/formWork.component';

import { NetasComponent } from './Boost/Module/netas.component';
import { PrimerasComponent } from './Boost/Module/primeras.component';
import { SubirComponent } from './Boost/Module/subir.component';
import { ImgDivisionComponent } from './Boost/Module/imgDivision.component';
import { Tab } from './Boost/Components/tab.component';
import { TabsComponent } from './Boost/Components/tabs.component';

import { ModalComponent } from './Boost/Components/modal.component';

import { RedirectComponent } from './Redirect/Components/redirect.component';

import { ModalModule } from 'ng2-modal';

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
    DropdownModule,
    SliderModule,
    ModalModule,

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
    ContratoComponent,

    RedirectComponent,

    ModalComponent,

    NetasComponent,
    PrimerasComponent,
    SubirComponent,
    ImgDivisionComponent,
    TabsComponent,
    Tab,

    WorkComponent,
    FormWorkComponent,
  ],
  exports: [FormComponent, NetasComponent, PrimerasComponent, SubirComponent, ImgDivisionComponent, ModalComponent],
  providers: [AppService, DivisionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
