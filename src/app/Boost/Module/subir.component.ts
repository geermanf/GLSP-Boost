import { Component, OnInit } from '@angular/core';
import { Division } from '../Model/division';
import { DivisionService } from '../Services/division.service';

@Component({
    selector: 'subir-divisiones',
    templateUrl: 'subir.component.html'
})

export class SubirComponent implements OnInit {
    divisions: Division[];
    current: Division;
    desired: Division;

    constructor( private divService: DivisionService ) {}

    ngOnInit() {
        this.divService.getDivisions().then(divisions => this.divisions = divisions);
     }
}