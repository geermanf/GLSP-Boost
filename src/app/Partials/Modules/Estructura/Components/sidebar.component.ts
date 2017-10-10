import { Component, Input } from '@angular/core';


@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../../../assets/css/main.css', '../../../../../assets/css/demo.css'],
  selector: 'partial-sidebar'
})
export class SidebarComponent {
   @Input() open: string;
   show: boolean[];

  ngOnInit() {
    this.initializeShow();
  }

  initializeShow() {
    if (this.open === 'elementos') {
      this.show = [true, false];
    } else if (this.open === 'componentes') {
      this.show = [false, true];
    } else {
      this.show = [false, false];
    }
  }

  showElementos() {
    this.show[1] = false;
    this.show[0] = !(this.show[0]);
  }

  showComponentes() {
    this.show[0] = false;
    this.show[1] = !(this.show[1]);
}
}
