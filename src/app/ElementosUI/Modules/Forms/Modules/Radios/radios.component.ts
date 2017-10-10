import { Component } from '@angular/core';

@Component({
    selector: 'form-radios',
    template: `
    <div class="radio">
        <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="checked"/>
        La opción 1 es esto y aquello&mdash;asegurate de incluir por que es genial
        </label>
    </div>
    <div class="radio">
        <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
        La opción 2 puede ser otra cosa, y al seleccionarla deseleccionas la anterior
        </label>
    </div>
    <div class="radio disabled">
        <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="disabled"/>
        La opción 3 está deshabilitada
        </label>
    </div>
    `
})

export class RadiosComponent {}
