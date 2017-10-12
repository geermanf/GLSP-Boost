import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'header.component.html',
    selector: 'partial-header',
    styleUrls: ['../../../../../assets/css/estructura.css', '../../../../../assets/css/estilos.css'],

})

export class HeaderComponent {
    @Input() title: string = 'titulo por defecto, envie parametro title';
    @Input() description: string = 'descripcion por defecto, envie parametro description';

}
