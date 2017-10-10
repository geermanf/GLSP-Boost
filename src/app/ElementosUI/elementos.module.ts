import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ElementosRoutingModule} from './elementos-routing.module';
import {PartialModule} from '../Partials/partials.module';

import { ElementosButtonsComponent } from './Modules/Buttons/Components/elementos-Buttons.component';
import { ElementosFormsComponent } from './Modules/Forms/Components/elementos-Forms.component';

import {CheckBoxesComponent} from './Modules/Forms/Modules/Checkboxes/checkboxes.component';
import {RadiosComponent} from './Modules/Forms/Modules/Radios/radios.component';
import {SelectComponent} from './Modules/Forms/Modules/Select/select.component';

import { ElementosIconsComponent } from './Modules/Icons/Components/elementos-Icons.component';
import { ElementosInlineComponent } from './Modules/Inline/Components/elementos-Inline.component';
import { ElementosListComponent } from './Modules/List/Components/elementos-List.component';
import { ElementosMenuComponent } from './Modules/Menu/Components/elementos-Menu.component';
import { ElementosTitleComponent } from './Modules/Title/Components/elementos-Title.component';
import { ElementosBasicTableComponent } from './Modules/Tables/Modules/table.component';
import {ElementosTablesComponent} from './Modules/Tables/Components/elementos-tables.component';

import { BasicComponent } from './Modules/Buttons/Modules/basic.component';

import { TitleComponent } from './Modules/Title/Modules/title.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ScrollToModule.forRoot(),
    RouterModule,
    PartialModule,
    ElementosRoutingModule,
  ],
  declarations: [
    ElementosButtonsComponent,
    ElementosFormsComponent,
    ElementosIconsComponent,
    ElementosInlineComponent,
    ElementosListComponent,
    ElementosMenuComponent,
    ElementosTitleComponent,
    ElementosBasicTableComponent ,
    ElementosTablesComponent,
    BasicComponent,

    TitleComponent,

    CheckBoxesComponent,
    RadiosComponent,
    SelectComponent
  ],
  exports: [
    ElementosButtonsComponent
],
})
export class ElementosModule {}
