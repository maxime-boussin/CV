import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {WindowsManagerComponent} from '../windows-manager/windows-manager.component';

@Component({
  selector: 'app-desktop-window',
  templateUrl: './desktop-window.component.html',
  styleUrls: ['./desktop-window.component.scss']
})
export class DesktopWindowComponent implements OnInit {
  showBox = true;
  @Input() label: string;
  constructor(public wmc: WindowsManagerComponent, private el: ElementRef) { }

  ngOnInit(): void {
  }

  close(): void {
    this.wmc.removeWindow(this.label);
  }
}
