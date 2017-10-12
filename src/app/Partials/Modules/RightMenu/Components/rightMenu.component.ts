import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { getTitles } from './titulos';
@Component({
    selector: 'right-menu',
    styleUrls: ['../../../../../assets/css/estructura.css', '../../../../../assets/css/estilos.css', 'style.css'],
    templateUrl: 'rightMenu.component.html'
})

export class RightMenuComponent {

    @Input() pagina: string;
    show: string;
    state: string = 'none';
    activeKey: string;
    titulos: {key: string; value: string[]; }[];

    constructor(public el: ElementRef) {}

    ngOnInit() {
        this.titulos = getTitles(this.pagina);
    }

    @HostListener('window:scroll', ['$event'])
    activeElement() {
        let retState;
        let retKey;
        this.titulos.forEach(idElement => {
            idElement.value.forEach(element => {

                const aux = document.getElementById(element).offsetTop;
                const componentPosition = aux - 50;
                const scrollPosition = window.pageYOffset;

                if (scrollPosition >= componentPosition) {
                    retState = element;
                    retKey = idElement.key;
                }

            });
        });
        this.state = retState;
        this.activeKey = retKey;
    }

    changeShow(titulo: string) {
        if (this.show !== titulo) {
            this.show = titulo;
        } else {
            this.show = '';
        }
    }
}

