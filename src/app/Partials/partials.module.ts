import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from 'ng2-scroll-to';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports de estructura
import { FooterComponent } from './Modules/Estructura/Components/footer.component';
import { SidebarComponent } from './Modules/Estructura/Components/sidebar.component';
import { HeaderComponent} from './Modules/Estructura/Components/header.component';
// Imports de codeSnippet

import { RightMenuComponent } from './Modules/RightMenu/Components/rightMenu.component';


import { ClipboardModule } from 'ng2-clipboard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ClipboardModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,

    RightMenuComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    RightMenuComponent,
    HeaderComponent,
  ],
  providers: [
  ],
})
export class PartialModule {}
