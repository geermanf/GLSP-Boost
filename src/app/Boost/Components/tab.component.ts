import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']
})
export class Tab {
  @Input('tabTitle') title: string;
  @Input() active = false;
}