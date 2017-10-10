import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'header.component.html',
    selector: 'partial-header',
    styleUrls: ['../../../../../assets/css/main.css', '../../../../../assets/css/demo.css'],

})

export class HeaderComponent {
    @Input() title: string = 'titulo por defecto, envie parametro title';
    @Input() description: string = 'descripcion por defecto, envie parametro description';

}
