import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarPlayersPanelComponent } from './sidebar-players-panel/sidebar-players-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarPlayersPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
