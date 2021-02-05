import {Component, Input, OnInit} from '@angular/core';
import {WindowsManagerComponent} from '../windows-manager/windows-manager.component';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './desktop-icon.component.html',
  styleUrls: ['./desktop-icon.component.scss']
})
export class DesktopIconComponent implements OnInit {
  @Input() iconLabel: string;
  @Input() iconCode: string;
  constructor(public wmc: WindowsManagerComponent) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.wmc.addWindow({label: this.iconLabel, code: this.iconCode});
  }

}
