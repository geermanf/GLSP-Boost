import { Component } from '@angular/core';
@Component({
  templateUrl: './elementos-Menu.component.html',
  styleUrls: ['../../../../../assets/css/main.css', '../../../../../assets/css/demo.css']
})
export class ElementosMenuComponent {
  show: boolean = false;
  isOpen: boolean[] = [false, false];

  changeShow() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
  changeShowButton(i: number) {
    if (this.isOpen[i]) {
      this.isOpen[i] = false;
    } else {
      this.isOpen[i] = true;
    }
  }
}
