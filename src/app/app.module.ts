import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { DesktopIconComponent } from './desktop-icon/desktop-icon.component';
import {DatePipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DesktopWindowComponent } from './desktop-window/desktop-window.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowsManagerComponent } from './windows-manager/windows-manager.component';
import { IdentityContentComponent } from './identity-content/identity-content.component';
import { IdentityPictureComponent } from './identity-picture/identity-picture.component';
import { HackerTextComponent } from './hacker-text/hacker-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingscreenComponent,
    BottomBarComponent,
    DesktopIconComponent,
    DesktopWindowComponent,
    WindowsManagerComponent,
    IdentityContentComponent,
    IdentityPictureComponent,
    HackerTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [DatePipe, WindowsManagerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
