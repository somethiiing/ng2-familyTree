import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'familyTree-node',
  template: `
    <ul
      class="node"
      (mouseenter)="select()"
      (mouseleave)="unselect()"
      [ngClass]="{'selected': selected}"
    >
      <li>
        {{ data.name }}
      </li>
        <ul *ngIf="data.children.length > 0">
          <li
            style="display:inline;"
            *ngFor="let child of data.children"
            [data]="child"
            [selected]="selected"
          ></li>
        </ul>
    </ul>
  `,
  styles: [`
    ul {
      list-style: none;
    }

    li {
      list-style: none;
    }

    .node li {
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #666;
      padding: 5px 10px;
      display: inline-block;
      font: 11px;
    }
    .selected {
      background-color: lightblue;
    }

  `]
})

export class FamilyTreeNode {
  @Input() selected = false;
  @Input() data;
  console;

  constructor() {
    this.console = console;
  }

  select() {
    console.log('select', this.data.name);
    this.selected = true;
  }

  unselect() {
    console.log('unselect', this.data.name);
    this.selected = false;
  }

}




