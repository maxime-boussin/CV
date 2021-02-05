import { Component, OnInit } from '@angular/core';
import { Window } from '../window';
import {WINDOWS} from '../openedWindows';

@Component({
  selector: 'app-windows-manager',
  templateUrl: './windows-manager.component.html',
  styleUrls: ['./windows-manager.component.scss']
})
export class WindowsManagerComponent implements OnInit {
  windows: Window[] = WINDOWS;
  constructor() { }

  ngOnInit(): void {
  }

  addWindow(window: Window): void {
    if (!this.windows.find(x => x.label === window.label)){
      this.windows.push(window);
    }
  }

  removeWindow(label: string): void {
    this.windows.splice(this.windows.findIndex(x => x.label === label), 1);
  }
}
