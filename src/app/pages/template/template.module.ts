import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TEMPLATEPage } from './template.page';

const routes: Routes = [
  {
    path: '',
    component: TEMPLATEPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TEMPLATEPage]
})
export class TEMPLATEPageModule {}
