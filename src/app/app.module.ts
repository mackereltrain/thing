import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { OutlineSectionComponent } from './components/outline-section/outline-section.component';
import { SidenoteComponent } from './components/sidenote/sidenote.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SidenoteDialogComponent } from './components/dialogs/sidenote-dialog/sidenote-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    OutlineSectionComponent,
    SidenoteComponent,
    SidenoteDialogComponent,
  ],
  entryComponents: [
    SidenoteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
