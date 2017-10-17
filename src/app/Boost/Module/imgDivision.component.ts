import { Component, Input } from '@angular/core';

@Component({
    selector: 'img-division',
    templateUrl: 'imgDivision.component.html'
})

export class ImgDivisionComponent {
    @Input() name: string;

    constructor() { }


}
