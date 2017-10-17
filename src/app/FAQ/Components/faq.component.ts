import { Component } from '@angular/core';
import {style, animate, transition, trigger} from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
  styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class FaqComponent {
  selected: number;


  changeShow(aNumber: number) {
    if (this.selected === aNumber) {
      this.selected = 99;
    } else {
    this.selected = aNumber;
    }
  }
}
