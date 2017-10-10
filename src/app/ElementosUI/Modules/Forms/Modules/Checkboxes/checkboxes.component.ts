import { Component } from '@angular/core';

@Component({
    selector: 'form-checkboxes',
    template: `
    <div class="checkbox">
        <label>
            <input type="checkbox" value=""/>La opción 1 es esto y aquello&mdash;asegurate de incluir por que es genial
        </label>
     </div>
    <div class="checkbox disabled">
        <label>
            <input type="checkbox" value="" disabled="disabled"/>La opción 2 esta deshabilitada
        </label>
     </div>
    `
})

export class CheckBoxesComponent {}
