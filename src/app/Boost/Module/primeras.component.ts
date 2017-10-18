import { Component, OnInit } from '@angular/core';
import { Division } from '../Model/division';
import { DivisionService } from '../Services/division.service';

@Component({
    selector: 'primeras-partidas',
    templateUrl: 'primeras.component.html',
    styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']
})

export class PrimerasComponent implements OnInit {
    divisions: Division[];
    subDivsC: Division[];
    currentDiv: any;
    currentSubDiv: any;
    currentName: string = 'Bronce 5';

    cantidadVictorias: number = 5;

    costo: number = 0;
    count: boolean = false;

    constructor( private divService: DivisionService ) {}

    ngOnInit() {
            this.divService.getDivisions().then(divisions => this.init(divisions));
    }

    init (divisions: Division[]) {
        this.divisions = divisions;
        this.subDivsC = divisions[0].value.subDivs;
        this.currentDiv = divisions[0].value;
        this.currentSubDiv = divisions[0].value.subDivs[0].value;
        this.calculateCost();
    }

    changeCurrent() {
        this.subDivsC = this.currentDiv.subDivs;
        this.currentSubDiv = this.currentDiv.subDivs[0].value;
        this.currentName = this.currentSubDiv.name;
        this.calculateCost();
    }

    changeCurrentSub() {
        this.currentName = this.currentSubDiv.name;
        this.calculateCost();
    }

    calculateCost() {
        this.costo = this.currentSubDiv.pricepp * this.cantidadVictorias;
    }
}
