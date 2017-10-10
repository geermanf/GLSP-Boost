import { Component } from '@angular/core';
@Component({
  templateUrl: './elementos-Buttons.component.html',
  styleUrls: ['../../../../../assets/css/main.css', '../../../../../assets/css/demo.css']
})
export class ElementosButtonsComponent {
  show: boolean = false;
  isOpen: boolean[] = [false, false];

  changeShow() {
      this.show = !(this.show);
  }
  changeShowButton(i: number) {
    if (this.isOpen[i]) {
      this.isOpen[i] = false;
    } else {
      this.isOpen[i] = true;
    }
  }
}
