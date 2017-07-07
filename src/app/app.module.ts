import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilyTreeNode } from './familyTreeNode';
import { FamilyTree } from './familyTreeTree';

@NgModule({
  declarations: [
    AppComponent,
    FamilyTree,
    FamilyTreeNode
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
