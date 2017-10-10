
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Configure SystemJS
import './assets/js/jquery.js';

// Bootstrap Core JavaScript
import './assets/js/bootstrap.min.js';

// Menu Toggle Script
import './assets/js/menu-toggle.js';
import './assets/js/navbar-scroll.js';

// Animaciones en anclas
import './assets/js/anchors-animation.js';


platformBrowserDynamic().bootstrapModule(AppModule);
