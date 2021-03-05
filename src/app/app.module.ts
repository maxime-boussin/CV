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
import { ExperiencesContentComponent } from './experiences-content/experiences-content.component';
import { ExperiencesItemComponent } from './experiences-item/experiences-item.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ScrambleTextComponent } from './scramble-text/scramble-text.component';
import { CommonModule } from '@angular/common';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from './github.service';
import { InfoContentComponent } from './info-content/info-content.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    HackerTextComponent,
    ExperiencesContentComponent,
    ExperiencesItemComponent,
    ScrambleTextComponent,
    SkillsContentComponent,
    ProjectsContentComponent,
    InfoContentComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        DragDropModule,
        MDBBootstrapModule,
        CommonModule,
        MatTabsModule,
        MatTreeModule,
        MatMenuModule,
        MatTooltipModule
    ],
  providers: [DatePipe, WindowsManagerComponent, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
