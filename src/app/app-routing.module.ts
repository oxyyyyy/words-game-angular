import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarPlayersPanelComponent } from './sidebar-players-panel/sidebar-players-panel.component';

const routes: Routes = [
  {
    path: 'sidebar-players-panel/:3',
    component: SidebarPlayersPanelComponent
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
