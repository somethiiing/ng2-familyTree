import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <familyTree-tree [data]="data" ></familyTree-tree>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    { name: 'Parent', children: [
        { name: 'Child', children: [] },
        {
          name: 'Child', children: [
            { name: 'Grand Child', children: [] },
            {
              name: 'Grand Child', children: [
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] }
              ]
            },
            { name: 'Grand Child', children: [] }
          ]
        },
        { name: 'Child', children: [] }
      ]
    }
  ]
}
