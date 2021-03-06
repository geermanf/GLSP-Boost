import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Tab } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul class="nav nav-tabs">
      <li  *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a >{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['../../../assets/css/estructura.css', '../../../assets/css/estilos.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab){
    // deactivate all tabs
    this.tabs.toArray().forEach( tabFE => tabFE.active = false);
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
