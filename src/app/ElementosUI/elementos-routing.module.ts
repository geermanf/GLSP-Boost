import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElementosButtonsComponent } from './Modules/Buttons/Components/elementos-Buttons.component';
import { ElementosFormsComponent } from './Modules/Forms/Components/elementos-Forms.component';
import { ElementosIconsComponent } from './Modules/Icons/Components/elementos-Icons.component';
import { ElementosInlineComponent } from './Modules/Inline/Components/elementos-Inline.component';
import { ElementosListComponent } from './Modules/List/Components/elementos-List.component';
import { ElementosMenuComponent } from './Modules/Menu/Components/elementos-Menu.component';
import { ElementosTitleComponent } from './Modules/Title/Components/elementos-Title.component';
import {ElementosTablesComponent} from './Modules/Tables/Components/elementos-tables.component';

const routes: Routes = [
  { path: 'Buttons', component: ElementosButtonsComponent },
  { path: 'Forms', component: ElementosFormsComponent },
  { path: 'Icons', component: ElementosIconsComponent },
  { path: 'Inline', component: ElementosInlineComponent },
  { path: 'List', component: ElementosListComponent },
  { path: 'Menu', component: ElementosMenuComponent },
  { path: 'Title', component: ElementosTitleComponent },
  { path: 'Element-table', component: ElementosTablesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementosRoutingModule {}
