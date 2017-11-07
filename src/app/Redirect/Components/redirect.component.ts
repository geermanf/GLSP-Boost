import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'redirect.component.html',
    styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']
})

export class RedirectComponent {
    constructor(private router: Router ) { }

    ngOnInit () {

        setTimeout((router: Router) => {
            this.router.navigate(['/contact']);
        }, 5000);
    }

}
