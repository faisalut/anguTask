import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ],
})
export class LayoutsModule { }
