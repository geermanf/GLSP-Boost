import { Component, OnInit } from '@angular/core';
import { Division } from '../Model/division';
import { DivisionService } from '../Services/division.service';

@Component({
    selector: 'subir-divisiones',
    templateUrl: 'subir.component.html',
    styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']

})

export class SubirComponent implements OnInit {
    divisions: Division[];
    subDivsC: Division[];
    subDivsD: Division[];
    currentDiv: any;
    currentSubDiv: any;
    currentName: string = 'Bronce 5';

    desiredDiv: any;
    desiredSubDiv: any;
    desiredName: string = 'Bronce 5';

    costo: number = 0;
    count: boolean = false;

    constructor( private divService: DivisionService ) {}

    ngOnInit() {
            this.divService.getDivisions().then(divisions => this.init(divisions));
    }

    init (divisions: Division[]) {
        this.divisions = divisions;
        this.subDivsC = divisions[0].value.subDivs;
        this.subDivsD = divisions[0].value.subDivs;
        this.currentDiv = divisions[0].value;
        this.currentSubDiv = divisions[0].value.subDivs[0].value;
        this.desiredDiv = divisions[0].value;
        this.desiredSubDiv = divisions[0].value.subDivs[0].value;
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

    changeDesired() {
        this.subDivsD = this.desiredDiv.subDivs;
        this.desiredSubDiv = this.desiredDiv.subDivs[0].value;
        this.desiredName = this.desiredSubDiv.name;
        this.calculateCost();
    }

    changeDesiredSub() {
        this.desiredName = this.desiredSubDiv.name;
        this.calculateCost();
    }

    calculateCost() {
        this.costo = 0;
        if (this.currentSubDiv.id < this.desiredSubDiv.id) {
            this.divisions.forEach(division => {
                division.value.subDivs.forEach(subDiv => {

                    if (subDiv.value.name === this.currentName ) {
                        this.count = true;
                    } else if (this.count) {
                        this.costo = this.costo + subDiv.value.price;
                    }
                    if (subDiv.value.name === this.desiredName ) {
                        this.count = false;
                    }

                });
            });
        }
    }
}
