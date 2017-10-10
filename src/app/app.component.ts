import {Component} from '@angular/core';

@Component({
    template: '<router-outlet (deactivate)="onDeactivate()"></router-outlet>',
    selector: 'my-app'
})
export class AppComponent {

onDeactivate() {
    document.body.scrollTop = 0;
}

}
