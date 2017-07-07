import { Component, Input } from '@angular/core';

@Component({
  selector: 'familyTree-tree',
  template: `
    <ul>
      <div *ngFor="let item of data">
        <familyTree-node [data]="item"></familyTree-node>
      </div>
    </ul>
  `,
  styles: ['']
})

export class FamilyTree {
  console;
  JSON;
  @Input() data: any[];

  constructor() {
    this.console = console;
    this.JSON = JSON;
  }
}
